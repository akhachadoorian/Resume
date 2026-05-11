import Tag from "./Tag";

export default function CaseStudyHero({ status, client, project_type, overview }) {
    return (
        <div className="case_study_hero-wrapper">
            <div className="case_study_hero-header">
                
            </div>

            <div className="case_study_hero">
                <p className="eyebrow">{project_type}</p>
                <h1>{client}</h1>
                <div className="website_link">
                    <i className="ph ph-pulse"></i>
                    <p className="tag-text code_small">{status}</p>
                </div>
            </div>

            <div className="case_study_hero-lower">
                <div className="">
                    <button></button>

                </div>

                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    )
}