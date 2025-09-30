import MetricCard from "./MetricCard";
import Tag from "./Tag";

export default function ExperienceContent({}) {
    return (
        <div className="experience_content">
            <div className="experience_content-header">
                <div className="left">
                    <Tag text={"Current Role"} theme={"white"}/>
                    <h3>Lead Full-Stack Developer</h3>
                    <a href="https://www.nine.is/" target="_blank" className="eyebrow">
                        The Nine
                    </a>
                </div>
                <div className="right">
                    <p className="eyebrow">2022 — Present</p>
                    <div className="metric">
                        <i class="ph ph-pulse"></i>
                        <p>Live Metrics</p>
                    </div>
                </div>
            </div>

            <p className="comment code">// Performance Metrics & Impact:</p>

            <div className="metric_card-grid">
                <MetricCard 
                    stat={"8"}
                    stat_subtext={"Website Launches as Lead Developer"}
                    icon={"rocket-launch"}
                    body={"Since joining The Nine, I have been the lead developer on 8 launches website and contributed to more than 17 website projects."}
                />
                <MetricCard 
                    stat={"9.2%"}
                    stat_subtext={"Faster Average Development Time"}
                    icon={"timer"}
                    body={"After I standardized our CMS build process, the average development time dropped from ~80h to ~72h (-7.3h/site)."}
                />
                <MetricCard 
                    stat={"99.86%"}
                    stat_subtext={"Reduction in a Query's Execution Time"}
                    icon={"database"}
                    body={"I implemented a composite index across two key columns, reducing a hot query from 142.2 ms to 0.205 ms (-99.86%), verified with EXPLAIN ANALYZE."}
                />
            </div>
            
            <p className="comment code">// Key Highlights & Responsibilities:</p>
            <div className="highlight_list">
                <div className="highlight">
                    <i class="ph ph-users"></i>
                    <p className="code">Leading a two-developer team, coaching a backend-focused teammate on frontend/CMS workflows to raise velocity.</p>
                </div>
                <div className="highlight">
                    <i class="ph ph-check-circle"></i>
                    <p className="code">Running Agile/Kanban in ClickUp across concurrent projects—owning scope, timelines, and handoffs.</p>
                </div>
                <div className="highlight">
                    <i class="ph ph-code"></i>
                    <p className="code">Architect a new React application: component architecture, styling conventions, CMS integration, and scalability.</p>
                </div>
                <div className="highlight">
                    <i class="ph ph-trend-up"></i>
                    <p className="code">Manage releases with Heroku pipelines, verifying in staging before promoting to production.</p>
                </div>
                <div className="highlight">
                    <i class="ph ph-users-four"></i>
                    <p className="code">Partner with design, marketing, and creative to ship pixel-perfect builds; support sales with technical scoping and proposals.</p>
                </div>
            </div>
        </div>
    );
}
