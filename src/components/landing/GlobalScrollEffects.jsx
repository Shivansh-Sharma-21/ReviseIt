import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

const DustParticle = ({ scrollYProgress }) => {
    // Hooks must be at top-level, so we call it here for each individual particle
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, -(Math.random() * 1000 + 500)]);
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    
    return (
        <motion.div
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] opacity-20 transform-gpu"
            style={{
                top,
                left,
                y: yTransform
            }}
        />
    );
};

const GlobalScrollEffects = () => {
    const { scrollYProgress } = useScroll();
    const isMobile = useIsMobile();
    
    // Scale the entire background grid dramatically as we scroll
    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
    // Rotate slightly to give a 3D floating feel
    const rotateX = useTransform(scrollYProgress, [0, 1], [60, 40]);
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    
    // Animate a massive background glow that shifts color and moves
    const glowY = useTransform(scrollYProgress, [0, 1], ['-20%', '120%']);
    
    return (
        <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden perspective-[2000px] transform-gpu">
            {/* The Shiftin Glow */}
            <motion.div
                className="absolute left-1/2 w-[1000px] h-[500px] rounded-full blur-[150px] opacity-20 dark:opacity-30 transform-gpu"
                style={{
                    x: '-50%',
                    y: glowY,
                    background: "linear-gradient(90deg, #6366f1, #06b6d4, #10b981)",
                }}
            />

            {/* The 3D Grid Floor */}
            <motion.div
                className={`absolute inset-x-[-50%] bottom-[-50%] h-[150vh] origin-bottom opacity-10 dark:opacity-20 transform-gpu ${isMobile ? 'scale-75 translate-y-[20%]' : ''}`}
                style={isMobile ? {} : {
                    scale,
                    rotateX,
                    y,
                    backgroundImage: `
                        linear-gradient(to right, #6366f1 2px, transparent 2px),
                        linear-gradient(to top, #6366f1 2px, transparent 2px)
                    `,
                    backgroundSize: '100px 100px',
                    maskImage: 'radial-gradient(circle at top center, transparent 10%, black 80%)',
                }}
                {...(isMobile ? {
                    style: {
                        backgroundImage: `
                            linear-gradient(to right, #6366f1 2px, transparent 2px),
                            linear-gradient(to top, #6366f1 2px, transparent 2px)
                        `,
                        backgroundSize: '50px 50px',
                        maskImage: 'radial-gradient(circle at top center, transparent 10%, black 80%)',
                    }
                } : {})}
            />
            
            {/* Floating Dust Particles */}
            {!isMobile && [...Array(15)].map((_, i) => (
                <DustParticle key={i} scrollYProgress={scrollYProgress} />
            ))}
        </div>
    );
};

export default GlobalScrollEffects;
