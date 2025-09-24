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
            output: "Lead Full Stack Developer",
        },
        {
            command: "ls skills/",
            output: "Frontend / Backend / Databases / CMS",
        },
    ];

    return (
        <div className="hero_terminal">
            <Terminal include_blink={true} terminal_sections={terminal_sections} />
            <div className="btns">
                <Button
                    button_text={"View Projects"}
                />
            </div>
        </div>
    );
}
