import React from "react";

function CopyOnly({ eyebrow, header, subtext, body, style = "m", id, contain = true }) {
    var header_text = null;

    if (style == "xl") {
        header_text = <h2 className="xl_header">{header}</h2>;
    } else if (style == "l") {
        header_text = <h3 className="l_header">{header}</h3>;
    }
    else if (style == "m") {
        header_text = <h3 className="m_header">{header}</h3>;
    }
    else if (style == "s") {
        header_text = <h4 className="s_header">{header}</h4>;
    }
    else if (style == "subtext") {
        header_text = <h5 className="subtext">{header}</h5>;
    }

    return (
        <div className={`copy_only ${contain ? "contain" : null}`} id={id ? `${id}` : null}>
            {style != "subtext" && eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}

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
