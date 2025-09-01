import React, { useRef, useState, useEffect, useMemo } from "react";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import HeaderWithLine from "../components/HeaderWithLine";
import {
    basic_info,
    education,
    experience,
    skills,
    case_studies,
} from "../data/text/Home_data";
import Socials from "../components/Socials";
import Card from "../components/Card";
import CopyOnly from "../components/CopyOnly";
import CopyCard from "../components/CopyCard";
import CardWithImage from "../components/CardWithImage";

function Home({}) {
    var curr_job = experience[0];

    const [active, setActive] = useState(0);
    const swiperRef = useRef(null);
    const bodyRefs = useRef([]);
    const progressRefs = useRef([]);

    useEffect(() => {
        const s = swiperRef.current;
        if (!s) return;
        s.slideTo(active);
        bodyRefs.current.forEach((el, i) =>
            i === active ? expand(el) : collapse(el)
        );
    }, [active]);

    const resetAll = (durationMs) => {
        progressRefs.current.forEach((el) => {
            if (!el) return;
            el.style.setProperty("--progress-duration", `${durationMs}ms`);
            el.style.transition = "none";
            el.style.width = "0%";
            // force reflow so next change animates
            void el.offsetHeight;
            el.style.transition = `width ${durationMs}ms linear`;
        });
    };

    const start = (idx, durationMs) => {
        const el = progressRefs.current[idx];
        if (!el) return;
        // ensure it starts from 0 on this frame, then animate next frame
        el.style.width = "0%";
        requestAnimationFrame(() => {
            el.style.width = "100%";
        });
    };

    const activate = (idx) => {
        if (active === idx) return;
        setActive(idx);
        const s = swiperRef.current;
        if (s) {
            s.slideTo(idx);
            syncProgress(idx, s);
        }
    };

    const syncProgress = (idx, s) => {
        const delay = s?.params?.autoplay?.delay ?? 5000;
        resetAll(delay);
        start(idx, delay);
    };

    const expand = (el) => {
        if (!el) return;
        el.style.maxHeight = el.scrollHeight + "px";
        el.style.opacity = 1;
    };
    const collapse = (el) => {
        if (!el) return;
        el.style.maxHeight = "0px";
        el.style.opacity = 0;
    };

    const isTouch = useMemo(
        () =>
            typeof window !== "undefined" &&
            matchMedia("(pointer: coarse)").matches,
        []
    );

    return (
        <div className="home_page" id="home">
            <section id="name">
                <HeaderWithLine
                    header_line_1={"Alex"}
                    header_line_2={"Khachadoorian"}
                    subtext={basic_info.title}
                    body={basic_info.blurb}
                    h_level="h1"
                />
                <Socials socials={basic_info.socials} />
            </section>

            <section id="education">
                <CopyOnly header={"Education"} style={"l"} />
                <div className="cards">
                    {education.map((e, idx) => (
                        <Card
                            key={idx}
                            subtext={e.type}
                            header={e.major}
                            body={e.university}
                            theme="black"
                            scroll_speed="1"
                        />
                    ))}
                </div>
            </section>

            <section id="experience">
                <CopyOnly
                    header={"Work Experience"}
                    style={"l"}
                    id={"work_experience"}
                    // contain={false}
                />

                <div className="jobs">
                    <div className="job">
                        <CopyOnly
                            eyebrow={curr_job.time}
                            header={curr_job.title}
                            subtext={curr_job.company}
                            style="m"
                        />

                        <div className="job_cards">
                            {curr_job.description.map((ee, ee_index) => (
                                <CopyCard
                                    key={ee_index}
                                    header={ee.heading}
                                    body={ee.list}
                                    style="left"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills">
                <CopyOnly header={"Skills & Qualification"} style={"l"} />

                <div className="skill_box">
                    {skills.map((s, s_index) => (
                        <div className="box_unit" key={s_index}>
                            <h4 className="s_header">{s.title}</h4>
                            <p className="eyebrow">{s.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="case_studies_v2">
                <div className="left">
                    <h2 className="l_header">Projects</h2>
                    <div className="tabs">
                        {case_studies.map((cs, idx) => (
                            <a
                                key={idx}
                                className={`tab ${
                                    active === idx ? "active" : ""
                                }`}
                                onMouseEnter={() => {
                                    document.querySelector(".tabs")?.classList.add("autoplay_paused");
                                    swiperRef.current?.autoplay?.stop();
                                    activate(idx);
                                }}
                                onMouseLeave={() => {
                                    document.querySelector(".tabs")?.classList.remove("autoplay_paused");
                                    swiperRef.current?.autoplay?.start();
                                    
                                }
                                    
                                }
                                href={
                                    cs.link.slug && cs.link.slug != ""
                                        ? cs.link.slug
                                        : cs.link.website
                                }
                                target={
                                    cs.link.slug && cs.link.slug != ""
                                        ? "_self"
                                        : "_blank"
                                }
                            >
                                <p className="xs_header">
                                    {cs.name}
                                    <span className="arrow-wrapper">
                                        <span className="arrow"></span>
                                    </span>
                                </p>
                                <div
                                    className="body"
                                    ref={(el) => (bodyRefs.current[idx] = el)}
                                >
                                    {cs.body}
                                </div>

                                <div className="autoplay_line">
                                    <div
                                        className="inner_line"
                                        ref={(el) =>
                                            (progressRefs.current[idx] = el)
                                        }
                                    ></div>
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

                            // Setup bodies
                            bodyRefs.current.forEach((el, i) =>
                                i === s.activeIndex ? expand(el) : collapse(el)
                            );
                            setActive(s.activeIndex);

                            syncProgress(s.activeIndex, s);

                            // IntersectionObserver — set up ONCE
                            const el = s.el;
                            const io = new IntersectionObserver(
                                ([entry]) => {
                                    if (!swiperRef.current?.autoplay) return;
                                    entry.isIntersecting
                                        ? swiperRef.current.autoplay.start()
                                        : swiperRef.current.autoplay.stop();
                                },
                                { threshold: 0.25 }
                            );
                            io.observe(el);

                            // store for cleanup when unmounting
                            s.on("destroy", () => io.disconnect());
                        }}
                        onSlideChange={(s) => {
                            setActive(s.activeIndex);
                            syncProgress(s.activeIndex, s);
                        }}
                        autoplay={{
                            delay: 5000, // 5s per slide
                            disableOnInteraction: false,
                        }}
                    >
                        {case_studies.map((cs, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="img_holder">
                                    <img
                                        src={cs.image.image}
                                        alt={cs.image.alt || cs.name}
                                    />
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
