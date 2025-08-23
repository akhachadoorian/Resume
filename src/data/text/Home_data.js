import SmartFusion_CardImage from "../images/home/SmartFusion_CardImage.png"

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
                heading: "Leadership & Management",
                list: [
                    "<li>Directed the web development department alongside the Creative Director, setting technical direction and ensuring creative/engineering alignment.</li>",
                    "<li>Managed project scope and task delegation; led weekly planning sessions to coordinate concurrent builds.</li>",
                    "<li>Supervised developers to deliver 16+ custom websites with agile methodologies, achieving 100% on-time launches.</li>",
                ]
            },
            {
                heading: "Technical Contributions",
                list: [
                    "<li>Engineered reusable CMS blocks using responsive design (flexbox, adaptive grids, optimized media) for seamless cross-device performance.</li>",
                    "<li>Enhanced Caboose CMS tooling and introduced updated development standards to accelerate timelines and improve quality.</li>",
                    "<li>Developed and maintained core CMS modules, adding dynamic content features that reduced manual client updates.</li>",
                ]
            },
            {
                heading: "Collaboration",
                list: [
                    "<li>Partnered with designers and marketers to translate Figma designs into pixel-perfect deployments.</li>",
                    "<li>Supported the sales team by providing technical insights during client quoting and contributing to proposals.</li>"
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
        name: "Smart Fusion Website",
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
        body: "Case Study Coming Soon, but for now, check out their site!",
        link: "https://smartfusiongov.com/"
    }
]