
import resumePDF from "../data/AlexKhachadoorian_Resume.pdf";

export default function HeroTerminal() {

    return (
        <div className="hero_terminal">
            <div className="terminal">
                <div className="terminal-header">
                    <div className="terminal-btns">
                        <div className="terminal-btn red"></div>
                        <div className="terminal-btn yellow"></div>
                        <div className="terminal-btn green"></div>
                    </div>
                    <div className="terminal-title">alex@resume:~</div>
                </div>
                <div className="terminal-body">
                    <div className="terminal-section">
                        <p className="terminal-command">
                            <span className="prompt">$</span>
                            <span className="command">whoami</span>
                        </p>
                        <h1 className="output">Alex Khachadoorian</h1>
                    </div>
                    <div className="terminal-section">
                        <p className="terminal-command">
                            <span className="prompt">$</span>
                            <span className="command">cat role.txt</span>
                        </p>
                        <h2 className="output xs_header">Lead Full Stack Developer</h2>
                    </div>
                    <div className="terminal-section">
                        <p className="terminal-command">
                            <span className="prompt">$</span>
                            <span className="command">ls -la contact/</span>
                        </p>
                        <div className="output contact_list">
                            <a href="mailto:alexkhachadoorian@gmail.com" className="contact_item ">
                                <i class="ph-fill ph-envelope"></i>
                                <p>alexkhachadoorian@gmail.com</p>
                            </a>
                            <a href="https://www.linkedin.com/in/alex-khachadoorian/" target="_blank" className="contact_item ">
                                <i class="ph-fill ph-linkedin-logo"></i>
                                <p>linkedin.com/in/alex-khachadoorian</p>
                            </a>
                            <a href="https://github.com/akhachadoorian" target="_blank" className="contact_item ">
                                <i class="ph-fill ph-github-logo"></i>
                                <p>github.com/akhachadoorian</p>
                            </a>
                            <a href={resumePDF} target="_blank" className="contact_item ">
                                <i class="ph-fill ph-read-cv-logo"></i>
                                <p>resume.pdf</p>
                            </a>
                        </div>
                    </div>
                    <div className="terminal-section">
                        <p className="terminal-command">
                            <span className="prompt">$</span>
                            <span className="cursor_blink"></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}