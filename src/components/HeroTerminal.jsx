import Button from "./Button";
import Terminal from "./Terminal";

export default function HeroTerminal() {
    var terminal_sections = [
        {
            command: "whoami",
            output: "<h1 style='word-break: break-word'>Alex Khachadoorian</h1>",
        },
        {
            command: "cat role.txt",
            output: "<p>Lead Full Stack Developer</p>",
        },
        {
            command: "ls skills/",
            output: "<p>Frontend / Backend / Databases / CMS</p>",
        },
    ];

    return (
        <div className="hero_terminal">
            <Terminal include_blink={true} terminal_sections={terminal_sections} />
            <div className="btns">
                <Button
                    button_text={"View Projects"}
                    style={"accent"}
                    element_id={"featured_projects"}
                    icon={"ph ph-arrow-right"}
                    icon_position={"right"}
                />
                <Button
                    button_text={"Get In Touch"}
                    style={"accent-outline"}
                    link={"mailto:alexkhachadoorian@gmail.com"}
                    icon={"ph ph-envelope"}
                    icon_position={"right"}
                />
            </div>
        </div>
    );
}
