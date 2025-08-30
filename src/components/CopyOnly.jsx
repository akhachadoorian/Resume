import React from "react";

function CopyOnly({ eyebrow, header, subtext, body, id, contain = true,style = "m", h_tag }) {
    var header_class = null;
    var header_text = null;
    
    if (h_tag == null)  {
        if (style == "xl") {
            header_class = "xl_header";
            header_text = <h2 className={header_class}>{header}</h2>
        } else if (style == "l") {
            header_class = "l_header";
            header_text = <h2 className={header_class}>{header}</h2>
        }
        else if (style == "m") {
            header_class = "m_header";
            header_text = <h2 className={header_class}>{header}</h2>
        }
        else if (style == "s") {
            header_class = "s_header";
            header_text = <h2 className={header_class}>{header}</h2>
        }
        else if (style == "subtext") {
            header_class = "subtext">{header};
            header_text = <h2 className={header_class}>{header}</h2>
        }
    }
    else {
        if (style == "xl") {
            header_class = "xl_header";
        } else if (style == "l") {
            header_class = "l_header";
        }
        else if (style == "m") {
            header_class = "m_header";
        }
        else if (style == "s") {
            header_class = "s_header";
        }
        else if (style == "subtext") {
            header_class = "subtext">{header};
        }
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
