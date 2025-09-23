// import logo from './logo.svg';

import { useRef } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./css/App.css";
import "./css/components.scss";
import "./css/general.scss";
import "./css/Home.scss";
// import "./css/Home_old.css";
import "./css/CaseStudies.css";
import "./css/components_v2.scss";

import 'aos/dist/aos.css';


// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

import Home_v3 from "./pages/Home_v3";
import SmartFusion from "./pages/SmartFusion";

function App() {
  const containerRef = useRef(null);

  return (
      <main data-scroll-container ref={containerRef}>
        <Router basename="/Resume">
          {/* <Navigation /> */}
          <Routes>
            <Route path="/" element={<Home_v3 />} />
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