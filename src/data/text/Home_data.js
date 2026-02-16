import { images } from "../text/images";

export const basic_info = {
    title: "Lead Website Developer",
    blurb: "With a passion for making things pretty, I’m a Full Stack Developer dedicated to creating web experiences that are as beautiful as they are functional.",
    socials: [
        {
            icon: "envelope",
            link: "mailto:alexkhachadoorian@gmail.com",
        },
        {
            icon: "github",
            link: "https://github.com/akhachadoorian",
        },
        {
            icon: "linkedIn",
            link: "https://www.linkedin.com/in/alex-khachadoorian/",
        },
    ],
};

export const education = [
    {
        type: "Bachelor of Science",
        major: "Computer Science",
        university: "<p>University of Alabama</p>",
    },
    {
        type: "Bachelor of Science",
        major: "Marketing",
        university: "University of Alabama",
    },
];

export const experience = [
    {
        company: "The Nine",
        title: "Full Stack Lead Developer",
        time: "May 2024 - Present",
        description: [
            {
                heading: "Leadership & Project Management",
                list: [
                    "<li>Led a team of two developers, ensuring timely, high-quality deliverables while mentoring a backend-focused teammate in frontend CMS workflows—accelerating development and increasing team velocity.</li>",
                    "<li>Led Agile/Kanban workflows in ClickUp to deliver 16+ custom websites, managing timelines, task prioritization, and cross-functional collaboration across multiple concurrent projects.</li>",
                    "<li>Assisted the sales team by contributing technical insights for client quotes and drafting project proposals.</li>",
                ],
            },
            {
                heading: "Technical Development & Engineering",
                list: [
                    "<li>Built and maintained responsive frontend components (flexbox layouts, adaptive grids, optimized media), creating a design system to ensure seamless, cross-device user experiences.</li>",
                    "<li>Developed and maintained key modules within the Caboose CMS, implementing dynamic content features that reduced manual content updates.</li>",
                    "<li>Leading development of a new React web application, defining component architecture, styling conventions, and CMS integration while ensuring future scalability.</li>",
                    "<li>Worked with Heroku pipelines to manage deployments from staging to production, verifying stability in staging before promoting builds.</li>",
                ],
            },
            {
                heading: "Process & Performance Improvements",
                list: [
                    "<li>Collaborating with the backend developer to improve server performance and reliability by adding database indexes, optimizing queries, and introducing unit testing.</li>",
                    "<li>Standardized CMS build processes by creating repeatable conventions for heading styles, classes, and layout structures—reducing build time, improving design consistency, and enhancing the client editing experience.</li>",
                    "<li>Improved documentation practices by writing post-launch build notes and maintaining ongoing documentation for new code additions, making future builds more efficient and onboarding smoother.</li>",
                    "<li>Partnered with UI/UX designers, marketers, and the Creative Director to align visual design with functionality, ensuring pixel-perfect implementation from Figma to deployment.</li>",
                ],
            },
        ],
    },
];

export const skills = [
    {
        icon: "paint-brush",
        title: "Frontend",
        body: "TypeScript, JavaScript, HTML, CSS, Liquid, React, Next.js, Vite, TailwindCSS",
        style: "pale-indigo",
    },
    {
        icon: "code",
        title: "Backend",
        body: "Python, Java, Ruby, Node.js, Ruby on Rails, PHP",
        style: "light-indigo",
    },
    {
        icon: "database",
        title: "Databases",
        body: "PostgreSQL, MongoDB",
        style: "",
    },
    {
        icon: "browsers",
        title: "CMS Platforms",
        body: "Payload CMS, Caboose CMS, WordPress",
        style: "pale-indigo",
    },
    {
        icon: "toolbox",
        title: "Tools & Technologies",
        body: "Git, Docker, RESTful APIs, Visual Code Studio, Axios, Postman, AWS, Microsoft Word, Microsoft Excel, Clickup, Notion",
        style: "light-indigo",
    },
    {
        icon: "code-block",
        title: "Other",
        body: "Agile Development, Responsive Design, Cross-Functional Collaboration, Kanban Project Planning",
        style: "",
    },
];

