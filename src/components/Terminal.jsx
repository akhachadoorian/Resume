
function isHTML(str) {
  return /<\/?[a-z][\s\S]*>/i.test(str);
}


export default function Terminal({ terminal_title, terminal_sections, include_blink = false, git_message }) {
    return (
        <div className="terminal">
            <div className="terminal-header">
                <div className="terminal-btns">
                    <div className="terminal-btn red"></div>
                    <div className="terminal-btn yellow"></div>
                    <div className="terminal-btn green"></div>
                </div>
                <div className="terminal-title">{terminal_title ? terminal_title : "alex@resume:~"}</div>
            </div>
            <div className="terminal-body">
                {terminal_sections.map((ts, idx) => (
                    <div className="terminal-section" key={idx}>
                        <p className="terminal-command">
                            <span className="prompt">$</span>
                            <span className="command">{ts.command}</span>
                        </p>

                        {isHTML(ts.output) ? (
                            < div className="output" dangerouslySetInnerHTML={{ __html: ts.output }}>
                            </div >
                        ) :
                            <div className="output">{ts.output}</div>


                        }
                    </div>
                ))}

                {include_blink ? (
                    <div className="terminal-section">
                        <p className="terminal-command">
                            <span className="prompt">$</span>
                            <span className="cursor_blink"></span>
                        </p>
                    </div>
                ) : null}

                {git_message ? (
                    <div className="terminal-section git_message">
                        <p className="terminal-command code_small">
                            <span className="prompt">$</span>
                            <span className="">git status</span>
                        </p>
                        <p className="git_message-text code_small">● {git_message}</p>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
