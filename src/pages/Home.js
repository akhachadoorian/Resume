import React, { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

import HeaderWithLine from "../components/HeaderWithLine";
import { basic_info, education, experience, skills } from "../data/text/Home_data";
import Socials from "../components/Socials";
import Card from "../components/Card";

function Home({}) {
    return (
        <div id="home">
            <section id="name" data-scroll-section>
                {/* <div class=""> */}
                <HeaderWithLine
                    header_line_1={"Alex"}
                    header_line_2={"Khachadoorian"}
                    subtext={basic_info.title}
                    body={basic_info.blurb}
                    h_level="h1"
                />
                <Socials socials={basic_info.socials} />
                {/* </div> */}
            </section>

            <section id="education" data-scroll-section>
                <div className="cards">
                    {education.map((e, idx) => (
                        <Card
                            key={idx}
                            subtext={e.type}
                            header={e.major}
                            body={e.university}
                            theme="black"
                            scroll_speed="1"
                        />
                    ))}
                </div>
                <HeaderWithLine
                    header_line_1={"01"}
                    header_line_2={"Education"}
                />
            </section>
        </div>
    );
    }

export default Home;
