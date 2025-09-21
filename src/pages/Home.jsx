// import AOS from 'aos';
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { case_studies, education, experience } from "../data/text/Home_data";

import Hero from "../components/Hero";
import IconCardVertical from "../components/IconCardVertical";

//#region Helper Functions

//#region SlideToggle Functions
/**
 * Expands an element by setting max-height and opacity.
 * Supposed to replicate the jQuery slideOut() function.
 *
 * @param {HTMLElement|null} el The DOM element to expand
 * @returns {void}
 *
 * @description
 *  This function first checks to make sure their was a valid DOM element passed to the function.
 *  Then it calculates and sets the element's maximum height based on the element's scroll height.
 *  Finally, the element's opacity is set to 1.
 */
function expand(el) {
    if (!el) return;

    el.style.maxHeight = el.scrollHeight + "px";
    el.style.opacity = 1;
}

/**
 * Collapses an element by setting max-height and opacity.
 * Supposed to replicate the jQuery slideOut() function.
 *
 * @param {HTMLElement|null} el The DOM element to collapse
 * @returns {void}
 *
 * @description
 *  This function first checks to make sure their was a valid DOM element passed to the function.
 *  Then, the element's max height and opacity are set to 0.
 */
function collapse(el) {
    if (!el) return;

    el.style.maxHeight = "0px";
    el.style.opacity = 0;
}

//#endregion

//#region Autoplay Progress Bar Functions
/**
 * Reset all the progress bars width, transition, and flushing any pending style changes.
 *
 * @param {{ current: (HTMLElement|null)[] }} progressRefs reference array to .progress_bar elements
 * @returns {void}
 *
 */
function resetAllBars(progressRefs) {
    progressRefs.current.forEach((el) => {
        if (!el) return;

        el.style.transition = "none"; // Remove any existing transition
        el.style.width = "0%"; // Reset width
        void el.offsetHeight; // Flush any pending style changes
        el.style.transition = `width 5000ms linear`; // Reapply transition
    });
}

/**
 * Reset progress bar and start animation/sync for active bar.
 *
 * @param {{ current: (HTMLElement|null)[] }} progressRefs reference array to .progress_bar elements
 * @param {number} idx index of active slide/tab
 * @returns {void}
 */
function syncProgress(progressRefs, idx) {
    // Reset
    resetAllBars(progressRefs);

    const el = progressRefs.current[idx];
    if (!el) return;

    el.style.width = "0%";
    requestAnimationFrame(() => {
        el.style.width = "100%";
    });
}

/**
 * Activate progress bar animation for the idx slide.
 *
 * @param {Swiper|null} swiper reference to swiper instance
 * @param {{ current: (HTMLElement|null)[] }} progressRefs reference array to .progress_bar elements
 * @param {number} idx index of active slide/tab
 * @returns {void}
 */
function activateProgress(swiperRef, progressRefs, idx) {
    const s = swiperRef.current;
    if (s) {
        s.slideTo(idx);
        syncProgress(progressRefs, idx);
    }
}

//#endregion
//#endregion

/**
 * Home Page Component
 * @component
 *
 * @description
 *  The `Home` component is the main landing page for the resume/portfolio.
 *  It displays sections for:
 *      - Name and social links
 *      - Education history
 *      - Work experience
 *      - Skills & qualifications
 *      - Case studies/projects (with a Swiper-powered slideshow and progress bar sync)
 *
 * This component integrates `Swiper.js` with autoplay and fade transitions,
 * and provides interactive tabs that expand/collapse descriptions and
 * synchronize with the active Swiper slide.
 *
 *
 * @returns {JSX.Element} Rendered Home Page Layout
 */
