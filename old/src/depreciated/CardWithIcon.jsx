import React from "react";

function CardWithIcon({ icon, header, body, link, target = "_self", ele_id }) {
    const isArray = Array.isArray(body);
    const listHtml = isArray ? body.join("") : null;

    if (link) {
        return (
            <a href={link} target={target} className="card_w_icon">
                <div className="upper">
                    <img className="icon" src={icon.svg} alt={icon.alt} />
                    <h3 className="s_header">
                        {header}

                        <span className="arrow-wrapper">
                            <span className="arrow"></span>
                        </span>
                    </h3>
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
            </a>
        );
    } else if (ele_id) {
        return (
            <a className="card_w_icon" 
                onClick={() => {
                const element = document.getElementById(ele_id);
                element?.scrollIntoView({
                    behavior: 'smooth'
                })}}
            >
                <div className="upper">
                    <img className="icon" src={icon.svg} alt={icon.alt} />
                    <h3 className="s_header">
                        {header}

                        <span className="arrow-wrapper">
                            <span className="arrow"></span>
                        </span>
                    </h3>
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
            </a>
        );
    }

    return (
        <div className="card_w_icon">
            <div className="upper">
                <img className="icon" src={icon.svg} alt={icon.alt} />
                <h3 className="s_header">{header}</h3>
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
    );
}

export default CardWithIcon;
