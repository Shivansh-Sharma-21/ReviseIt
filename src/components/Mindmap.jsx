import React, { useMemo, useEffect, useState } from 'react';
import {
    ReactFlow,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    Position,
    Handle,
    ReactFlowProvider,
    useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from 'dagre';
import { ArrowLeft, Maximize2 } from 'lucide-react';

// --- Custom Node Components - PREMIUM ENHANCED ---

const RootNode = ({ sourcePosition, data }) => (
    <div className="px-10 py-7 md:px-14 md:py-10 rounded-[3rem] bg-gradient-to-br from-indigo-600 via-indigo-800 to-violet-950 text-white shadow-[0_40px_100px_rgba(79,70,229,0.5)] border-[6px] border-white/40 min-w-[300px] md:min-w-[400px] text-center relative overflow-hidden group transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_50px_120px_rgba(79,70,229,0.6)]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]" />
        <div className="font-black text-2xl md:text-5xl tracking-[ -0.05em] leading-[0.9] uppercase drop-shadow-2xl mb-2">{data.label}</div>
        <div className="text-[10px] md:text-sm opacity-90 mt-4 font-black tracking-[0.6em] uppercase text-indigo-300 drop-shadow-md">Core Curriculum</div>
        <Handle type="source" position={sourcePosition} className="!bg-white !w-6 !h-6 !border-[6px] !border-indigo-600 shadow-2xl transition-transform group-hover:scale-125" />
    </div>
);

const TopicNode = ({ targetPosition, sourcePosition, data }) => (
    <div className="px-8 py-5 md:px-10 md:py-7 rounded-[2rem] bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl border-[3px] border-indigo-500/40 dark:border-indigo-400/20 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] min-w-[240px] md:min-w-[300px] text-center group hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-500 hover:scale-[1.05] hover:shadow-indigo-500/20">
        <Handle type="target" position={targetPosition} className="!bg-indigo-600 !w-4 !h-4 !border-2 !border-white" />
        <div className="font-extrabold text-slate-950 dark:text-white text-lg md:text-2xl tracking-tight leading-tight">{data.label}</div>
        <Handle type="source" position={sourcePosition} className="!bg-indigo-600 !w-4 !h-4 !border-2 !border-white" />
    </div>
);

const SubtopicNode = ({ targetPosition, data }) => (
    <div className="px-6 py-4 md:px-8 md:py-6 rounded-2xl bg-indigo-50/60 dark:bg-slate-800/60 backdrop-blur-2xl border-2 border-slate-200 dark:border-slate-700 shadow-xl min-w-[180px] md:min-w-[220px] text-center group hover:bg-white dark:hover:bg-slate-700 transition-all duration-500 hover:scale-[1.08] hover:border-indigo-500 hover:shadow-indigo-500/10">
        <Handle type="target" position={targetPosition} className="!bg-slate-500 dark:!bg-slate-400 !w-3 !h-3 !border-2 !border-white dark:!border-slate-800" />
        <div className="text-xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-relaxed group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{data.label}</div>
    </div>
);

const nodeTypes = {
    root: RootNode,
    topic: TopicNode,
    subtopic: SubtopicNode,
};

// --- Layout Helper ---

const getLayoutedElements = (nodes, edges, isSmallScreen) => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));

    // Swapped per user request: SmallScreen -> LR (Horizontal), Desktop -> TB (Vertical)
    const direction = isSmallScreen ? 'LR' : 'TB';

    dagreGraph.setGraph({
        rankdir: direction,
        nodesep: 200, // Increased for massive nodes
        ranksep: 450, // Increased for massive nodes
    });

    nodes.forEach((node) => {
        // Massive dimensions for Dagre to match the massive text nodes
        dagreGraph.setNode(node.id, { width: 600, height: 300 });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    const layoutedNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        return {
            ...node,
            targetPosition: isSmallScreen ? Position.Left : Position.Top,
            sourcePosition: isSmallScreen ? Position.Right : Position.Bottom,
            position: {
                x: nodeWithPosition.x - 300,
                y: nodeWithPosition.y - 150,
            },
        };
    });

    return { nodes: layoutedNodes, edges };
};

// --- Viewport Controller ---
const ViewportController = ({ nodes, isSmallScreen, chapterTitle }) => {
    const { setCenter } = useReactFlow();
    const lastLayoutKey = React.useRef(null);
    const hasInitiated = React.useRef(false);

    useEffect(() => {
        const currentKey = `${chapterTitle}-${isSmallScreen}`;

        // Prevent snap-back during manual interaction
        if (lastLayoutKey.current === currentKey) return;

        const rootNode = nodes.find((n) => n.id === 'root');
        if (rootNode) {
            lastLayoutKey.current = currentKey;

            const zoom = isSmallScreen ? 0.8 : 0.65;
            const centerX = rootNode.position.x + 300;
            const centerY = rootNode.position.y + 150;

            // Use animation frame + timeout to ensure ReactFlow is ready to move the viewport
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const duration = !hasInitiated.current ? 0 : 800;
                    setCenter(centerX, centerY, { zoom, duration });
                    hasInitiated.current = true;
                }, 50);
            });
        }
    }, [nodes, isSmallScreen, chapterTitle, setCenter]);

    return null;
};

// --- Main Component ---

