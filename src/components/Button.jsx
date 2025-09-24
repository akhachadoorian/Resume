
function Button({ style, button_text, link, target="_self", icon, icon_position }) {
    return (
        <a className={`btn ${style ? style : null }`} href={link} target={target}>
            <p className="btn-text">{button_text}</p>
        </a>
    )
}

export default Button