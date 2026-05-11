import React from "react";

function CardWithImage({ header, tags, body, image, media_side = "left", link, target = "_blank" }) {
    const isArray = Array.isArray(body);
    const listHtml = isArray ? body.join("") : null;

    return (
        <a target={target} href={link} className="card_w_image">
            <div className="img_holder" aria-label={image.alt_text} style={{backgroundImage: `url("${image.image}")`}}>
                {/* <img src={image.image} alt={image.alt_text} /> */}
            </div>

            <div className="text">
                <div className="upper_text">
                    <h4 className="m_header">
                        {header}

                        <span className="arrow-wrapper">
                            <span className="arrow"></span>
                        </span>
                    </h4>
                    <div className="tags">
                        {tags.map((t, idx) => (
                            <div className="tag" key={idx}>
                                <p>{t}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {isArray ? (
                    <ul
                        className="body"
                        dangerouslySetInnerHTML={{ __html: listHtml }}
                    />
                ) : body ? (
                    <div
                        className="body"
                        dangerouslySetInnerHTML={{ __html: body }}
                    />
                ) : null}
            </div>
        </a>
    );
}

export default CardWithImage;
