import ExperienceContent from "../components/ExperienceContent";
import FolderWithTabs from "../components/FolderWithTabs";
import HeaderWithNumber from "../components/HeaderWithNumber";
import HeroTerminal from "../components/HeroTerminal";
import IconCardVertical from "../components/IconCardVertical";
import ProjectSwiper from "../components/Project Swiper";
import Stat from "../components/Stat";
import Tag from "../components/Tag";
import Terminal from "../components/Terminal";
import TerminalCard from "../components/TerminalCard";
import { case_studies, skills } from "../data/text/Home_data";

function Home_v3({}) {
    const experience_sections = [
        {
            command: "cat current_role.json",
            output: <ExperienceContent />,
        },
    ];

    const tabs = [
        {
            id: "about",
            label: (
                <>
                    <p className="code">/*</p>
                    <p className="code">About</p>
                    <p className="code">*/</p>
                </>
            ),
        },
        {
            id: "edu",
            label: (
                <>
                    <p className="code">/*</p>
                    <p className="code">Education</p>
                    <p className="code">*/</p>
                </>
            ),
        },
    ];

    const slides = [
        {
            id: "panel-about",
            label: "tab-about",
            type: "about",
            content: (
                <div className="slide-inner">
                    <p className="code">
                        I’m a full-stack developer who loves bringing websites to life with clean design and smooth
                        functionality. With a background in both computer science and marketing, I enjoy building
                        projects that are not only technically solid but also engaging and easy to use. From responsive
                        layouts to custom CMS features, I like solving problems that make websites faster, easier to
                        edit, and better for users.
                    </p>
                </div>
            ),
        },
        {
            id: "panel-edu",
            label: "tab-edu",
            type: "education",
            content: (
                <div className="slide-inner">
                    <div className="education">
                        <div className="degree">
                            <div className="upper">
                                <h5>Computer Science</h5>
                                <p className="eyebrow">Bachelor of Science</p>
                            </div>
                            <div className="university">
                                <p className="body_small">[</p>
                                <p className="body_small">University of Alabama</p>
                                <p className="body_small">]</p>
                            </div>
                        </div>

                        <div className="degree">
                            <div className="upper">
                                <h5>Marketing</h5>
                                <p className="eyebrow">Bachelor of Science</p>
                            </div>
                            <div className="university">
                                <p className="body_small">[</p>
                                <p className="body_small">University of Alabama</p>
                                <p className="body_small">]</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    var terminal_sections = [
        {
            command: "whoami",
            output: "<h1 style='word-break: break-word'>Alex Khachadoorian</h1>",
        },
        {
            command: "cat role.txt",
            output: "<p>Lead Full Stack Developer</p>",
        },
        {
            command: "ls skills/",
            output: "<p>Frontend / Backend / Databases / CMS</p>",
        },
    ];

    var hero_btn1 = {
        text: "View Projects",
        element_id: "featured_projects",
        icon: "ph ph-arrow-right",
        icon_position: "right"
    }

    var hero_btn2 = {
        text: "Get In Touch",
        link: "mailto:alexkhachadoorian@gmail.com",
        icon: "ph ph-envelope",
        icon_position: "right"
    }

    return (
        <div className="home">
            <section className="hero-section max_width">
                <HeroTerminal 
                    terminal_sections={terminal_sections}
                    button1={hero_btn1}
                    button2={hero_btn2}
                />
            </section>

            <section className=" about-section max_width" id="about">
                <div className="reveal about-inner">
                    <HeaderWithNumber number={"01"} header={"About"} />
                    <div className="about-body">
                        <FolderWithTabs tabs={tabs} slides={slides} />
                    </div>
                </div>
            </section>

            <section className="reveal skills-section" id="skills">
                <div className="skills-inner max_width">
                    <HeaderWithNumber number={"02"} header={"Skills"} />
                    <div className="skills-grid-vertical">
                        {skills.map((s, idx) => (
                            <IconCardVertical key={idx} icon={s.icon} title={s.title} body={s.body} style={s.style} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="reveal experience-section" id="current_role">
                <div className="experience-inner max_width">
                    <HeaderWithNumber number={"03"} header={"Current Role"} />
                    <div className="experience-body">
                        {/* <Terminal
                            terminal_sections={experience_sections}
                            git_message={"Currently delivering impactful solutions..."}
                        /> */}
                        <div className="text">
                            <Tag text={"Current Role"} theme={"white"} />
                            <h3>Lead Full-Stack Developer</h3>
                            <a href="https://www.nine.is/" target="_blank" className="eyebrow">
                                The Nine
                            </a>
                        </div>
                        <div className="div_line"></div>
                        <div className="stat-grid">
                            <Stat stat={"8"} body={"Website Launches as Lead Developer"} />
                            <Stat stat={"9.2%"} body={"Faster Average Development Time"} />
                            <Stat stat={"99.86%"} body={"Reduction in a Query's Execution Time"} />
                        </div>
                    </div>
                    <div className="experience-hl">
                        <div className="highlight_list">
                            <div className="highlight">
                                <div className="icon">
                                    <i className="ph ph-users"></i>
                                </div>

                                <div className="lower">
                                    <p className="title code">Team Leadership</p>
                                    <p className="body code_small">
                                        Leading a two-developer team, coaching a backend-focused teammate on
                                        frontend/CMS workflows to raise velocity.
                                    </p>
                                </div>
                            </div>

                            <div className="highlight">
                                <div className="icon">
                                    <i className="ph ph-check-circle"></i>
                                </div>

                                <div className="lower">
                                    <p className="title code">Project Management</p>
                                    <p className="body code_small">
                                        Running Agile/Kanban in ClickUp across concurrent projects—owning scope,
                                        timelines, and handoffs.
                                    </p>
                                </div>
                            </div>

                            <div className="highlight">
                                <div className="icon">
                                    <i className="ph ph-code"></i>
                                </div>

                                <div className="lower">
                                    <p className="title code">Architecture Design</p>
                                    <p className="body code_small">
                                        Architect a new React application: component architecture, styling conventions,
                                        CMS integration, and scalability.
                                    </p>
                                </div>
                            </div>

                            <div className="highlight">
                                <div className="icon">
                                    <i className="ph ph-trend-up"></i>
                                </div>

                                <div className="lower">
                                    <p className="title code">Release Management</p>
                                    <p className="body code_small">
                                        Manage releases with Heroku pipelines, verifying in staging before promoting to
                                        production.
                                    </p>
                                </div>
                            </div>

                            <div className="highlight">
                                <div className="icon">
                                    <i className="ph ph-users-four"></i>
                                </div>

                                <div className="lower">
                                    <p className="title code">Cross-functional Collaboration</p>
                                    <p className="body code_small">
                                        Partner with design, marketing, and creative to ship pixel-perfect builds;
                                        support sales with technical scoping and proposals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reveal project-section" id="projects">
                <div className="project-inner max_width" id="featured_projects">
                    <HeaderWithNumber number={"04"} header={"Projects"} />

                    {/* <div className="project-cards">
                        <ProjectSwiper projects={case_studies} />
                    </div> */}
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
