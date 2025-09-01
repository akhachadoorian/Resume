import React, { useState } from "react";

function DoubleImageCard({ style, header, body, image1, image2 }) {
    const isArray = Array.isArray(body);
    const listHtml = isArray ? body.join("") : null;

    const [activeImage, setActiveImage] = useState(null);

    return (
        <div className={`double_image_card ${style}`}>
            <div
                className="img_holder"
                onMouseEnter={() => setActiveImage(image1.src)}
                
            >
                <img src={image1.src} alt={image1.alt} />
            </div>
            <div className="img_holder">
                <img src={image2.src} alt={image2.alt} />
            </div>
            <div className="text">
                <h5 className="xs_header">{header}</h5>
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

            {/* Overlay modal */}
            {activeImage && (
                <div className="lightbox">
                    <img src={activeImage} alt="Enlarged view" />
                </div>
            )}
        </div>
    );
}

export default DoubleImageCard;
