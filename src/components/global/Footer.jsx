import ResumePDF from "../../data/AlexKhachadoorian_Resume.pdf";
import Terminal from "../Terminal";

export default function Footer({}) {
    var terminal_sections = [
        {
            command: "exit",
            output: "<p>session terminated successfully</p>",
        },
        {
            command: "curl -X GET contact/social",
            output: `
                <div class="contact_list">
                    <a href="https://github.com/akhachadoorian" target="_blank" class="contact_item">
                        <i class="ph ph-github-logo"></i>
                        <p>github.com/akhachadoorian</p>
                    </a>
                    <a href="https://linkedin.com/in/alex-khachadoorian" target="_blank" class="contact_item">
                        <i class="ph ph-linkedin-logo"></i>
                        <p>linkedin.com/in/alex-khachadoorian</p>
                    </a>
                    <a href="mailto:alexkhachadoorian@gmail.com" class="contact_item">
                        <i class="ph ph-paper-plane-tilt"></i>
                        <p>alexkhachadoorian@gmail.com</p>
                    </a>
                    <a href="${ResumePDF}" target="_blank" class="contact_item">
                        <i class="ph ph-read-cv-logo"></i>
                        <p>resume.pdf</p>
                    </a>
                </div>
            `,
        },
    ];

    return (
        <footer>
            <div className="reveal footer-inner max_width">
                <Terminal terminal_title={"contact.sh"} include_blink={true} terminal_sections={terminal_sections} />
                <div className="after-terminal">
                    <i className="ph ph-terminal"></i>
                    <p className="code">© 2025 Alex Khachadoorian</p>
                </div>
            </div>

            <div className="contact_list"></div>
        </footer>
    );
}
