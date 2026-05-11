import CaseStudyHero from "../components/CaseStudyHero";
import { useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

function SmartFusion({}) {
    const swiperRef = useRef(null);
    const [active, setActive] = useState(0);
    const go = (i) => {
        setActive(i);
        swiperRef.current?.slideTo(i);
    };

    
    return (
        <div id="smart_fusion_cs" className="case_study_inner">
            <section className="hero-section max_width">
                {/* <Terminal 
                    terminal_sections={hero_sections}
                /> */}
                <CaseStudyHero 
                    file_name={"smart_fusion-case_study.md"}
                    status={"Live"}
                    client={"Smart Fusion"}
                    project_type={"Website Development"}
                />
            </section>

            {/* <section className="">
                <IconCardHorizontal 
                    title={"client"}
                    body={"Smart Fusion"}
                    icon={"building-office"}
                />

            </section> */}

        </div>
    );
}

export default SmartFusion;
