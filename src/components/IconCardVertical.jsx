
function IconCardVertical({title, body, icon, style}) {
    return (
        <div className={`icon_card_vertical ${style}`}>
            <i class={`ph-fill ph-${icon}`}></i>

            <div className="text">
                <h4 className="subtext">{title}</h4>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default IconCardVertical