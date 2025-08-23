import React from "react";

function CardWithImage({ header, subtext, body, image, media_side = "left" }) {
    const isArray = Array.isArray(body);
    const listHtml = isArray ? body.join("") : null;

    return (
        <div className="card_w_image">


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

export default CardWithImage;