const MindmapContent = ({ chapter, onBack, onInitiate }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(
        typeof window !== 'undefined' ? window.innerWidth < 1024 : false
    );

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const initialElements = useMemo(() => {
        const nodes = [];
        const edges = [];

        nodes.push({
            id: 'root',
            type: 'root',
            data: { label: chapter.title },
            position: { x: 0, y: 0 },
        });

        chapter.flow.forEach((branch, bIdx) => {
            const topicId = `topic-${bIdx}`;

            nodes.push({
                id: topicId,
                type: 'topic',
                data: { label: branch.topic },
                position: { x: 0, y: 0 },
            });

            edges.push({
                id: `e-root-${topicId}`,
                source: 'root',
                target: topicId,
                animated: true,
                style: { stroke: '#4f46e5', strokeWidth: 5, opacity: 0.8 },
            });

            branch.subtopics.forEach((sub, sIdx) => {
                const subId = `${topicId}-sub-${sIdx}`;
                nodes.push({
                    id: subId,
                    type: 'subtopic',
                    data: { label: sub },
                    position: { x: 0, y: 0 },
                });

                edges.push({
                    id: `e-${topicId}-${subId}`,
                    source: topicId,
                    target: subId,
                    style: { stroke: '#64748b', strokeWidth: 3, opacity: 0.4 },
                });
            });
        });

        return getLayoutedElements(nodes, edges, isSmallScreen);
    }, [chapter, isSmallScreen]);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialElements.nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialElements.edges);

    useEffect(() => {
        setNodes(initialElements.nodes);
        setEdges(initialElements.edges);
    }, [initialElements, setNodes, setEdges]);

    return (
        <div className="relative w-full h-[calc(100vh-64px)] flex flex-col bg-slate-100 dark:bg-[#020617] overflow-hidden transition-colors duration-500">
            {/* Optimized Canvas Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.12)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.12)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
                <div className="absolute w-[80vw] h-[80vw] bg-indigo-500/10 dark:bg-indigo-500/8 rounded-full blur-[120px] -top-[40vw] -left-[40vw] animate-subtle-blob will-change-transform" />
                <div className="absolute w-[80vw] h-[80vw] bg-violet-500/10 dark:bg-violet-500/8 rounded-full blur-[120px] -bottom-[40vw] -right-[40vw] animate-subtle-blob animation-delay-4000 will-change-transform" />
            </div>

            <div className="flex-grow w-full h-full relative z-10">
                <ReactFlow
                    key={isSmallScreen ? 'horizontal' : 'vertical'}
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    nodeTypes={nodeTypes}
                    minZoom={0.05}
                    maxZoom={3}
                    onlyRenderVisibleElements={true}
                >
                    <Controls
                        className="!bg-white dark:!bg-slate-900 !border-slate-200 dark:!border-slate-800 !shadow-2xl !rounded-2xl !overflow-hidden !m-6"
                    />
                    <ViewportController nodes={nodes} isSmallScreen={isSmallScreen} chapterTitle={chapter?.title || 'default'} />
                </ReactFlow>
            </div>

            {/* UI Overlays - Moved after Flow for correct stacking */}
            <div className="absolute top-6 left-6 z-30 flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all font-black text-xs uppercase tracking-widest"
                >
                    <ArrowLeft size={16} strokeWidth={3} />
                    Back
                </button>
            </div>

            <div className="absolute top-6 right-6 z-30 hidden md:block">
                <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-4 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-2xl space-y-3 max-w-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                            <Maximize2 size={20} />
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-0.5">Chapter Map</h4>
                            <h2 className="text-sm font-black text-slate-900 dark:text-white truncate">{chapter?.title}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-[90%] md:w-auto">
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl px-6 py-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col md:flex-row items-center gap-4 md:gap-12">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                            <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest whitespace-nowrap">Visual Roadmap</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">{chapter?.flow?.length || 0} Topics</span>
                        </div>
                    </div>

                    <button
                        onClick={onInitiate}
                        className="w-full md:w-auto px-8 py-3 rounded-2xl bg-indigo-600 dark:bg-indigo-500 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg hover:scale-105 transition-all"
                    >
                        Let's Revise it
                    </button>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes subtle-blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    100% { transform: translate(40px, -40px) scale(1.05); }
                }
                .animate-subtle-blob {
                    animation: subtle-blob 15s infinite alternate ease-in-out;
                }
                .will-change-transform {
                    will-change: transform;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .react-flow__controls button {
                    background-color: transparent !important;
                    border-bottom: 1px solid rgba(0,0,0,0.05) !important;
                    color: #64748b !important;
                }
                .dark .react-flow__controls button {
                    border-bottom: 1px solid rgba(255,255,255,0.05) !important;
                    color: #94a3b8 !important;
                }
                .react-flow__controls button:hover {
                    background-color: rgba(99, 102, 241, 0.1) !important;
                    color: #6366f1 !important;
                }
                .react-flow__controls button svg {
                    fill: currentColor !important;
                }
                .react-flow__attribution {
                    display: none;
                }
                .react-flow__edge-path {
                    stroke-linecap: round;
                }
            `}} />
        </div>
    );
};

const Mindmap = (props) => (
    <ReactFlowProvider>
        <MindmapContent {...props} />
    </ReactFlowProvider>
);

export default Mindmap;
