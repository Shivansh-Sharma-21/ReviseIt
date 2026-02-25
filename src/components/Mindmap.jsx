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
import { ArrowLeft, Maximize2, X, BookOpen, HelpCircle, Image as ImageIcon } from 'lucide-react';

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
    <div className="px-8 py-5 md:px-10 md:py-7 rounded-[2rem] bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl border-[3px] border-slate-400/50 dark:border-indigo-400/20 shadow-[0_40px_80px_rgba(15,23,42,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] min-w-[240px] md:min-w-[300px] text-center group hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-500 hover:scale-[1.05] hover:shadow-indigo-500/20">
        <Handle type="target" position={targetPosition} className="!bg-indigo-600 !w-4 !h-4 !border-2 !border-white" />
        <div className="font-extrabold text-slate-950 dark:text-white text-lg md:text-2xl tracking-tight leading-tight">{data.label}</div>
        <Handle type="source" position={sourcePosition} className="!bg-indigo-600 !w-4 !h-4 !border-2 !border-white" />
    </div>
);

const SubtopicNode = ({ targetPosition, data }) => (
    <div className="px-6 py-4 md:px-8 md:py-6 rounded-2xl bg-white/90 dark:bg-slate-800/60 backdrop-blur-2xl border-2 border-slate-400/40 dark:border-slate-700 shadow-[0_25px_50px_rgba(15,23,42,0.08)] min-w-[180px] md:min-w-[220px] text-center group hover:bg-white dark:hover:bg-slate-700 transition-all duration-500 hover:scale-[1.08] hover:border-indigo-500 hover:shadow-indigo-500/10">
        <Handle type="target" position={targetPosition} className="!bg-slate-500 dark:!bg-slate-400 !w-3 !h-3 !border-2 !border-white dark:!border-slate-800" />
        <div className="text-xl md:text-3xl font-bold text-slate-950 dark:text-slate-100 tracking-tight leading-relaxed group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{data.label}</div>
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

    const nodeWidth = isSmallScreen ? 350 : 600;
    const nodeHeight = isSmallScreen ? 140 : 300;

    dagreGraph.setGraph({
        rankdir: direction,
        nodesep: isSmallScreen ? 40 : 200,
        ranksep: isSmallScreen ? 150 : 450,
    });

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
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
                x: nodeWithPosition.x - (nodeWidth / 2),
                y: nodeWithPosition.y - (nodeHeight / 2),
            },
        };
    });

    return { nodes: layoutedNodes, edges };
};

