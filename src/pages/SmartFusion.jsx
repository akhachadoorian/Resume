import React from "react";
import CopyOnly from "../components/CopyOnly";

import { overview, c_and_g, solution } from "../data/text/SmartFusion_data";
import CopyCard from "../components/CopyCard";
import LargeCards from "../components/LargeCards";
import CardWithIcon from "../components/CardWithIcon";

function SmartFusion({}) {
    return (
        <div className="case_study_inner">
            <section id="smart_fusion">
                <CopyOnly
                    style="xl"
                    header={"Smart Fusion"}
                    subtext={"Website development"}
                />

                <div className="cs_info">
                    <div className="cs_info_card">
                        <p className="eyebrow">Client</p>
                        <h3 className="s_header">Smart Fusion</h3>
                    </div>
                    <div className="cs_info_card">
                        <p className="eyebrow">Timeline</p>
                        <h3 className="s_header">July 2024 - January 2025</h3>
                    </div>
                    <div className="cs_info_card">
                        <p className="eyebrow">Role</p>
                        <h3 className="s_header">Lead Full-Stack Developer </h3>
                    </div>
                </div>
            </section>

            <section id="overview">
                <div className="img_holder">
                    <img src={overview.image.image} alt={overview.image.alt} />
                </div>
                <div className="text">
                    <CopyOnly
                        style="l"
                        header={overview.header}
                        body={overview.body}
                    />
                    <CopyCard
                        style="left"
                        eyebrow={overview.card.header}
                        body={overview.card.body}
                    />
                </div>
            </section>

            <section id="challenges_goals">
                <LargeCards
                    header={c_and_g[0].title}
                    body={c_and_g[0].body}
                    orientation={c_and_g[0].orientation}
                />
                <LargeCards
                    header={c_and_g[1].title}
                    body={c_and_g[1].body}
                    orientation={c_and_g[1].orientation}
                />
            </section>

            <section id="solution">
                <CopyOnly
                    style="l"
                    header={solution.header}
                    body={solution.body}
                />
                <div className="solution_cards">
                    {solution.solution_cards.map((s, idx) => (
                        <CardWithIcon
                            key={idx}
                            icon={s.icon}
                            header={s.header}
                            body={s.body}
                            // ele_id={s.ele_id}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default SmartFusion;
