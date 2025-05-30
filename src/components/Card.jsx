import React from "react";

function Card({
    header,
    subtext,
    body,
    theme = "black",
    scroll_speed = "3",
    sticky = false,
    scroll_target = null,
    scroll_offset
}) {
    return (
        <div
            className={`card ${theme}`}
            data-scroll
            data-scroll-speed={scroll_speed}
            {...(sticky ? { "data-scroll-sticky": "" } : {})}
            {...(scroll_target ? { "data-scroll-target": scroll_target } : {})}
            {...(scroll_offset ? { "data-scroll-offset": scroll_offset } : {})}
        >
            {header ? <h4 className="card_header">{header}</h4> : ""}
            {subtext ? <h6 className="card_subtext">{subtext}</h6> : ""}
            {body ? (
                <div
                    className="body"
                    dangerouslySetInnerHTML={{ __html: body }}
                />
            ) : (
                ""
            )}
        </div>
    );
}

export default Card;