// --- Flashcard Modal Component ---
const FlashcardModal = ({ data, onClose }) => {
    if (!data) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <div
                className="absolute inset-0 bg-slate-950/85 animate-backdrop-fade"
                onClick={onClose}
            />
            <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 animate-modal-entry scrollbar-hide">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white dark:bg-slate-900 px-6 py-5 md:px-8 md:py-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 md:gap-4 min-w-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl md:rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                            <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="min-w-0">
                            <h4 className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-300 mb-0.5 truncate">Quick Revision</h4>
                            <h2 className="text-lg md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight truncate">{data.subtopic}</h2>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex-shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-red-500 hover:text-white transition-all shadow-inner"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8 space-y-8">
                    {/* Content Section */}
                    {data.content && (
                        <section className="space-y-4">
                            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300">
                                <BookOpen size={18} strokeWidth={3} />
                                <h3 className="text-xs font-black uppercase tracking-widest">Core Concept</h3>
                            </div>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-100 leading-relaxed font-medium">
                                {data.content}
                            </p>
                        </section>
                    )}

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Important Questions */}
                        {data.importantQuestions && data.importantQuestions.length > 0 && (
                            <section className="space-y-4 p-6 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-300">
                                    <HelpCircle size={18} strokeWidth={3} />
                                    <h3 className="text-xs font-black uppercase tracking-widest">Key Questions</h3>
                                </div>
                                <ul className="space-y-3">
                                    {data.importantQuestions.map((q, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm font-bold text-slate-600 dark:text-slate-200">
                                            <span className="text-emerald-500 dark:text-emerald-400 font-black">Q.</span>
                                            {q}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Diagram */}
                        {data.diagram && (
                            <section className="space-y-4">
                                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-300">
                                    <ImageIcon size={18} strokeWidth={3} />
                                    <h3 className="text-xs font-black uppercase tracking-widest">Visual Aid</h3>
                                </div>
                                <div className="rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl group aspect-video">
                                    <img
                                        src={data.diagram}
                                        alt={data.subtopic}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Concept Cards Subset */}
                    {data.cards && data.cards.length > 0 && (
                        <section className="space-y-4">
                            <div className="flex items-center gap-2 text-violet-600 dark:text-violet-300">
                                <BookOpen size={18} strokeWidth={3} />
                                <h3 className="text-xs font-black uppercase tracking-widest">Fast Recall Cards</h3>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {data.cards.map((card, idx) => (
                                    <div key={idx} className="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 group hover:border-indigo-400 transition-colors">
                                        <div className="text-[10px] font-black text-indigo-600 dark:text-indigo-300 mb-2 uppercase tracking-[0.15em]">Flash Question</div>
                                        <div className="text-slate-900 dark:text-white font-bold mb-3">{card.question}</div>
                                        <div className="text-sm text-slate-600 dark:text-slate-200 font-medium p-3 rounded-xl bg-white/50 dark:bg-slate-950">
                                            {card.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {!data.content && !data.cards && (
                        <div className="text-center py-12">
                            <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest italic text-sm">Flashcard content for this subtopic is being prepared.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
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

            const nodeWidth = isSmallScreen ? 350 : 600;
            const nodeHeight = isSmallScreen ? 140 : 300;

            const zoom = isSmallScreen ? 0.95 : 0.7;
            const centerX = rootNode.position.x + (nodeWidth / 2);
            const centerY = rootNode.position.y + (nodeHeight / 2);

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

    const [selectedSubtopic, setSelectedSubtopic] = useState(null);

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
        <div className="relative w-full h-[calc(100vh-64px)] flex flex-col bg-indigo-100/80 dark:bg-[#020617] overflow-hidden transition-colors duration-500">
            {/* Optimized Canvas Background - Now a clear uniform indigo wash for Light Mode */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
                <div className="hidden dark:block absolute w-[80vw] h-[80vw] bg-indigo-500/8 rounded-full blur-[100px] -top-[40vw] -left-[40vw] animate-subtle-blob will-change-transform" />
                <div className="hidden dark:block absolute w-[80vw] h-[80vw] bg-violet-500/8 rounded-full blur-[100px] -bottom-[40vw] -right-[40vw] animate-subtle-blob animation-delay-4000 will-change-transform" />
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
                    onNodeClick={(_, node) => {
                        if (node.type === 'subtopic') {
                            const flashcardData = (chapter.structuredFlashcards || []).find(f =>
                                f.subtopic?.trim().toLowerCase() === node.data.label?.trim().toLowerCase()
                            );
                            if (flashcardData) {
                                setSelectedSubtopic(flashcardData);
                            } else {
                                // Default/Placeholder if none found
                                setSelectedSubtopic({ subtopic: node.data.label });
                            }
                        }
                    }}
                >
                    <Controls
                        className="!bg-white dark:!bg-slate-900 !border-slate-200 dark:!border-slate-800 !shadow-2xl !rounded-2xl !overflow-hidden !m-6"
                    />
                    <ViewportController nodes={nodes} isSmallScreen={isSmallScreen} chapterTitle={chapter?.title || 'default'} />
                </ReactFlow>
            </div>

            {/* Flashcard Popup */}
            {selectedSubtopic && (
                <FlashcardModal
                    data={selectedSubtopic}
                    onClose={() => setSelectedSubtopic(null)}
                />
            )}

            {/* UI Overlays - Switched to Absolute to anchor within the Mindmap container */}
            <div className="absolute top-6 left-6 z-50 flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all font-black text-xs uppercase tracking-widest"
                >
                    <ArrowLeft size={16} strokeWidth={3} />
                    Back
                </button>
            </div>

            <div className="absolute top-6 right-6 z-50 hidden md:block">
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

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto">
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
                        START MASTERY CHECK
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
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @keyframes modal-entry {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes backdrop-fade {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-modal-entry {
                    animation: modal-entry 0.15s ease-out forwards;
                    will-change: opacity;
                }
                .animate-backdrop-fade {
                    animation: backdrop-fade 0.1s ease-out forwards;
                    will-change: opacity;
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
