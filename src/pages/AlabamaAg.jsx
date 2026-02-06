import React from "react";
import CaseStudyHero from "../components/CaseStudyHero";

function AlabamaAg({}) {
    return (
        <div className="">
            <section className="hero-section max_width">
                <CaseStudyHero
                    file_name={"smart_fusion-case_study.md"}
                    status={"Live"}
                    client={"Smart Fusion"}
                    project_type={"Website Development"}
                />
            </section>
        </div>
    );
}

export default AlabamaAg;
