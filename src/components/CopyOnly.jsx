import React from "react";

function CopyOnly({
    eyebrow,
    header,
    subtext,
    body,
    id,
    contain = true,
    style = "m",
    h_tag,
}) {
    let header_class = "";
    let header_text = null;

    const tag = h_tag || "h2";

    switch (style) {
        case "xl":
            header_class = "xl_header";
            break;
        case "l":
            header_class = "l_header";
            break;
        case "m":
            header_class = "m_header";
            break;
        case "s":
            header_class = "s_header";
            break;
        case "subtext":
            header_class = "subtext";
            break;
        default:
            header_class = "";
    }

    // Only render the tag if h_tag is not provided
    if (!h_tag) {
        header_text = React.createElement(
            tag,
            { className: header_class },
            header
        );
    }

    return (
        <div
            className={`copy_only ${contain ? "contain" : null}`}
            id={id ? `${id}` : null}
        >
            {style != "subtext" && eyebrow ? (
                <p className="eyebrow">{eyebrow}</p>
            ) : null}

            {header_text}

            <div className="div_line"></div>

            {subtext ? <h6 className="subtext">{subtext}</h6> : null}
            {body ? (
                <div
                    className="body"
                    dangerouslySetInnerHTML={{ __html: body }}
                />
            ) : null}
        </div>
    );
}

export default CopyOnly;
