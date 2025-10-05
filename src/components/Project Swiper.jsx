import { useRef, useState, useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation } from "swiper/modules";
import TerminalCard from "./TerminalCard";
import "swiper/css/navigation";

export default function ProjectSwiper({ projects }) {
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const swiperRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (swiperRef.current) {
                swiperRef.current.updateAutoHeight(300); // optional duration (ms)
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="project_swiper-wrapper">
            <div className="project_swiper">
                <Swiper
                    modules={[A11y, Keyboard, Navigation]}
                    keyboard={{ enabled: true }}
                    slidesPerView={1}
                    spaceBetween={32}
                    breakpoints={{
                        800: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                    allowTouchMove={true}
                    simulateTouch={true}
                    navigation={{
                        nextEl: ".next-btn",
                        prevEl: ".prev-btn",
                    }}
                    // loop={true}
                    autoHeight={true}
                    onReachBeginning={() => setAtStart(true)}
                    onReachEnd={() => setAtEnd(true)}
                    onSlideChange={(swiper) => {
                        setAtStart(swiper.isBeginning);
                        setAtEnd(swiper.isEnd);
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {projects.map((p, idx) => (
                        <SwiperSlide key={idx}>
                            <TerminalCard
                                image={p.image}
                                terminal_title={p.terminal_title}
                                project_name={p.name}
                                project_description={p.body}
                                project_website={p.link.website}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="project_swiper-navigation">
                <button
                    className={`btn accent prev-btn ${atStart ? "disabled" : ""}`}
                    onClick={() => console.log("Prev clicked")}
                >
                    <i className="ph-fill ph-cursor"></i>
                    <p className="btn-text">Prev</p>
                </button>{" "}
                <button
                    className={`btn accent next-btn ${atEnd ? "disabled" : ""}`}
                    onClick={() => console.log("Next clicked")}
                >
                    <p className="btn-text">Next</p>
                    <i className="ph-fill ph-cursor"></i>
                </button>
            </div>
        </div>
    );
}
