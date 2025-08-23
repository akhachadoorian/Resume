import React from "react";

function CopyCard({ eyebrow, header, body, style = "center" }) {
    const isArray = Array.isArray(body);
    const listHtml = isArray ? body.join("") : null;

    return (
        <div className={`copy_card ${style}`}>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h5 className="s_header">{header}</h5>
            {isArray ? (
                <ul className="body" dangerouslySetInnerHTML={{ __html: listHtml }} />
            ) : body ? (
                <div
                    className="body"
                    dangerouslySetInnerHTML={{ __html: body }}
                />
            ) : null}
        </div>
    );
}

export default CopyCard;
