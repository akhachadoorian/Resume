import { useEffect, useRef, useState } from 'react'
import { Route, BrowserRouter } from "react-router-dom";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { Router, Routes } from 'react-router-dom';

import './styles/main.scss';


gsap.registerPlugin(ScrollTrigger);

function App() {
      const lenisRef = useRef<LenisRef>(null);

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => gsap.ticker.remove(update);
    }, []);

  const [count, setCount] = useState(0)

  return (
    <ReactLenis root options={{ autoRaf: false, duration: 1.2, anchors: true, smoothWheel: true, syncTouch: false, naiveDimensions: true, stopInertiaOnNavigate: true }} ref={lenisRef}>
                <Route>
                    {/* <Navigation /> */}
                    <main>
                        <Routes>
                            {/* <BrowserRouter path="/" element={<Home loaded={loaded} />} /> */}
                        </Routes>
                    </main>
                    {/* <Footer /> */}
                </Route>
      
            </ReactLenis>
  )
}

export default App
