import React from "react";

function LargeCards({header, body, orientation="top"}) {
    const isArray = Array.isArray(body);
    const listHtml = isArray ? body.join("") : null;

    return (
        <div className="large_cards">
            <h2 className="head"></h2>
        </div>
    )
}

export default LargeCards