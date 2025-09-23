export default function TextWithSmallTitle({ title, body }) {
    return (
        <div className="text_w_small_title-wrapper">
            <div className="text_w_small_title-inner">
                <div className="small_title">
                    <p className="code">/*</p>
                    <p className="code">{title}</p>
                    <p className="code">*/</p>
                </div>
                <div className="text_w_small_title-body">
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
}
