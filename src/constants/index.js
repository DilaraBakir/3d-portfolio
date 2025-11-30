import { b, ins } from "framer-motion/client";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    technarts,
    blaq,
    pinq,
    scasocial,
    unity,
    unrealengine,
    python,
    csharp,
    kitchenchaos,
    checkpointrush,
    quickshotarena,
    coinquest,
    mutantsurvival,
    instagram,
    petpal,
    petbot,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Game Developer",
        icon: web,
    },
    {
        title: "Gameplay Programmer",
        icon: mobile,
    },
    {
        title: "Full-Stack Developer",
        icon: backend,
    },
    {
        title: "Front-End Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Unity",
        icon: unity,
    },
    {
        name: "Unreal Engine",
        icon: unrealengine,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
   
];

const experiences = [
    {
        title: "Software Engineer Intern (Remote)",
        company_name: "SCA Social",
        icon: scasocial,
        iconBg: "#E6DEDD",
        date: "August 2025 – September 2025",
        points: [
           "Completed a multidisciplinary training program covering Python, AutoCAD, Excel, and Photoshop.",
           "Developed a modular Python To-Do List application using text-based storage and file I/O operations.",
           "Designed a fully furnished room layout in AutoCAD with technical drawing standards and proper layer management.",
           "Created a Spider-Man movie poster using compositing, color correction, and typography techniques in Photoshop.",
           "Built an interactive Excel dashboard with pivot tables, slicers, and dynamic charts for data analysis.",

        ],
    },
    {
        title: "Web Developer Intern",
        company_name: "Blaq Consulting",
        icon: blaq,
        iconBg: "black",
        date: "January 2025 – April 2025",
        points: [
            "Developed and launched three responsive websites including the company’s main site, a game product page, and a portfolio site.",
            "Translated Figma-based UI/UX designs into functional and accessible React components.",
            "Collaborated with senior developers and maintained version control workflows using Fork (Git).",
            "Delivered visually consistent, maintainable, and production-ready front-end features.",

        ],
    },
    {
        title: "Game Developer Intern",
        company_name: "Pinq Games",
        icon: pinq,
        iconBg: "black",
        date: "June 2024 – January 2025",
        points: [
            "Co-developed a top-down zombie shooter game in Unity using C# and TopDown Engine.",
            "Implemented core gameplay systems including player movement, enemy AI, spawning logic, combat mechanics, UI elements, and SFX.",
            "Optimized gameplay performance to ensure a smooth player experience.",
            "Used Git for version control to maintain clean integration between gameplay systems.",

        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Technarts (Nart Informatics)",
        icon: technarts,
        iconBg: "#E6DEDD",
        date: "July 2023 – August 2023",
        points: [
            "Developed a social-media-style web application with posts, stories, comments, and profile editing features.",
            "Improved backend performance by optimizing database queries for faster load times.",
            "Enhanced UI responsiveness and overall user experience across the application.",
            "Used Git and Docker to ensure reliable version control and consistent development environments.",

        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I build things with intention. Whether it’s a full game experience or a clean, modern web application, my focus is always the same: make it feel good to interact with. I care about flow, responsiveness, player feedback, and small details that most people never notice — but always feel.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I learn by building. Over the last months, I’ve created entire games on my own, experimenting with mechanics, UI, level pacing, animation, polish, and game feel. I don’t wait for a perfect idea — I start small, iterate fast, and improve constantly.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "I believe in clarity. Readable code, modular structure, and smooth UX are at the center of everything I make. Clean doesn’t mean simple; clean means deliberate.",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
        testimonial:
            "I love both sides of development. Game development is where I express creativity — web development is where I express precision. Together, they shape the way I think and build.",
        name: "aa",
        designation: "aa",
        company: "bb",
        image: "ccc.png",
    },
];

const projects = [
    {
        name: "Kitchen Chaos",
        description:
            "A fast-paced cooking game where dynamically generated orders require players to gather ingredients, chop, cook, and assemble dishes before the timer runs out. Designed to challenge multitasking and time-management skills, the game delivers a fun and engaging kitchen simulation experience.",
        tags: [
            {
                name: "unity",
                color: "blue-text-gradient",
            },
            {
                name: "csharp",
                color: "green-text-gradient",
            },
            {
                name: "gameplayprogramming",
                color: "pink-text-gradient",
            },
        ],
        image: kitchenchaos,
        source_code_link: "https://github.com/DilaraBakir/KitchenChaos",
    },
    {
        name: "Checkpoint Rush",
        description:
            "A time-based racing game where players speed through a challenging course filled with strategically placed checkpoints. Each checkpoint adds 7 seconds to the initial countdown, encouraging fast yet precise driving. The goal is to reach the finish line before the timer hits zero, creating a thrilling blend of pressure, pace, and progression.",
        tags: [
            {
                name: "unrealengine",
                color: "blue-text-gradient",
            },
            {
                name: "blueprints",
                color: "green-text-gradient",
            },
            {
                name: "gameplayprogramming",
                color: "pink-text-gradient",
            },
        ],
        image: checkpointrush,
        source_code_link: "https://github.com/DilaraBakir/CheckpointRush",
    },
    {
        name: "QuickShot Arena",
        description:
            "An open-world forest shooting challenge where each round randomly activates a subset of target spawn points across the map. From 50 possible locations, 30 targets appear at the start of every game, creating a new layout each time. Players must explore, locate, and shoot every target before the countdown expires. Clear all targets to win — miss even one, and the run is lost. This design delivers replayability, precision shooting, and exploration-driven gameplay.",
        tags: [
            {
                name: "unrealengine",
                color: "blue-text-gradient",
            },
            {
                name: "blueprints",
                color: "green-text-gradient",
            },
            {
                name: "gameplayprogramming",
                color: "pink-text-gradient",
            },
        ],
        image: quickshotarena,
        source_code_link: "https://github.com/DilaraBakir/QuickshotArena",
    },
    {
        name: "Mutant Survival",
        description:
            "A hostile open-world forest survival game where cannibal and boar mutants spawn dynamically across the map and aggressively chase the player once detected. Armed with six unique weapons, the player must eliminate incoming enemies while managing health, avoiding damage, and staying alive as new waves continuously appear. A sprint mechanic adds an extra layer of strategy—once the stamina bar depletes, players must wait for it to recharge before sprinting again. The result is a tense, fast-paced survival experience that blends combat, resource management, and constant threat.",
        tags: [
            {
                name: "unity",
                color: "blue-text-gradient",
            },
            {
                name: "csharp",
                color: "green-text-gradient",
            },
            {
                name: "gameplayprogramming",
                color: "pink-text-gradient",
            },
        ],
        image: mutantsurvival,
        source_code_link: "https://github.com/DilaraBakir/MutantSurvival",
    },
    {
        name: "Coin Quest",
        description:
            "A city-themed collection challenge set along a long road bordered by towering buildings. Thirty-five coins are scattered across the path, each guarded by AI enemies armed and ready to attack. The player must navigate the environment, avoid incoming damage, and collect every coin before the timer expires—without any weapon to fight back. Success requires smart movement, timing, and awareness, making the game a tense race between survival and precision.",
        tags: [
            {
                name: "unrealengine",
                color: "blue-text-gradient",
            },
            {
                name: "blueprints",
                color: "green-text-gradient",
            },
            {
                name: "gameplayprogramming",
                color: "pink-text-gradient",
            },
        ],
        image: coinquest,
        source_code_link: "https://github.com/DilaraBakir/CoinQuest",
    },
    {
        name: "PetPal",
        description:
            "A user-friendly animal adoption platform featuring detailed pet profiles displayed through intuitive card-based layouts. Each listing includes essential information such as age, breed, and adoption status, helping users quickly find pets that match their preferences. When a user wants to adopt, they simply fill out and submit a structured adoption form. The platform streamlines the adoption process, making it easier for animals to find caring homes.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: petpal,
        source_code_link: "https://github.com/DilaraBakir/PetAdoption-PetPal",
    },
    {
        name: "PetBot",
        description:
            "An AI-powered virtual assistant built using the OpenAI API, designed to function like ChatGPT but fully specialized in pets and animal adoption. Users can ask questions about breeds, care routines, training tips, and adoption guidance, and PetBot provides intelligent, context-aware responses. The platform delivers a personalized and supportive experience for anyone seeking reliable information about pet ownership and adoption.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "openai",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: petbot,
        source_code_link: "https://github.com/DilaraBakir/PetBot",
    },
        {
        name: "Instagram Clone",
        description:
            "A full-feature Instagram-style web application that supports story and post creation, viewing detailed post pages, liking and unliking posts, writing, deleting, and replying to comments, and managing user profiles. Users can create and edit their profiles, discover suggested accounts in the sidebar, and follow or unfollow other users through a built-in social graph. The app delivers a smooth, modern experience with real-time updates that reflect likes, comments, and interactions instantly without requiring page refreshes.",
        tags: [
            {
                name: "django",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "fullstack",
                color: "pink-text-gradient",
            },
        ],
        image: instagram,
        source_code_link: "https://github.com/DilaraBakir/Instagram-clone",
    },
];

export { services, technologies, experiences, testimonials, projects };