function Home({}) {
    // TODO: Remove this after adding functionality for more jobs
    var curr_job = experience[0];

    //#region useState and useRef Variables

    /**
     * Tracks the currently active index (tab/slide).
     * Used to sync between the left-hand project tabs and the Swiper instance.
     *
     * @type {[number, function]}
     */
    const [active, setActive] = useState(0); //

    /**
     * Reference to the Swiper instance
     *
     * @type {React.MutableRefObject<Swiper | null>}
     */
    const swiperRef = useRef(null);

    /**
     * Reference to all expandable body elements in the Project tabs.
     * Each entry corresponds to a tab’s `.body` div.
     *
     * @type {React.MutableRefObject<(HTMLElement | null)[]>}
     */
    const bodyRefs = useRef([]);

    /**
     * References to progress bar elements for each project tab.
     * Each entry corresponds to a `.progress_bar` div inside a tab.
     *
     * @type {React.MutableRefObject<(HTMLElement | null)[]>}
     */
    const progressRefs = useRef([]);

    //#endregion

    /**
     * Syncs the Swiper instance and expanded/collapsed tab bodies
     * whenever the `active` index changes.
     *
     * - Calls `s.slideTo(active)` to ensure Swiper matches the active index.
     * - Expands the `.body` for the active tab and collapses all others.
     *
     * @effect Runs whenever `active` changes.
     */
    useEffect(() => {
        const s = swiperRef.current;
        if (!s) return;

        s.slideTo(active);
        bodyRefs.current.forEach((el, i) => (i === active ? expand(el) : collapse(el)));
    }, [active]);

    const heroNameRef = useRef(null);
    useEffect(() => {
        const elements = [heroNameRef.current].filter(Boolean);
        if (!elements.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("in-view");
                    io.unobserve(entry.target); // <- reveal once
                });
            },
            { threshold: 0.6 }
        );

        elements.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    // useEffect(() => {
    // AOS.init({
    //   duration: 600,     // animation duration (ms)
    //   easing: 'ease-out',
    //   once: true,        // whether animation should happen only once
    //   mirror: false,     // animate out on scroll past
    //   offset: 80,        // trigger point from element (px)
    // });
    // }, []);

    return (
        <div className="home_page hero--bg-dots" id="home">
            {/* ─────────────────────────────────────────────────────────
                Hero / Name Section
                - Large name/title and social links
            ───────────────────────────────────────────────────────── */}
            <Hero />

            {/* ─────────────────────────────────────────────────────────
                Education Section
                - Renders a Card per item in `education`
            ───────────────────────────────────────────────────────── */}
            <section className="education-section ">
                <div className="education-wrapper">
                    <div className="education-inner">
                        <div className="e_card">
                            <h6 className="s_heading">{education[0].major}</h6>
                            <p className="subtitle">{education[0].type}</p>
                            <p>University of Alabama</p>
                        </div>

                        <div className="div_line"></div>

                        <div className="e_card">
                            <h6 className="s_heading">{education[1].major}</h6>
                            <p className="subtitle">{education[1].type}</p>
                            <p>University of Alabama</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─────────────────────────────────────────────────────────
                Skills Section
                - 2 x 2 Grid of skills
            ───────────────────────────────────────────────────────── */}
            {/* <section id="skills">
                <CopyOnly header={"Skills & Qualification"} style={"l"} />

                <div className="skill_box">
                    {skills.map((s, s_index) => (
                        <div className="box_unit" key={s_index}>
                            <h4 className="s_header">{s.title}</h4>
                            <p className="eyebrow">{s.body}</p>
                        </div>
                    ))}
                </div>
            </section> */}

            <section className="skills-section">
                <div className="skills-inner">
                    <div className="skills-header">
                        <div className="role_name">
                            <p className="eyebrow">What I Bring</p>
                            <h2 className="role-headline">
                                Strengths & Skills
                            </h2>
                        </div>
                    </div>
                    {/* <div class="skills-grid">
                        <IconCard 
                            icon={"paint-brush"}
                            title={"Frontend"}
                            body={"TypeScript, JavaScript, HTML, CSS, Liquid, React, Next.js"}
                        />
                        <IconCard 
                            icon={"code"}
                            title={"Backend"}
                            body={"Python, Java, Ruby, Node.js, Ruby on Rails"}
                        />
                        <IconCard 
                            icon={"database"}
                            title={"Databases"}
                            body={"PostgreSQL, MongoDB"}
                        />
                        <IconCard 
                            icon={"browsers"}
                            title={"CMS Platforms"}
                            body={"Payload CMS, Caboose CMS, WordPress"}
                        />
                        <IconCard 
                            icon={"toolbox"}
                            title={"Tools"}
                            body={"Git, Docker, RESTful APIs, Visual Code Studio, Axios, Postman, AWS, Microsoft Word, Microsoft Excel, Clickup, Notion"}
                        />
                        <IconCard 
                            icon={"code-block"}
                            title={"Other"}
                            body={"Agile Development, Responsive Design, Cross-Functional Collaboration, Kanban Project Planning"}
                        />
                    </div> */}
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
                        <IconCardVertical 
                            icon={"database"}
                            title={"Databases"}
                            body={"PostgreSQL, MongoDB"}
                        />
                        <IconCardVertical 
                            icon={"browsers"}
                            title={"CMS Platforms"}
                            body={"Payload CMS, Caboose CMS, WordPress"}
                            style={"pale-indigo"}
                        />
                        <IconCardVertical 
                            icon={"toolbox"}
                            title={"Tools & Technologies"}
                            body={"Git, Docker, RESTful APIs, Visual Code Studio, Axios, Postman, AWS, Microsoft Word, Microsoft Excel, Clickup, Notion"}
                            style={"light-indigo"}
                        />
                        <IconCardVertical 
                            icon={"code-block"}
                            title={"Other"}
                            body={"Agile Development, Responsive Design, Cross-Functional Collaboration, Kanban Project Planning"}
                            
                        />
                    </div>
                </div>
            </section>

            {/* ─────────────────────────────────────────────────────────
                Work Experience Section
                - Shows most recent job description in Card
            ───────────────────────────────────────────────────────── */}
            <section className="experience-section">
                <div className="experience-wrapper">
                    <div className="experience-header">
                        <div className="role_name">
                            <p className="eyebrow">Current Role</p>
                            <h2 className="role-headline">
                                Lead Website Developer <span class="at">@ </span>
                                <span class="accent">The Nine</span>
                            </h2>
                        </div>

                        <p class="meta">2022 — Present</p>
                    </div>
                    <div className="experience-stats">
                        <div className="stat_card">
                            <div className="stat_top">
                                <p className="stat m_header">7</p>
                                <p className="eyebrow">Website Launches as Lead Developer</p>
                            </div>
                            <p>
                                Since joining The Nine, I have been the lead developer on 7 launches website and
                                contributed to more than 17 website projects.
                            </p>
                        </div>
                        <div className="stat_card">
                            <div className="stat_top">
                                <p className="stat m_header">9.2%</p>
                                <p className="eyebrow">faster average development time</p>
                            </div>
                            <p>
                                After I standardized our CMS build process, the average development time dropped from
                                ~80h to ~72h (-7.3h/site).
                            </p>
                        </div>
                        <div className="stat_card">
                            <div className="stat_top">
                                {/* <p className="stat m_header">694×</p> */}
                                {/* <p className="eyebrow">faster database query</p> */}
                                <p className="stat m_header">99.86%</p>
                                <p className="eyebrow">reduction in query execution time</p>
                            </div>
                            <p className="stat_body">
                                I implemented a composite index across two key columns, reducing a hot query from 142.2
                                ms to 0.205 ms (~694×, −99.86%), verified with EXPLAIN ANALYZE.
                            </p>
                        </div>
                    </div>
                    <div className="highlight_stack">
                        <div className="highlight">
                            <p className="eyebrow">Highlights</p>

                            <ul class="ul highlights">
                                <li>
                                    Leading a two-developer team, coaching a backend-focused teammate on
                                    frontend/CMS workflows to raise velocity.
                                </li>
                                <li>
                                    Running Agile/Kanban in ClickUp across concurrent projects—owning scope, timelines, and
                                    handoffs.
                                </li>
                                <li>
                                    Architect a new React application: component architecture, styling conventions, CMS
                                    integration, and scalability.
                                </li>
                                <li>
                                    Manage releases with Heroku pipelines, verifying in staging before promoting to
                                    production.
                                </li>
                                <li>
                                    Partner with design, marketing, and creative to ship pixel-perfect builds; support
                                    sales with technical scoping and proposals.
                                </li>
                            </ul>
                        </div>
                        {/* <div className="stack">
                            <p className="eyebrow">Stack</p>
                            <div className="pills">
                                <p className="pill">Ruby on Rails</p>
                                <p className="pill">PostgreSQL</p>
                                <p className="pill">JavaScript</p>
                                <p className="pill">React</p>
                                <p className="pill">Typescript</p>
                                <p className="pill">Python</p>
                                <p className="pill">HTML</p>
                                <p className="pill">CSS</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* <section id="experience" >
                <CopyOnly
                    header={"Work Experience"}
                    style={"l"}
                    id={"work_experience"}
                    // contain={false}
                /> */}
            {/* TODO: Fix for more jobs */}
            {/* <div className="jobs">
                    <div className="job">
                        <CopyOnly
                            eyebrow={curr_job.time}
                            header={curr_job.title}
                            subtext={curr_job.company}
                            style="m"
                        />

                        <div className="job_cards">
                            {curr_job.description.map((j, j_index) => (
                                <CopyCard key={j_index} header={j.heading} body={j.list} style="left" />
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}

            

            {/* ─────────────────────────────────────────────────────────
                Case Studies Version 2
                - Left: interactive tabs
                - Right: Swiper slide show of project homepages
                - Progress bars synced to the active slide (autoplay 5s)
            ───────────────────────────────────────────────────────── */}
            <section id="case_studies_v2">
                <div className="left">
                    <h2 className="l_header">Projects</h2>
                    <div className="tabs">
                        {case_studies.map((cs, idx) => (
                            <a
                                key={idx}
                                className={`tab ${active === idx ? "active" : ""}`} // Add the active class if active index
                                onMouseEnter={() => {
                                    document.querySelector(".tabs")?.classList.add("autoplay_paused"); // Add `autoplay_paused` class to tabs (hides progress bar)
                                    swiperRef.current?.autoplay?.stop(); // Stop autoplay while mouse inside tab

                                    setActive(idx); // Set slide to corresponding index
                                    // activateProgress(swiperRef, progressRefs, idx);
                                }}
                                onMouseLeave={() => {
                                    document.querySelector(".tabs")?.classList.remove("autoplay_paused"); // Removed `autoplay_paused` class from tabs
                                    swiperRef.current?.autoplay?.start(); // Restart autoplay since mouse has left
                                }}
                                href={cs.link.slug && cs.link.slug != "" ? cs.link.slug : cs.link.website} // If slug, use that; otherwise, use website link
                                target={cs.link.slug && cs.link.slug != "" ? "_self" : "_blank"} // If slug, target is self; otherwise, target is blank
                            >
                                <p className="xs_header">
                                    {cs.name}
                                    <span className="arrow-wrapper">
                                        <span className="arrow"></span>
                                    </span>
                                </p>
                                <div className="body" ref={(el) => (bodyRefs.current[idx] = el)}>
                                    {" "}
                                    {/* Add element to bodyRefs */}
                                    {cs.body}
                                </div>

                                <div className="autoplay_line">
                                    <div className="progress_bar" ref={(el) => (progressRefs.current[idx] = el)}></div>{" "}
                                    {/* Add element to progressRefs */}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="right">
                    <Swiper
                        modules={[Navigation, Pagination, EffectFade, Autoplay]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        slidesPerView={1}
                        spaceBetween={0}
                        onSwiper={(s) => {
                            swiperRef.current = s;

                            // Setup bodies state
                            bodyRefs.current.forEach((el, i) => (i === s.activeIndex ? expand(el) : collapse(el))); // Collapse if not active; expand if active
                            setActive(s.activeIndex); // update state

                            syncProgress(progressRefs, s.activeIndex); // Sync the progress bars with swiper

                            // IntersectionObserver
                            const el = s.el; // Swiper slider's root DOM element
                            const io = new IntersectionObserver( // Monitor when the element leaves/enters viewport
                                ([entry]) => {
                                    // entry describes visibility
                                    if (!swiperRef.current?.autoplay) return;
                                    entry.isIntersecting
                                        ? swiperRef.current.autoplay.start()
                                        : swiperRef.current.autoplay.stop();
                                },
                                { threshold: 0.25 } // Must have 25% of slider visible
                            );

                            io.observe(el); // Start observing
                            s.on("destroy", () => io.disconnect()); // When Swiper is destroyed, disconnect observer
                        }}
                        onSlideChange={(s) => {
                            setActive(s.activeIndex); // update state
                            syncProgress(progressRefs, s.activeIndex); // Sync the progress bars with swiper
                        }}
                        autoplay={{
                            delay: 5000, // 5s per slide
                            disableOnInteraction: false,
                        }}
                    >
                        {case_studies.map((cs, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="img_holder">
                                    <img src={cs.image.image} alt={cs.image.alt || cs.name} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    );
}

export default Home;

//#region Depreciated Code

//////////////////////////
// Case Studies Version 1
//////////////////////////

/* 
<section id="case_studies_v1">
    <CopyOnly
        header={"Case Studies"}
        style={"l"}
    />
    
    <div className="study_cards">
        {case_studies.map((cs, idx) => (
            <CardWithImage 
                key={idx}
                header={cs.name}
                tags={cs.tags}
                image={cs.image}
                body={cs.body}
                link={cs.link}
                target={cs.target}
            />
        ))}
    </div>
</section> 
*/

//////////////////////////

//#endregion
