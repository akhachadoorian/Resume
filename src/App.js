// import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef } from "react";

import "./css/App.css";
import "./css/components.css";
import "./css/general.css";
import "./css/Home.css";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Home from "./pages/Home";

function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Router basename="/Resume">
          {/* <Navigation /> */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
