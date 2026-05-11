function Button({ style, button_text, link, element_id, target = "_self", icon, icon_position }) {
    if (element_id) {
        return (
            <a
                className={`btn ${style ? style : null}`}
                href={link}
                target={target}
                onClick={() => {
                    const element = document.getElementById(element_id);
                    element?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
            >
                {icon && icon_position == "left" ? <i className={icon}></i> : null}
                <p className="btn-text">{button_text}</p>
                {icon && icon_position == "right" ? <i className={icon}></i> : null}
            </a>
        );
    }
    
    return (
        <a className={`btn ${style ? style : null}`} href={link} target={target}>
            {icon && icon_position == "left" ? <i className={icon}></i> : null}
            <p className="btn-text">{button_text}</p>
            {icon && icon_position == "right" ? <i className={icon}></i> : null}
        </a>
    );
}

export default Button;
