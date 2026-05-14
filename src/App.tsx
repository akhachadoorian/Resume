import { useEffect, useRef } from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";

import Home from './pages/Home/Home';
import Navigation from './layout/Navigation/Navigation';

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

  return (
    <ReactLenis root options={{ autoRaf: false, duration: 1.2, anchors: true, smoothWheel: true, syncTouch: false, naiveDimensions: true, stopInertiaOnNavigate: true }} ref={lenisRef}>
                <Router>
                    <Navigation />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </main>
                    {/* <Footer /> */}
                </Router>
      
            </ReactLenis>
  )
}

export default App
