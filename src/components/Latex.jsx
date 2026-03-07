import React, { useEffect, useRef } from 'react';
import renderMathInElement from 'katex/dist/contrib/auto-render';
import 'katex/dist/katex.min.css';

const Latex = ({ children }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            renderMathInElement(containerRef.current, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false },
                    { left: '\\(', right: '\\)', display: false },
                    { left: '\\[', right: '\\]', display: true },
                ],
                throwOnError: false,
            });
        }
    }, [children]);

    return (
        <span ref={containerRef}>
            {children}
        </span>
    );
};

export default Latex;
