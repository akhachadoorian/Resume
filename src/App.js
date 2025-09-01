// import logo from './logo.svg';

import { useRef } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./css/App.css";
import "./css/components.css";
import "./css/general.css";
import "./css/Home.scss";
// import "./css/Home_old.css";
import "./css/CaseStudies.css";

// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

import Navigation from "./components/global/Navigation";
import Home from "./pages/Home";
import SmartFusion from "./pages/SmartFusion";

function App() {
  const containerRef = useRef(null);

  return (
      <main data-scroll-container ref={containerRef}>
        <Router basename="/Resume">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies/smart-fusion" element={<SmartFusion/>} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </main>
  );
}

export default App;


// function App() {
//   const containerRef = useRef(null);

//   return (
//     // <LocomotiveScrollProvider
//     //   options={{
//     //     smooth: true,
//     //     smartphone: {
//     //       smooth: true,
//     //     },
//     //     tablet: {
//     //       smooth: true,
//     //     },
//     //   }}
//     //   containerRef={containerRef}
//     // >
//       <main data-scroll-container ref={containerRef}>
//         <Router basename="/Resume">
//           <Navigation />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/case-studies/smart-fusion" element={<SmartFusion/>} />
//           </Routes>
//           {/* <Footer /> */}
//         </Router>
//       </main>
//     // </LocomotiveScrollProvider>
//   );
// }