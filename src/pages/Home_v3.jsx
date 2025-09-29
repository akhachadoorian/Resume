import HeaderWithNumber from "../components/HeaderWithNumber";
import HeroTerminal from "../components/HeroTerminal";
import IconCardVertical from "../components/IconCardVertical";
import Tag from "../components/Tag";
import TerminalCard from "../components/TerminalCard";
import TextWithSmallTitle from "../components/TextWithSmallTitle";
import { case_studies } from "../data/text/Home_data";

function Home_v3({}) {
    return (
        <div class="home">
            <section className="max_width">
                <HeroTerminal />
            </section>

            <section className=""></section>

            <section className="about-section">
                <div className="about-inner max_width">
                    <HeaderWithNumber number={"01"} header={"About"} />
                    {/* <Marquee /> */}
                    <div class="about-body">
                        <TextWithSmallTitle
                            title={"About me"}
                            body={
                                "I’m a full-stack developer who loves bringing websites to life with clean design and smooth functionality. With a background in both computer science and marketing, I enjoy building projects that are not only technically solid but also engaging and easy to use. From responsive layouts to custom CMS features, I like solving problems that make websites faster, easier to edit, and better for users."
                            }
                        />
                        {/* <Marquee /> */}
                    </div>
                </div>
            </section>

            <section className="skills-section">
                <div className="skills-inner max_width">
                    <HeaderWithNumber number={"02"} header={"Skills"} />
                    <div class="skills-grid-vertical">
                        <IconCardVertical
                            icon={"paint-brush"}
                            title={"Frontend"}
                            body={"TypeScript, JavaScript, HTML, CSS, Liquid, React, Next.js"}
                            style={"pale-indigo"}
                        />
                        <IconCardVertical
                            icon={"code"}
                            title={"Backend"}
                            body={"Python, Java, Ruby, Node.js, Ruby on Rails"}
                            style={"light-indigo"}
                        />
                        <IconCardVertical icon={"database"} title={"Databases"} body={"PostgreSQL, MongoDB"} />
                        <IconCardVertical
                            icon={"browsers"}
                            title={"CMS Platforms"}
                            body={"Payload CMS, Caboose CMS, WordPress"}
                            style={"pale-indigo"}
                        />
                        <IconCardVertical
                            icon={"toolbox"}
                            title={"Tools & Technologies"}
                            body={
                                "Git, Docker, RESTful APIs, Visual Code Studio, Axios, Postman, AWS, Microsoft Word, Microsoft Excel, Clickup, Notion"
                            }
                            style={"light-indigo"}
                        />
                        <IconCardVertical
                            icon={"code-block"}
                            title={"Other"}
                            body={
                                "Agile Development, Responsive Design, Cross-Functional Collaboration, Kanban Project Planning"
                            }
                        />
                    </div>
                </div>
            </section>

            <section className="experience-section">
                <div className="experience-inner max_width">
                    <HeaderWithNumber number={"03"} header={"Current Role"} />
                    <div className="experience-body">
                        <div className="experience_dashboard-header">
                            <div className="left">
                                <Tag text={"Current Role"} />
                                <h3>Lead Full Stack Developer</h3>
                                <a href="https://www.nine.is/" target="_blank" className="">The Nine</a>
                            </div>
                            <div className="right">
                                <p>2022 — Present</p>
                                <div className="">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section">
                <div className="project-inner max_width" id="featured_projects">
                    <HeaderWithNumber number={"04"} header={"Featured Projects"} />

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
