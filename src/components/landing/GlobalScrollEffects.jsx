import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

// Statically pre-generate particle parameters so Math.random() is never called inside components during render.
const PARTICLES_CONFIG = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: `${(15 + i * 5.7) % 100}%`,
    left: `${(7 + i * 23.3) % 100}%`,
    multiplier: 400 + ((i * 73) % 600)
}));

const DustParticle = ({ scrollYProgress, top, left, multiplier }) => {
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, -multiplier]);
    
    return (
        <motion.div
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] opacity-20 transform-gpu will-change-transform"
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
    const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1] : [1, 3]);
    // Rotate slightly to give a 3D floating feel
    const rotateX = useTransform(scrollYProgress, [0, 1], isMobile ? [60, 60] : [60, 40]);
    const y = useTransform(scrollYProgress, [0, 1], isMobile ? ['0%', '0%'] : ['0%', '20%']);
    
    // Animate a massive background glow that shifts color and moves
    const glowY = useTransform(scrollYProgress, [0, 1], isMobile ? ['50%', '50%'] : ['-20%', '120%']);
    
    return (
        <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden perspective-[2000px] transform-gpu">
            {/* The Shiftin Glow */}
            <motion.div
                className="absolute left-1/2 w-[1000px] h-[500px] rounded-full blur-[150px] opacity-20 dark:opacity-30 transform-gpu will-change-transform"
                style={{
                    x: '-50%',
                    y: glowY,
                    background: "linear-gradient(90deg, #6366f1, #06b6d4, #10b981)",
                }}
            />

            {/* The 3D Grid Floor */}
            <motion.div
                className={`absolute inset-x-[-50%] bottom-[-50%] h-[150vh] origin-bottom opacity-10 dark:opacity-20 transform-gpu will-change-transform ${isMobile ? 'scale-75 translate-y-[20%] grid-floor-mobile' : 'grid-floor-desktop'}`}
                style={isMobile ? {} : {
                    scale,
                    rotateX,
                    y,
                }}
            />
            
            {/* Floating Dust Particles */}
            {!isMobile && PARTICLES_CONFIG.map((p) => (
                <DustParticle 
                    key={p.id} 
                    scrollYProgress={scrollYProgress} 
                    top={p.top}
                    left={p.left}
                    multiplier={p.multiplier}
                />
            ))}
        </div>
    );
};

export default GlobalScrollEffects;