export const case_studies = [
    // {
    //     terminal_title: ".html",
    //     name: "",
    //     body: "",
    //     image: {
    //         image: "",
    //         alt: "",
    //     },
    //     link: {
    //         slug: "",
    //         website: "",
    //     },
    // },
    {
        terminal_title: "black_warrior_pet_waste.html",
        name: "Black Warrior Pet Waste Solutions",
        body: "Built and launched the new Black Warrior Pet Waste Services website using Caboose CMS, taking the project from page buildout through interactive front-end polish. Implemented smooth scrolling and GSAP-powered animations to create a modern, fluid browsing experience, with attention to performance and responsive behavior across devices. Also set up an embedded form workflow so submissions are captured cleanly and reliably, ensuring an easy lead-intake process for the client.",
        image: images.BWPWS,
        link: {
            slug: "",
            website: "https://blackwarriorpws.com",
        },
    },
    {
        terminal_title: "portland_rescue_mission.html",
        name: "Portland Rescue Mission",
        body: "Built and launched the Portland Rescue Mission website in Caboose CMS, handling full site build-out and implementation with a focus on performance, usability, and scalable content management. Developed a smooth, modern front-end experience using smooth scrolling and GSAP animations, ensuring responsive behavior across devices. On the backend, created and extended custom Ruby on Rails modules to support site-specific features and data needs, enabling the team to manage content efficiently while keeping the platform maintainable and ready for future growth.",
        image: images.Portland,
        link: {
            slug: "",
            website: "https://portlandrescuemission.org/",
        },
    },
    {
        terminal_title: "shapiro_metals.html",
        name: "Shapiro Metals",
        body: "Developed and launched a Caboose CMS website (May 2025) and partnered with our lead gen team to drive results—41 leads generated and 6 closed since launch.",
        image: images.Shapiro,
        link: {
            slug: "",
            website: "https://shapirometals.com/",
        },
    },
    {
        terminal_title: "alabama_ag.html",
        name: "Alabama Ag",
        body: "Developed custom CMS modules to power the “Find My Lender” tool, streamline scattered location data, and auto-generate lender pages. Assisted with domain/DNS updates and guided a phased launch when transitioning from their previous provider.",
        image:  images.AlAg,
        link: {
            slug: "",
            website: "https://www.alabamaagcredit.com/",
        },
        tags: [],
    },
    {
        terminal_title: "smart_fusion.html",
        name: "Smart Fusion",
        body: "Built a scalable website for a government financial software provider with a focus on editor empowerment and long-term maintainability. Developed custom CMS modules (Icons, Icon Categories, Color Themes) to streamline updates, improve design consistency, and allow site-wide visual changes without developer involvement.",
        image:  images.SmartFusion,
        link: {
            slug: "/Resume/case-studies/smart-fusion",
            website: "https://smartfusiongov.com/",
        },
        tags: ["Website Development", "New CMS Features", "Full Stack Development", "Workflow Improvements"],
    },
    {
        terminal_title: "city_of_oxford.html",
        name: "City of Oxford",
        body: "Ongoing project focused on modernizing the city’s website by introducing new, updated content blocks with cleaner code and improved design. Reformatting existing pages for better layouts and usability, ensuring the site evolves into a more consistent, accessible, and maintainable platform for the community.",
        image: images.Oxford,
        link: {
            slug: "",
            website: "https://www.oxfordal.gov/",
        },
        tags: ["Website Upgrade", "Workflow Improvements", "Improved User Experience"],
    },
    {
        terminal_title: "jolly_heating_air.html",
        name: "Jolly Heating & Air",
        body: "Redesigned the website with a modern, responsive layout that improved mobile usability, streamlined content management, and aligned with updated brand guidelines.",
        image: images.Jolly,
        link: {
            slug: "",
            website: "https://jollyheatingandair.com/",
        },
        tags: [],
    },
    {
        terminal_title: "sunshine.html",
        name: "The Sunshine Center",
        body: "Built a dynamic website for The Sunshine Center in Caboose CMS with modular blocks, enabling flexible content management and improved mobile usability.",
        image: images.Sunshine,
        link: {
            slug: "",
            website: "https://sunshinecenterpdx.com/",
        },
    },
    {
        terminal_title: "al_marines.html",
        name: "Alabama Marines",
        body: "Developed a fast, secure landing page optimized for performance and search visibility. Integrated a user-friendly content management system (CMS) to allow the Foundation’s team to manage updates independently. Streamlined layout and messaging to drive engagement with key initiatives such as the Tuscaloosa Gauntlet and RV fundraising",
        image: images.Marines,
        link: {
            slug: "",
            website: "https://alamarinesfoundation.org/",
        },
    },
    {
        terminal_title: "acre_ccap.html",
        name: "ACRE CCAP",
        body: "Redesigned the homepage and overall site layout by thoughtfully blending legacy elements with updated, client-driven aesthetics to improve visual appeal and navigation across devices; built 49 content-rich subpages using custom HTML blocks in Caboose CMS to maintain brand consistency while scaling UX; designed and implemented student and ambassador tables in PostgreSQL with secure frontend forms for seamless data entry and system integration; and developed automated, stage-based email workflows tied to the ambassador approval process to streamline communication and reduce manual administrative follow-ups.",
        image: images.BREN,
        link: {
            slug: "",
            website: "https://acreccap.com",
        },
    },
    {
        terminal_title: "welcome_table.html",
        name: "The Welcome Table",
        body: "Developed The Welcome Table homepage to deliver a polished, donation-ready experience that has generated $18,900 to date (9% of the $200,000 goal) in the initial launch phase, and am currently building Phase 2 subpages to expand the site with cohesive design, consistent functionality, and a seamless user experience.",
        image: images.WelcomeTable,
        link: {
            slug: "",
            website: "https://www.thewelcometable.life/",
        },
    },
    {
        terminal_title: "ua_education.html",
        name: "University of Alabama College of Education",
        body: "Collaborated with the design team to migrate the UA College of Education website (education.ua.edu) to WordPress, helping define and implement a new style guide that ensured a cohesive look and feel while supporting flexible, maintainable page building. Applied WordPress design and development best practices to deliver responsive, user-friendly templates and front-end components aligned with the updated brand.",
        image: images.UA_Edu,
        link: {
            slug: "",
            website: "https://education.ua.edu/",
        },
    },
];
