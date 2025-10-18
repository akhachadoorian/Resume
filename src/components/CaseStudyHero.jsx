import Tag from "./Tag";

export default function CaseStudyHero({file_name, status, client, project_type, overview }) {
    return (
        <div className="case_study_hero-wrapper">
            <div className="case_study_hero-header">
                <div className="left">
                    <i className="ph ph-file-code"></i>
                    <p className="code">{file_name ? file_name : "case_study.md"}</p>
                </div>
                <div className="right">
                    <i className="ph ph-pulse"></i>
                    <p className="tag-text code_small">{status}</p>
                </div>
            </div>

            <div className="case_study_hero">
                <h1>{client}</h1>
                <p className="eyebrow">{project_type}</p>
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