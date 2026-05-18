import { NAV_ITEMS } from "../../data/navItems";
import { LenisLink } from "../../util/LenisLink";
import "./Navigation.scss";

export default function Navigation({}) {
    return (
        <header className="">
            <div className="navigation">
                <LenisLink to={"/"} className="navigation-name">
                    <p className="">Alex</p>
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

                    {/* <div className=""> */}
                        {/* TODO: light/dark toggle */}

                        {/* TODO: Link to contact */}
                    {/* </div> */}
            </div>
        </header>
    );
}
