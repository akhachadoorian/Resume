import SmartFusion_CardImage from "../images/home/SmartFusion_CardImage.png"
import Oxford_CardImage from "../images/home/Oxford_CardImage.png"

export const basic_info = {
    title: 'Lead Website Developer',
    blurb: 'With a passion for making things pretty, I’m a Full Stack Developer dedicated to creating web experiences that are as beautiful as they are functional.',
    socials: [
         {
            icon: 'envelope',
            link: 'mailto:alexkhachadoorian@gmail.com'
        },
        {
            icon: 'github',
            link: 'https://github.com/akhachadoorian'
        },
        {
            icon: 'linkedIn',
            link: 'https://www.linkedin.com/in/alex-khachadoorian/'
        },
    ]
}

export const education = [
    {
        type: 'Bachelor of Science',
        major: 'Computer Science',
        university: '<p>University of Alabama</p>'
    },
    {
        type: 'Bachelor of Science',
        major: 'Marketing',
        university: '<p>University of Alabama</p>'
    },
]


export const experience = [
    {
        company: 'The Nine',
        title: 'Full Stack Lead Developer',
        time: 'May 2024 - Present',
        description: [
            {
                heading: "Leadership & Project Management",
                list: [
                    "<li>Led a team of two developers, ensuring timely, high-quality deliverables while mentoring a backend-focused teammate in frontend CMS workflows—accelerating development and increasing team velocity.</li>",
                    "<li>Led Agile/Kanban workflows in ClickUp to deliver 16+ custom websites, managing timelines, task prioritization, and cross-functional collaboration across multiple concurrent projects.</li>",
                    "<li>Assisted the sales team by contributing technical insights for client quotes and drafting project proposals.</li>",
                ]
            },
            {
                heading: "Technical Development & Engineering",
                list: [
                    "<li>Built and maintained responsive frontend components (flexbox layouts, adaptive grids, optimized media), creating a design system to ensure seamless, cross-device user experiences.</li>",
                    "<li>Developed and maintained key modules within the Caboose CMS, implementing dynamic content features that reduced manual content updates.</li>",
                    "<li>Leading development of a new React web application, defining component architecture, styling conventions, and CMS integration while ensuring future scalability.</li>",
                    "<li>Worked with Heroku pipelines to manage deployments from staging to production, verifying stability in staging before promoting builds.</li>",
                ]
            },
            {
                heading: "Process & Performance Improvements",
                list: [
                    "<li>Collaborating with the backend developer to improve server performance and reliability by adding database indexes, optimizing queries, and introducing unit testing.</li>",
                    "<li>Standardized CMS build processes by creating repeatable conventions for heading styles, classes, and layout structures—reducing build time, improving design consistency, and enhancing the client editing experience.</li>",
                    "<li>Improved documentation practices by writing post-launch build notes and maintaining ongoing documentation for new code additions, making future builds more efficient and onboarding smoother.</li>",
                    "<li>Partnered with UI/UX designers, marketers, and the Creative Director to align visual design with functionality, ensuring pixel-perfect implementation from Figma to deployment.</li>",
                ]
            }
        ]
    }
]


// export const experience = [
//     {
//         company: 'The Nine',
//         title: 'Full Stack Lead Developer',
//         time: 'May 2024 - Present',
//         description: [
//             {
//                 heading: "Leadership & Team Management",
//                 list: [
//                     "Co-led the web development department, overseeing team operations, setting technical direction, and aligning engineering execution with creative vision.",
//                     "Managed project scope and task delegation; led weekly planning sessions to coordinate concurrent website builds with the Creative Director.",
//                     "Led a team of developers to launch 16+ custom websites using agile methodologies—completing 100% of projects on time."
//                 ]
//             },
//             {
//                 heading: "Technical Contributions",
//                 list: [
//                     "Built reusable CMS blocks using responsive design principles—flexbox layouts, adaptive grids, and optimized media—for seamless cross-device experiences.",
//                     "Developed and maintained key modules within the Caboose CMS, adding dynamic content features that reduced manual updates.",
//                     "Improved internal CMS tooling (Caboose CMS) and introduced new development standards to speed up timelines and elevate quality."
//                 ]
//             },
//             {
//                 heading: "Cross-Functional Collaboration",
//                 list: [
//                     "Worked closely with the Creative Director to streamline workflows and ensure design consistency across projects.",
//                     "Assisted the sales team by providing technical insights during the quoting process and contributing to project proposals."
//                 ]
//             }
//         ]
//     }
// ]

export const skills = [
    {
        title: 'Languages',
        body: 'HTML, CSS, JavaScript, TypeScript, Python, Ruby, Java, SQL (PostgreSQL), NoSQL (MongoDB), Liquid'
    },
    {
        title: 'Frameworks & Libraries',
        body: 'React, Next.js, Node.js, Ruby on Rails',
    },
    {
        title: 'CMS & Platforms',
        body: 'Payload CMS, Caboose CMS, WordPress, Shopify',
    },
    {
        title: 'Tools & Technologies',
        body: 'Git, Docker, AWS, Axios, Visual Studio Code, Postico',
    },
]

export const case_studies = [
    {
        name: "Smart Fusion",
        tags: [
            "Website Development",
            "New CMS Features",
            "Full Stack Development",
            "Workflow Improvements",
        ],
        image: {
            image: SmartFusion_CardImage,
            alt_text: "Image of Smart Fusion's Home Page"
        },
        body: "Smart Fusion partnered with us to create a modern, scalable website for their government financial software brand. I built the site and tailored our CMS to their needs — adding features, refining workflows, and ensuring editors could manage content easily for the long term.",
        link: "/Resume/case-studies/smart-fusion",
        target: "_self",
    },
    {
        name: "City of Oxford",
        tags: [
            "Website Upgrade",
            "Workflow Improvements",
            "Improved User Experience"
        ],
        image: {
            image: Oxford_CardImage,
            alt_text: "Image of the City of Oxford's Home Page"
        },
        body: "Case Study Coming Soon, but for now, check out their site!",
        link: "https://www.oxfordal.gov/",
        target: "_blank",
    },
    // {
    //     name: "",
    //     tags: [
    //     ],
    //     image: {
    //         image: ,
    //         alt_text: ""
    //     },
    //     body: "",
    //     link: ""
    // },
]