import { useEffect, useRef, useState } from "react";

export default function HeaderWithNumber({ number, header }) {
    const containerRef = useRef(null);
    const slashRef = useRef(null);
    const [slashes, setSlashes] = useState("");

    useEffect(() => {
        const resize = () => {
            if (!containerRef.current) return;

            const totalWidth = containerRef.current.offsetWidth;
            const textWidth = containerRef.current.querySelector(".text")?.offsetWidth || 0;
            const available = totalWidth - textWidth - 10; // buffer
            const initialGuess = Math.floor(available / 7); // rough estimate per char width

            // render an initial guess
            setSlashes("/".repeat(initialGuess));

            // wait for the DOM update, then refine
            requestAnimationFrame(() => {
                const slashWidth = slashRef.current?.offsetWidth || 0;
                if (slashWidth === 0) return;

                // adjust to fill (or reduce) based on actual measurement
                const ratio = available / slashWidth;
                const adjustedCount = Math.floor(initialGuess * ratio);
                setSlashes("/".repeat(adjustedCount));
            });
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);
    
    return (
        <div className="header_w_num" ref={containerRef}>
            <div className="text">
                <p className="number">{number}.</p>
                <h2 className="subtext">{header}</h2>
            </div>

            <div className="slash-divider" aria-hidden="true" ref={slashRef}>
                {slashes}
            </div>
        </div>
    );
}
