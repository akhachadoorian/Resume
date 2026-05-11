export default function Navigation_V2({}) {
    const scrollToBlockById = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
// onClick={() => scrollToBlockById('another-block')}
    return (
        <div className="navigation-wrapper">
            <div className="navigation-inner">
            <nav>
                <button onClick={() => scrollToBlockById('about')}>
                    <i class="ph ph-folder"></i>
                    <p className="code_small">./about</p>
                </button>
                <button onClick={() => scrollToBlockById('skills')}>
                    <i class="ph ph-folder"></i>
                    <p className="code_small">./skills</p>
                </button>
                <button onClick={() => scrollToBlockById('experience')}>
                    <i class="ph ph-folder"></i>
                    <p className="code_small">./experience</p>
                </button>
                <button onClick={() => scrollToBlockById('projects')}>
                    <i class="ph ph-folder"></i>
                    <p className="code_small">./projects</p>
                </button>
            </nav>
            </div>
        </div>
    );
}
