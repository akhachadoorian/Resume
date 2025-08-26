import React from "react";
import CopyOnly from "../components/CopyOnly";

import { overview } from "../data/text/SmartFusion_data";
import CopyCard from "../components/CopyCard";

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
                <div className="left">
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

        </div>
    )
}

export default SmartFusion