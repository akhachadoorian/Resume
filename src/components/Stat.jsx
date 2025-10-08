export default function Stat({ stat, body }) {
    return (
        <div className="stat">
            <h6 className="s_header header">{stat}</h6>
            <p className="code">
                {body}
            </p>
        </div>
    );
}
