import { NAV_ITEMS } from "../../data/navItems";
import { LenisLink } from "../../util/LenisLink";
import "./Navigation.scss";

export default function Navigation({}) {
    return (
        <header className="">
            <div className="navigation">
                <LenisLink to={"/"} className="navigation-name">
                    <p className="">Alex Khachadoorian</p>
                </LenisLink>
                <nav className="">
                    {NAV_ITEMS.map((item, idx) => (
                        <LenisLink
                            key={idx}
                            to={item.link}
                            className={`navigation-link`}
                        >
                            <p className="navigation-text body-s">./{item.text}</p>
                        </LenisLink>
                    ))}
                </nav>
                <div className="navigation-work">
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                    >
                        <circle
                            opacity="0.75"
                            cx="6"
                            cy="6"
                            r="6"
                            fill="var(--purple-500)"
                        />
                    </svg> */}

                    <div className="pulsating-circle"></div>

                    <p className="body-s">Open to Work</p>
                </div>
            </div>
        </header>
    );
}
