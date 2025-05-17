import React from "react";

function Card({ header, subtext, body }) {
    return (
        <div className="card">
            { header ? <h4 className="card_header">{header}</h4> : ''}
            { subtext ? <h6 className="card_subtext">{subtext}</h6> : ''}
            { body ? <div className="body" dangerouslySetInnerHTML={{ __html: body }}/> : ''}
        </div>       
    )
}

export default Card