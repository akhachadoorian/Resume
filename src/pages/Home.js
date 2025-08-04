import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import HeaderWithLine from "../components/HeaderWithLine";
import { basic_info, education, experience } from "../data/text/Home_data";
import Socials from "../components/Socials";
import Card from "../components/Card";

function Home({}) {
    return (
        <div id="home">
            <section id="name" data-scroll-section>
                <HeaderWithLine
                    header_line_1={"Alex"}
                    header_line_2={"Khachadoorian"}
                    subtext={basic_info.title}
                    body={basic_info.blurb}
                />
                <Socials socials={basic_info.socials} />
            </section>

            <section id="education" data-scroll-section>
                <div className="cards">
                    {education.map((e, idx) => (
                        <Card
                            key={idx}
                            subtext={e.type}
                            header={e.major}
                            body={e.university}
                            theme="white"
                        />
                    ))}
                </div>
                <HeaderWithLine
                    header_line_1={"01"}
                    header_line_2={"Education"}
                    theme="white"
                />
            </section>

            <section id="experience" data-scroll-section>
                <HeaderWithLine
                    header_line_1={"02"}
                    header_line_2={"Work Experience"}
                />
                <div className="jobs">
                    {experience.map((e, idx) => (
                        <div className="job" >
                            <Card
                                key={idx}
                                header={e.company}
                                subtext={e.title}
                                body={e.time}
                                scroll_speed="1"
                                sticky={true}
                                scroll_target=".job"
                                scroll_offset="24"
                            />
                            <div className="descriptions">
                                {e.description.map((ee, ee_index) => (
                                    <div className="description" key={ee_index}>
                                        <h6 className="sub_header">{ee.heading}</h6>
                                        <ul>
                                            {ee.list.map((l, l_index) => {
                                                return <li key={l_index}>{l}</li>;
                                            })}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* <section id="projects" data-scroll-section>
                <p>Test</p>
            </section> */}
        </div>
    );
    }

export default Home;
