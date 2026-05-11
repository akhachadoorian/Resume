export default function MetricCard({stat, stat_subtext, icon, body}) {
    return (
        <div className="metric_card">
            <div className="top">
                <div className="icon">
                    <i className={`ph ph-${icon}`}></i>
                </div>
                <div className="text">
                    <h6 className="stat subtext">{stat}</h6>
                    <p className="stat_subtext body_small">{stat_subtext}</p>
                </div>
            </div>
            <p className="code_small">
                {body}
            </p>
        </div>
    );
}
