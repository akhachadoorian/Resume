import AlabamaAg from "../images/home/AlabamaAgScreenshot.jpg";
import Jolly from "../images/home/JollyScreenshot.jpg";
import Oxford from "../images/home/Oxford.png";
import SmartFusion from "../images/home/SmartFusion.png";

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
        body: "TypeScript, JavaScript, HTML, CSS, Liquid, React, Next.js",
        style: "pale-indigo"
    },
    {
        icon: "code",
        title: "Backend",
        body: "Python, Java, Ruby, Node.js, Ruby on Rails",
        style: "light-indigo"
    },
    {
        icon: "database",
        title: "Databases",
        body: "PostgreSQL, MongoDB",
        style: ""
    },
    {
        icon: "browsers",
        title: "CMS Platforms",
        body: "Payload CMS, Caboose CMS, WordPress",
        style: "pale-indigo"
    },
    {
        icon: "toolbox",
        title: "Tools & Technologies",
        body: "Git, Docker, RESTful APIs, Visual Code Studio, Axios, Postman, AWS, Microsoft Word, Microsoft Excel, Clickup, Notion",
        style: "light-indigo"
    },
    {
        icon: "code-block",
        title: "Other",
        body: "Agile Development, Responsive Design, Cross-Functional Collaboration, Kanban Project Planning",
        style: ""
    },
];

export const case_studies = [
    // {
    // terminal_title: ".html",
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
    //     tags: [],
    // },
    
    {
        terminal_title: "smart_fusion.html",
        name: "Smart Fusion",
        body: "Built a scalable website for a government financial software provider with a focus on editor empowerment and long-term maintainability. Developed custom CMS modules (Icons, Icon Categories, Color Themes) to streamline updates, improve design consistency, and allow site-wide visual changes without developer involvement.",
        image: {
            image: SmartFusion,
            alt_text: "Image of Smart Fusion's Home Page",
        },
        link: {
            slug: "/Resume/case-studies/smart-fusion",
            website: "https://smartfusiongov.com/",
        },
        tags: ["Website Development", "New CMS Features", "Full Stack Development", "Workflow Improvements"],
    },
    {
        terminal_title: "alabama_ag.html",
        name: "Alabama Ag",
        body: "Developed custom CMS modules to power the “Find My Lender” tool, streamline scattered location data, and auto-generate lender pages. Assisted with domain/DNS updates and guided a phased launch when transitioning from their previous provider.",
        image: {
            image: AlabamaAg,
            alt: "Alabama ag's homepage hero",
        },
        link: {
            slug: "",
            website: "https://www.alabamaagcredit.com/",
        },
        tags: [],
    },
    {
        terminal_title: "city_of_oxford.html",
        name: "City of Oxford",
        body: "Ongoing project focused on modernizing the city’s website by introducing new, updated content blocks with cleaner code and improved design. Reformatting existing pages for better layouts and usability, ensuring the site evolves into a more consistent, accessible, and maintainable platform for the community.",
        image: {
            image: Oxford,
            alt_text: "Image of the City of Oxford's Home Page",
        },
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
        image: {
            image: Jolly,
            alt: "Jolly Heating & Air homepage hero",
        },
        link: {
            slug: "",
            website: "https://jollyheatingandair.com/",
        },
        tags: [],
    },
];
