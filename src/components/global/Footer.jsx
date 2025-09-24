import ResumePDF from "../../data/AlexKhachadoorian_Resume.pdf";
import Terminal from "../Terminal";

export default function Footer({}) {
    var terminal_sections = [
        {
            command: "exit",
            output: "session terminated successfully",
        },
        {
            command: "curl -X GET contact/social",
            output: `
                <a href="https://github.com/akhachadoorian" target="_blank" class="contact_item">GitHub</a>
                <a href="https://linkedin.com/in/alex-khachadoorian" target="_blank" class="contact_item">LinkedIn</a>
                <a href="mailto:alexkhachadoorian@gmail.com" class="contact_item">Email</a>
                <a href="${ResumePDF}" target="_blank" class="contact_item">Resume</a>
            `,
        },
    ];

    return (
        <footer>
            <div className="footer-inner max_width">
                <Terminal terminal_title={"contact.sh"} include_blink={true} terminal_sections={terminal_sections} />
                <div className="after-terminal">
                    <i class="ph ph-terminal"></i>
                    <p className="code">© 2025 Alex Khachadoorian</p>
                </div>
            </div>

            <div className="contact_list"></div>
        </footer>
    );
}
