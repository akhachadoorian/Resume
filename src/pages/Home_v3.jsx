import ExperienceContent from "../components/ExperienceContent";
import FolderWithTabs from "../components/FolderWithTabs";
import HeaderWithNumber from "../components/HeaderWithNumber";
import HeroTerminal from "../components/HeroTerminal";
import IconCardVertical from "../components/IconCardVertical";
import ProjectSwiper from "../components/Project Swiper";
import Terminal from "../components/Terminal";
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

    return (
        <div className="home">
            <section className="hero-section max_width">
                <HeroTerminal />
            </section>

            <section className="reveal about-section" id="about">
                <div className="about-inner max_width">
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
                        <Terminal
                            terminal_sections={experience_sections}
                            git_message={"Currently delivering impactful solutions..."}
                        />
                    </div>
                </div>
            </section>

            <section className="reveal project-section" id="projects">
                <div className="project-inner max_width" id="featured_projects">
                    <HeaderWithNumber number={"04"} header={"Projects"} />

                    <div className="project-cards">
                        <ProjectSwiper projects={case_studies} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home_v3;
