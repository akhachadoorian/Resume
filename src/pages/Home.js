import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import HeaderWithLine from "../components/HeaderWithLine";
import { basic_info, education } from "../data/text/Home_data";
import Socials from "../components/Socials";
import Card from "../components/Card";

function Home({}) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

     console.log("✅ Locomotive Scroll initialized", scroll);

    setTimeout(() => {
      scroll.update();
    }, 500);

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <section
        data-scroll-section
        style={{ height: "200vh", backgroundColor: "lightgray" }}
      >
        <h2 data-scroll data-scroll-speed="2">
          Scroll me!
        </h2>
      </section>
      <section id="name" data-scroll-section>
        <HeaderWithLine
          header_line_1={"Alex"}
          header_line_2={"Khachadoorian"}
          subtext={basic_info.title}
        />
        <Socials socials={basic_info.socials} />
      </section>

      <section id="education" data-scroll-section>
        <div className="cards">
          {education.map((e, idx) => (
            <Card
              key={idx}
              header={e.type}
              subtext={e.major}
              body={e.university}
            />
          ))}
        </div>
        <HeaderWithLine header_line_1={"01"} header_line_2={"Education"} />
      </section>
    </div>
  );
}

export default Home;
