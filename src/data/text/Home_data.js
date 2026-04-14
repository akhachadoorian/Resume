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
        companyWebsite: "https://www.nine.is/",
        title: "Lead, Full Stack Developer",
        time: "May 2024 - April 2026",
        details: [
            // {
            //     icon: "",
            //     title: "",
            //     bullet: ""
            // },
            {
                icon: "users",
                title: "Team Leadership",
                bullet: "Managed a two-developer team, introduced standardized CMS conventions, and cut average site development time by 9.2% (~80h → ~72h per site)."
            },
            {
                icon: "kanban",
                title: "Project Management",
                bullet: "Led Agile/Kanban workflows in ClickUp to deliver 20+ custom websites across concurrent client projects, coordinating development from kickoff to launch."
            },
            {
                icon: "squares-four",
                title: "Architecture & Design System",
                bullet: "Established component architecture, design system conventions, and CMS integration strategy for a new React application, then built the reusable content block library and responsive component system that standardized frontend patterns and reduced per-site QA cycles."
            },
            {
                icon: "gauge",
                title: "Performance Optimization",
                bullet: "Reduced a hot query's execution time by 99.86% (142.2ms → 0.205ms) via composite indexes and query optimization."
            },
            {
                icon: "magnifying-glass",
                title: "SEO & Migrations",
                bullet: "Implemented on-page SEO best practices and managed redirect configurations across client launches, supporting smooth domain migrations and preserving search rankings."
            },
            {
                icon: "shuffle",
                title: "Cross-functional Collaboration",
                bullet: "Collaborated with clients and stakeholders on UX decisions during scoping and delivery, translating design intent into functional, accessible frontend implementations."
            },
            {
                icon: "rocket-launch",
                title: "Release Management",
                bullet: "Managed Heroku deployments from staging to production and maintained DNS configurations with client IT teams."
            },
        ],
    },
];

export const skills = [
    {
        icon: "paint-brush",
        title: "Frontend",
        body: "TypeScript, JavaScript, HTML, CSS/SCSS, Liquid, React, Next.js, Vite, TailwindCSS, GSAP, Liquid",
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
        body: "Payload CMS, Caboose CMS, WordPress, Shopify, Webflow",
        style: "pale-indigo",
    },
    {
        icon: "toolbox",
        title: "Tools & Technologies",
        body: "Git, Docker, RESTful APIs, Visual Code Studio, Axios, Postman, AWS, Fastly CDN, Vercel, Microsoft Word, Microsoft Excel, Clickup, Notion",
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
    //     image: images. ,
    //     link: {
    //         slug: "",
    //         website: "",
    //     },
    // },
    {
        terminal_title: "homestead_barndominiums.html",
        name: "Homestead Barndominiums",
        body: "Sole developer on the Homestead Barndominiums website — Alabama's original barndominium builder — taking the project from design handoff to client-approved delivery in under a month. Built in Caboose CMS, the site features dedicated service pages for five build categories, a structured project gallery, and an integrated Cognito Forms consultation workflow to streamline lead capture and connect prospective clients with the Homestead team.",
        image: images.Barndo ,
        link: {
            slug: "",
            website: "https://www.homesteadbarndominiums.com/",
        },
    },
    {
        terminal_title: "arsea_apeal.html",
        name: "Alabama Retired State Employees' Association ",
        body: "Primary developer on the ARSEA/APEAL website — Alabama's leading advocacy organization for retired and active public employees, serving a 17,000+ member community. Built in Caboose CMS with a password-protected member portal giving verified members exclusive access to resources, publications, and benefits. Stripe is integrated directly into the membership signup flow for seamless registration and dues payment in a single experience. Managed the migration from the previous site, configuring 100+ permanent redirects to preserve SEO equity. Achieved Lighthouse scores of 94 Accessibility, 92 Best Practices, and 79 Performance — with the accessibility score reflecting particular attention to usability across a broad and diverse membership base.",
        image: images.ARSEA,
        link: {
            slug: "",
            website: "https://www.arsea.org/",
        },
    },
    {
        terminal_title: "jandp_construction.html",
        name: "J & P Construction",
        body: "Sole developer on the J&P Construction website — a Tuscaloosa-based water and wastewater contractor with over 60 years of infrastructure experience across the Southeast. Took the project from design handoff to launch in under a month, coordinating directly with their third-party server and DNS team to ensure a smooth deployment. Built in Caboose CMS with dedicated service pages for each core specialty and a structured project gallery organized by category. Configured redirect rules during the launch.",
        image: images.JP,
        link: {
            slug: "",
            website: "https://www.jandpconstruction.com/",
        },
    },
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
        body: "Collaborated with the design team and a fellow developer to build modular, reusable site blocks in Caboose CMS, ensuring consistency and flexibility across page builds. Partnered with the lead gen team post-launch to drive results — 41 leads generated and 6 closed since May 2025.",
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
