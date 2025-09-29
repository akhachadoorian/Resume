import { useRef } from "react";
import resumePDF from "../data/AlexKhachadoorian_Resume.pdf";
import Button from "./Button";
// function useUnderlineScroll(refs, { startVH = 0.94, endVH = 0.34, smooth = 0.15 } = {}) {
//   const last = useRef(0);   // last smoothed progress (0..1)
//   const rAf = useRef(null);

//   useEffect(() => {
//     const els = refs.map(r => r.current).filter(Boolean);
//     if (!els.length) return;

//     const update = () => {
//       const vh = window.innerHeight;
//       const start = vh * startVH;
//       const end   = vh * endVH;

//       // compute progress from the FIRST element (you can average if you want)
//       const rect = els[0].getBoundingClientRect();
//       const centerY = rect.top + rect.height / 2;
//       const raw = (start - centerY) / (start - end);
//       const target = Math.max(0, Math.min(1, raw));

//       // simple lerp for smoothness
//       last.current = last.current + (target - last.current) * smooth;

//       const width = `${last.current * 100}% 2px`;
//       els.forEach(el => { el.style.backgroundSize = width; });

//       rAf.current = requestAnimationFrame(update);
//     };

//     // start loop
//     rAf.current = requestAnimationFrame(update);

//     // cleanup
//     return () => {
//       if (rAf.current) cancelAnimationFrame(rAf.current);
//     };
//   }, [refs, startVH, endVH, smooth]);
// }

export default function Hero() {
    const heroNameRef = useRef(null);
    //   useUnderlineScroll([heroNameRef], { startVH: 0.94, endVH: 0.34, smooth: 0.12 });

    return (
        <section id="name" className="hero--bg-dots">
            <div className="hero-inner">
                <div className="hero_name" ref={heroNameRef}>
                    <h3 className="eyebrow">
                        Full Stack <span className="accent">DEVELOPER</span>
                    </h3>
                    <h1>Alex Khachadoorian</h1>
                </div>

                <div className="lower_text">
                    <h3 className="subtitle">
                        Turning Complex Problems into <span className="accent">Elegant Code</span>
                    </h3>
                    <p className="body">
                        Grounded in computer science and marketing, I combine problem-solving and user focus. With
                        strengths in algorithms, databases, and software engineering, I build full-stack solutions that
                        adapt to evolving client needs.
                    </p>
                </div>

                <div className="btns">
                    <Button 
                        style={"main"}
                        button_text={"Download My Resume"}
                        link={resumePDF} 
                        target="_blank"
                    />
                    {/* <Button 
                        style={"outline"}
                        button_text={"See My Work"}
                        // link={} 
                        // target="_blank"
                    /> */}
                </div>
            </div>
        </section>
    );
}
