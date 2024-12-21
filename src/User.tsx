import { title } from "process"

const Info={
    name: "Kritika Agrahari",
    stack:["Full Stack Web Developer","Programmer","Open Source Contributor"],
    bio:"Driven Computer Science student with a comprehensive background in web development, software engineering, and emerging technologies. Adept at leveraging diverse programming languages, including C++, Python, and JavaScript, with a specialization in algorithm design, data structure optimization, and cloud-based frameworks.Currently deepening expertise in artificial intelligence and machine learning, with a focus on predictive analytics,and real-world challenges.!"
}




const ProjectInfo = [
    {
        title: "Zerodha Clone",
        desc: "Built a trading platform clone featuring a user-friendly interface, utilizing a RESTful API in Express.js for data handling, React for a dynamic UI, and MongoDB for scalable data management, simulating over 1,000 transactions...",
        image: "Zerodha.png",
        live: false,
        technologies: ["React", "HTML", "JavaScript", "CSS"],
        link: "Coming soon",
        github: "Coming soon"
    },
    {
        title: "Bakery webpage",
        desc: "A delightful and visually appealing bakery webpage crafted with HTML, CSS, and JavaScript, featuring customer reviews, FAQs, enticing cake images, and county logos to enhance trust and authenticity...",
        image: "Bakery.png",
        live: false,
        technologies: [ "HTML", "JavaScript", "CSS"],
        link: "https://github.com/KritikaAgrahari/cake_ordering_site",
        github: "https://github.com/KritikaAgrahari/cake_ordering_site"
    },
    {
        title: "Random Color Generator",
        desc: "Created an interactive webpage using HTML, CSS, and JavaScript that generates a random RGB color upon button click, updating the background color and displaying the color value dynamically for a better user experience....",
        image: "randcolor.png",
        live: false,
        technologies: [ "HTML", "JavaScript", "CSS"],
        link: "https://github.com/KritikaAgrahari/calculator",
        github: "https://github.com/KritikaAgrahari/calculator"
    },
    // {for future projects use it 
       { title: "Weather App",
        desc: "Developed a dynamic and interactive weather app using React, HTML, CSS, and APIs that displays real-time temperature, wind speed, and humidity for various cities based on user search input...",
        image: "Weather.png",
        live: false,
        technologies: ["React", "HTML", "CSS"],
        link: "https://github.com/Code-Mars/Travel-Tracker",
        github: "https://github.com/Code-Mars/Travel-Tracker"
    },
    {
        title: "CLI Based SS",
        desc: "Created a basic CLI-based Security System in C++ featuring user registration, login, password recovery,and account management, with simple file handling for data storage and basic password strength validation...",
        image: "Security.png",
        live: false,
        technologies: ["C++"],
        link: "https://github.com/Code-Mars/Instagram-Clone",
        github: "https://github.com/Code-Mars/Instagram-Clone"
    },
    {
        title: "Random Image Generator",
        desc: "Developed a simple HTML page that generates random images using an API. The page fetches image data from the API and displays a new random image each time it's loaded, offering a fun and dynamic user experience...",
        image: "randimg.png",
        live: false,
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Code-Mars/CodeX",
        github: "https://github.com/Code-Mars/CodeX"
    }
]
// export { Info, ProjectInfo }



const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS", "MySQL", "MongoDB",  "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
    }
]
// export {SkillInfo}

const ExperienceInfo = [
    {
        // role: "Specialist Programmer",
        // company: "Infosys",
        company:"CodSoft",
        // date: "Oct 2023 - Present",
        date:2023,
        desc: "Developing a captivating landing page, creating a portfolio, and building a dynamic calculator using HTML, CSS, and JavaScript.",
        skills: ["HTML", "CSSS","JavaScript"]
    },
    // {
    //     role: "System Engineer",
    //     company: "Infosys",
    //     date: "Nov 2022 - Sep 2023",
    //     desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
    //     skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    // }
]
// export { ExperienceInfo }
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export { Info, ProjectInfo, SkillInfo, ExperienceInfo, Slugs };