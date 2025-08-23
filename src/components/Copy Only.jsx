import React from "react";

function CopyOnly({eyebrow, header, subtext, body, style}) {

    const header_text = "";

    // if (style == "xl") {
        
    // }
    // elsif (style == "l") {

    // }


    return (
        <div className="copy_only">
            { style != "subtext" ? 
                <p className="eyebrow">{eyebrow}</p>
                :
                null
            }


        </div>
    )
}

export default CopyOnly