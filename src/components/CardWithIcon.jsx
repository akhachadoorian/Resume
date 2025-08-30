import React from "react";

function CardWithIcon({ icon, header, body, link, target = "_self", ele_id }) {
    const isArray = Array.isArray(body);
    const listHtml = isArray ? body.join("") : null;

    if (link) {
        return (
            <a href={link} target={target} className="card_w_icon">
                <img className="icon" src={icon.svg} alt={icon.alt} />
                <h3 className="s_header">{header}</h3>
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
            </a>
        );
    } else if (ele_id) {
        return (
            <button className="card_w_icon">
                <img className="icon" src={icon.svg} alt={icon.alt} />
                <h3 className="s_header">{header}</h3>
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
            </button>
        );
    }

    return (
        <div className="card_w_icon">
            <img className="icon" src={icon.svg} alt={icon.alt} />
            <h3 className="s_header">{header}</h3>
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
    );
}

export default CardWithIcon;
