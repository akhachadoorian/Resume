
function IconCard({title, body, icon}) {


    return (
        <div className="icon_card">
            <div className="left">
                <i class={`ph ph-${icon}`}></i>

                <h4 className="subtext">{title}</h4>
            </div>
            <div className="right">
                <p>{body}</p>
            </div>
        </div>
    );
}

export default IconCard