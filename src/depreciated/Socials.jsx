import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Socials({socials}) {
    const iconMap = {
        envelope: faEnvelope,
        linkedIn: faLinkedin,
        github: faGithub,
    };

    return (
        <div className="socials">
            {socials.map((s, idx) => (
                <a href={s.link} key={idx} target="_blank" className="social">
                    <FontAwesomeIcon icon={iconMap[s.icon]} className="icon" />
                </a>
            ))}

        </div>
    )
}

export default Socials