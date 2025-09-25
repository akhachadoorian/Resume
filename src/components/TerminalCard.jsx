import Button from "./Button";

function isHTML(str) {
  return /<\/?[a-z][\s\S]*>/i.test(str);
}


export default function TerminalCard({ image, terminal_title, project_name, project_description, project_website, project_case_study }) {
    return (
        <div className="terminal_card">
            <div className="terminal_card-header">
            <div className="terminal-btns">
                    <div className="terminal-btn red"></div>
                    <div className="terminal-btn yellow"></div>
                    <div className="terminal-btn green"></div>
                </div>
                <div className="terminal-title">{terminal_title ? terminal_title : "featured_project.html"}</div>
            </div>
            <div className="terminal_card-body">
                <div className="img_holder">
                    <img src={image.image} alt={image.alt} />
                </div>
                <div className="text">
                    <div className="text-section">
                        <p className="comment">// Project Name</p>
                        <h4 className="subtext">{project_name}</h4>
                    </div>
                    { project_description ? 
                        <div className="text-section">
                            <p className="comment">// Description</p>
                            <p className="">{project_description}</p>
                        </div>
                        :
                        null
                    }
                    
                </div>
                <div className="btns">
                    {project_website ?
                        <Button 
                            button_text={"View Project"}
                            style={"accent-outline small"}
                            target="_blank"
                            icon={"ph ph-arrow-square-out"}
                    icon_position={"right"}

                        />
                        : null
                    }
                </div>
            </div>
        </div>
    );
}
