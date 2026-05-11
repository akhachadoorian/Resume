import React from "react";

function CodeBlock({code}) {
    return (
        <div className="code_block">
            <div className="code" dangerouslySetInnerHTML={{ __html: code }}>
            </div>
        </div>
    )
}

export default CodeBlock