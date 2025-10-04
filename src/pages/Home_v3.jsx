import ExperienceContent from "../components/ExperienceContent";
import HeaderWithNumber from "../components/HeaderWithNumber";
import HeroTerminal from "../components/HeroTerminal";
import IconCardVertical from "../components/IconCardVertical";
import Terminal from "../components/Terminal";
import TerminalCard from "../components/TerminalCard";
import TextWithSmallTitle from "../components/TextWithSmallTitle";
import { case_studies, skills } from "../data/text/Home_data";

function Home_v3({}) {
    const experience_sections = [
        {
            command: "cat current_role.json",
            output: <ExperienceContent />,
        },
    ];

    const degree_sections = [
        {
            command: "cat degrees.json",
            output: `
                <div class="code">
                    <p>{</p>
                        <p style="padding-left: 16px"><span style="color: var(--accent);">type:</span> "Bachelor of Science",</p>
                        <p style="padding-left: 16px"><span style="color: var(--accent);">major:</span> "Computer Science",</p>
                        <p style="padding-left: 16px"><span style="color: var(--accent);">university:</span> "University of Alabama",</p>
                        <p style="padding-left: 16px"><span style="color: var(--accent);">gpa:</span> "3.9/4.0",</p>
                    <p>},</p>
                    <p>{</p>
                        <p style="padding-left: 16px"><span style="color: var(--accent);">type:</span> "Bachelor of Science",</p>
                        <p style="padding-left: 16px"><span style="color: var(--accent);">major:</span> "Marketing",</p>
                        <p style="padding-left: 16px"><span style="color: var(--accent);">university:</span> "University of Alabama",</p>
                        <p style="padding-left: 16px"><span style="color: var(--accent);">gpa:</span> "3.9/4.0",</p>
                    <p>}</p>
                </div>
            `,
        },
    ];

    return (
        <div className="home">
            <section className="max_width">
                <HeroTerminal />
            </section>

            <section className="about-section">
                <div className="about-inner max_width">
                    <HeaderWithNumber number={"01"} header={"About"} />
                    <div className="about-body">
                        <TextWithSmallTitle
                            title={"About me"}
                            body={
                                "I’m a full-stack developer who loves bringing websites to life with clean design and smooth functionality. With a background in both computer science and marketing, I enjoy building projects that are not only technically solid but also engaging and easy to use. From responsive layouts to custom CMS features, I like solving problems that make websites faster, easier to edit, and better for users."
                            }
                        />
                    </div>
                </div>
            </section>

            <section className="education-section">
                <div className="education-inner max_width">
                    <HeaderWithNumber number={"02"} header={"Education"} />
                    <Terminal terminal_sections={degree_sections} />
                </div>
            </section>

            <section className="skills-section">
                <div className="skills-inner max_width">
                    <HeaderWithNumber number={"03"} header={"Skills"} />
                    <div className="skills-grid-vertical">
                        {skills.map((s, idx) => (
                            <IconCardVertical key={idx} icon={s.icon} title={s.title} body={s.body} style={s.style} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="experience-section">
                <div className="experience-inner max_width">
                    <HeaderWithNumber number={"04"} header={"Current Role"} />
                    <div className="experience-body">
                        <Terminal
                            terminal_sections={experience_sections}
                            git_message={"Currently delivering impactful solutions..."}
                        />
                    </div>
                </div>
            </section>

            <section className="project-section">
                <div className="project-inner max_width" id="featured_projects">
                    <HeaderWithNumber number={"05"} header={"Featured Projects"} />

                    <div className="project-cards">
                        {case_studies.map((cs, idx) => (
                            <TerminalCard
                                key={idx}
                                image={cs.image}
                                terminal_title={cs.terminal_title}
                                project_name={cs.name}
                                project_description={cs.body}
                                project_website={cs.link.website}
                                // project_case_study={cs.link.slug}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home_v3;
