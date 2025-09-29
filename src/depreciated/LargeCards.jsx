import React from "react";

function LargeCards({header, body, orientation="top"}) {
    const isArray = Array.isArray(body);
    const listHtml = isArray ? body.join("") : null;

    return (
        <div className={`large_cards ${orientation}`}>
            <h2 className="head">{header}</h2>
            {isArray ? (
                <ul className="body" dangerouslySetInnerHTML={{ __html: listHtml }} />
            ) : body ? (
                <div
                    className="body"
                    dangerouslySetInnerHTML={{ __html: body }}
                />
            ) : null}
        </div>
    )
}

export default LargeCards