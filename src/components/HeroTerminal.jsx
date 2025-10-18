import Button from "./Button";
import Terminal from "./Terminal";

export default function HeroTerminal({terminal_sections, button1, button2}) {
    return (
        <div className="hero_terminal">
            <Terminal include_blink={true} terminal_sections={terminal_sections} />
            <div className="btns">
                <Button
                    button_text={button1.text}
                    style={"accent"}
                    element_id={button1.element_id ? button1.element_id : button1.link }
                    icon={button1.icon}
                    icon_position={button1.icon_position}
                />
                <Button
                    button_text={button2.text}
                    style={"accent-outline"}
                    link={button2.element_id ? button1.element_id : button1.link}
                    icon={button2.icon}
                    icon_position={button2.icon_position}
                />
            </div>
        </div>
    );
}
