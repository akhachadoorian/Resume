import React from "react";

import HeaderWithLine from "../components/HeaderWithLine";
import { basic_info, education, experience, skills, case_studies } from "../data/text/Home_data";
import Socials from "../components/Socials";
import Card from "../components/Card";
import CopyOnly from "../components/CopyOnly";
import CopyCard from "../components/CopyCard";
import CardWithImage from "../components/CardWithImage";

function Home({}) {
    var curr_job = experience[0];

    return (
        <div className="home_page" id="home">
            <section id="name" >
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

            <section id="education" >
                <CopyOnly
                    header={"Education"}
                    style={"l"}
                />
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
            </section>

            <section id="experience">
                <CopyOnly
                    header={"Work Experience"}
                    style={"l"}
                    id={"work_experience"}
                    // contain={false}
                />

                <div className="jobs">
                    <div className="job">
                        <CopyOnly 
                            eyebrow={curr_job.time}
                            header={curr_job.title}
                            subtext={curr_job.company}
                            style="m"
                        />

                        <div className="job_cards">
                            {curr_job.description.map((ee, ee_index) => (
                                <CopyCard 
                                    key={ee_index}
                                    header={ee.heading}
                                    body={ee.list}
                                    style="left"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills">
                <CopyOnly
                    header={"Skills & Qualification"}
                    style={"l"}
                />

                <div className="skill_box">
                    {skills.map((s, s_index) => (
                        <div className="box_unit" key={s_index}>
                            <h4 className="s_header">{s.title}</h4>
                            <p className="eyebrow">{s.body}</p>
                        </div>
                    ))}
                    
                </div>
            </section>

            <section id="case_studies">
                <CopyOnly
                    header={"Case Studies"}
                    style={"l"}
                />
                
                <div className="study_cards">
                    {case_studies.map((cs, idx) => (
                        <CardWithImage 
                            key={idx}
                            header={cs.name}
                            tags={cs.tags}
                            image={cs.image}
                            body={cs.body}
                            link={cs.link}
                            target={cs.target}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
    }

export default Home;
