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


// --- Custom Node Components ---

const RootNode = ({ sourcePosition, data }) => (
    <div className="px-6 py-4 md:px-8 md:py-5 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 text-white shadow-[0_20px_50px_rgba(99,102,241,0.3)] border-2 border-white/20 min-w-[200px] md:min-w-[240px] text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <div className="font-black text-lg md:text-2xl tracking-tighter leading-tight uppercase drop-shadow-md">{data.label}</div>
        <div className="text-[10px] opacity-80 mt-1 font-black tracking-[0.3em] uppercase">Core Unit</div>
        <Handle type="source" position={sourcePosition} className="!bg-indigo-400 !w-3 !h-3 !border-2 !border-white" />
    </div>
);

const TopicNode = ({ targetPosition, sourcePosition, data }) => (
    <div className="px-5 py-3 md:px-6 md:py-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-100 dark:border-indigo-500/40 shadow-xl min-w-[180px] md:min-w-[200px] text-center group hover:border-indigo-500 transition-all duration-300 hover:shadow-indigo-500/10">
        <Handle type="target" position={targetPosition} className="!bg-indigo-400 !w-3 !h-3" />
        <div className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base tracking-tight">{data.label}</div>
        <Handle type="source" position={sourcePosition} className="!bg-indigo-400 !w-3 !h-3" />
    </div>
);

const SubtopicNode = ({ targetPosition, data }) => (
    <div className="px-4 py-2 md:px-5 md:py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm min-w-[150px] md:min-w-[160px] text-center hover:bg-white dark:hover:bg-slate-700 transition-all duration-300">
        <Handle type="target" position={targetPosition} className="!bg-slate-400 !w-2 !h-2" />
        <div className="text-xs font-semibold text-slate-600 dark:text-slate-200 tracking-tight leading-relaxed">{data.label}</div>
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
        nodesep: isSmallScreen ? 60 : 50,
        ranksep: isSmallScreen ? 200 : 100,
    });

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: 250, height: 100 });
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
                x: nodeWithPosition.x - 125,
                y: nodeWithPosition.y - 50,
            },
        };
    });

    return { nodes: layoutedNodes, edges };
};

// --- Viewport Controller ---
const ViewportController = ({ nodes, isSmallScreen }) => {
    const { setCenter } = useReactFlow();

    useEffect(() => {
        const rootNode = nodes.find((n) => n.id === 'root');
        if (rootNode) {
            // Swapped zoom levels
            const zoom = isSmallScreen ? 0.9 : 0.75;
            const centerX = rootNode.position.x + 125;
            const centerY = rootNode.position.y + 50;
            setCenter(centerX, centerY, { zoom, duration: 800 });
        }
    }, [nodes, isSmallScreen, setCenter]);

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
                style: { stroke: '#6366f1', strokeWidth: 3, opacity: 0.6 },
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
                    style: { stroke: '#94a3b8', strokeWidth: 2, opacity: 0.3 },
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
        <div className="relative w-full h-[calc(100vh-64px)] flex flex-col bg-slate-50 dark:bg-[#020617] overflow-hidden">
            <div className="absolute top-6 left-6 z-10 flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all font-black text-xs uppercase tracking-widest"
                >
                    <ArrowLeft size={16} strokeWidth={3} />
                    Back
                </button>
            </div>

            <div className="absolute top-6 right-6 z-10 hidden md:block">
                <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-4 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-2xl space-y-3 max-w-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                            <Maximize2 size={20} />
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-0.5">Chapter Map</h4>
                            <h2 className="text-sm font-black text-slate-900 dark:text-white truncate">{chapter.title}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-grow w-full h-full relative">
                <ReactFlow
                    key={isSmallScreen ? 'horizontal' : 'vertical'}
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    nodeTypes={nodeTypes}
                    minZoom={0.2}
                    maxZoom={2}
                >
                    <Background
                        color="#94a3b8"
                        variant="dots"
                        gap={25}
                        size={1.5}
                        opacity={0.2}
                    />
                    <Controls
                        className="!bg-white dark:!bg-slate-900 !border-slate-200 dark:!border-slate-800 !shadow-2xl !rounded-2xl !overflow-hidden !m-6"
                    />
                    <ViewportController nodes={nodes} isSmallScreen={isSmallScreen} />
                </ReactFlow>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-[90%] md:w-auto">
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl px-6 py-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col md:flex-row items-center gap-4 md:gap-12">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                            <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest whitespace-nowrap">Visual Roadmap</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">{chapter.flow.length} Topics</span>
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
