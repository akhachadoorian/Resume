import React from "react";
import HeaderWithLine from "../components/HeaderWithLine";
import { basic_info, education } from "../data/text/Home_data";
import Socials from "../components/Socials";
import Card from "../components/Card";

function Home({}) {
    return (
        <div className="home">
            <section id="name">
                <HeaderWithLine 
                    header={"Alex<br />Khachadoorian"}
                    subtext={basic_info.title}
                />
                <Socials 
                    socials={basic_info.socials}
                />
            </section>

            <section id="education">
                <div className="cards">
                    {education.map((e, idx) => (
                        <Card 
                            header={e.type}
                            subtext={e.major}
                            body={e.university}
                        />
                    ))}
                </div>
                <HeaderWithLine 
                    header={"01<br />Education"}
                />
            </section>

        </div>
    )
}

export default Home