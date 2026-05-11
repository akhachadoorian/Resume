import { useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

export default function FolderWithTabs({ tabs, slides }) {
    const swiperRef = useRef(null);
    const [active, setActive] = useState(0);
    const go = (i) => {
        setActive(i);
        swiperRef.current?.slideTo(i);
    };

    return (
        <div className="folder_w_tabs-wrapper">
            <div className="folder_w_tabs-inner">
                <div className="folder-tabs">
                    {tabs.map((t, i) => (
                        <button
                            key={t.id}
                            id={`tab-${t.id}`}
                            role="tab"
                            aria-selected={active === i}
                            aria-controls={`panel-${t.id}`}
                            className={`tab ${active === i ? "active" : ""}`}
                            onClick={() => go(i)}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
                <div className="folder-body">
                    <Swiper
                        modules={[A11y, Keyboard, EffectFade]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        onSwiper={(sw) => (swiperRef.current = sw)}
                        onSlideChange={(sw) => setActive(sw.activeIndex)}
                        keyboard={{ enabled: true }}
                        speed={350}
                        resistanceRatio={0.65}
                        allowTouchMove={true}
                        simulateTouch={true}
                    >
                        <Swiper>
                            {slides.map((slide, idx) => (
                                <SwiperSlide key={idx} role="tabpanel" id={slide.id} aria-labelledby={slide.label}>
                                    {slide.content}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
