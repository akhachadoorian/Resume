import HeaderWithNumber from "../components/HeaderWithNumber";
import HeroTerminal from "../components/HeroTerminal";
import IconCardVertical from "../components/IconCardVertical";
import TextWithSmallTitle from "../components/TextWithSmallTitle";

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
                    <div class="about-body">
                        <TextWithSmallTitle
                            title={"About me"}
                            body={
                                "I’m a full-stack developer who loves bringing websites to life with clean design and smooth functionality. With a background in both computer science and marketing, I enjoy building projects that are not only technically solid but also engaging and easy to use. From responsive layouts to custom CMS features, I like solving problems that make websites faster, easier to edit, and better for users."
                            }
                        />
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
                    <HeaderWithNumber number={"03"} header={"Experience"} />
                    <div className="experience_cards">
                        <div className="experience_card with_note">
                            <div className="experience_card-note">
                                <p className="code">/*</p>
                                <p className="code">Current Role</p>
                                <p className="code">*/</p>
                            </div>
                            <div className="experience_card-inner">
                                <div className="experience_card-header">
                                    <h4 className="xs_header">
                                        <span className="accent">Lead Full Stack Developer</span>
                                        <span>@</span>
                                        <span>The Nine</span>
                                    </h4>
                                    <p className="code">2022 — Present</p>
                                </div>
                                <div className="experience_card-body">
                                    <p>Led 7 launches and contributed to 17+ projects, standardizing CMS builds to cut development time by 9.2%. Optimized database performance with a composite index (142ms → 0.2ms, −99.86%). Managed a two-developer team, ran Agile/Kanban workflows, and partnered with design/marketing for pixel-perfect builds. Architected a new React web app, improved documentation, and supported sales with technical proposals.</p>
                                    <div className="tags">
                                        <p className="tag">Ruby on Rails</p>
                                        <p className="tag">Caboose CMS</p>
                                        <p className="tag">PostgreSQL</p>
                                        <p className="tag">Heroku</p>
                                        <p className="tag">React</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section">

            </section>
        </div>
    );
}

export default Home_v3;
