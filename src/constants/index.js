const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "My Releases", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Apr 21, 2025",
        title:
            "Magikaaaaarp - New Game Plus",
        image: "/images/ng_cover.jpg",
        link: "https://open.spotify.com/intl-it/album/6tmZs6mC32XYxX7roqBsFd?si=2adf5a5917a8432e&nd=1&dlsi=d17743ec4aac4840",
    },
    {
        id: 2,
        date: "Feb 27, 2024",
        title: "Magikaaaaarp - SUPERJAZZ",
        image: "/images/sj_cover.jpg",
        link: "https://www.youtube.com/playlist?list=OLAK5uy_mWUu2Obnsud2Vz5fiXSkQ0RUhRSrdgsWA",
    },
    {
        id: 3,
        date: "Jun 21, 2021",
        title: "Binary Core - Playlistening",
        image: "/images/playlistening.jpg",
        link: "https://www.youtube.com/watch?v=q47JBSkRAtE",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["HTML5", "CSS3", "Javascript", "TypeScript", "React.js", "Redux", "Axios", "Vitest"],
    },
    {
        category: "Mobile",
        items: ["React Native"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Bootstrap", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Java", "JPA", "Spring", "JWT", "JUnit"],
    },
    {
        category: "Database",
        items: ["PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/JavaScript-Mastery-Pro",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://jsmastery.com/",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/jsmasterypro",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/ames.jpg",
    },
    {
        id: 2,
        img: "/images/ames2.jpg",
    },
    {
        id: 3,
        img: "/images/ames3.jpg",
    },
    {
        id: 4,
        img: "/images/ames4.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Nike Ecommerce Website Application",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Nike Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
                        "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
                        "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
                        "It's built with React.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
                    ],
                },
                {
                    id: 2,
                    name: "nike.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://nike-website-sandy-ten.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "nike.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "Apple Iphone 15 Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Apple Iphone 15.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "This is a visually-driven, single-page site created to replicate the look and feel of Apple’s iPhone 15 Pro product page.",
                        "Built with React for component-based structure and interactivity.",
                        "Styled using Tailwind CSS, enabling rapid development with utility classes.",
                        "Animations and scroll-triggered effects powered by GSAP (GreenSock Animation Platform) for smooth, engaging transitions.",
                    ],
                },
                {
                    id: 2,
                    name: "apple-iphone15.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://apple-i-phone15-website.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "apple-iphone15.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Banda Corta Jukebox App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Banda Corta Jukebox.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Banda Corta jukebox is an app designed for private events that facilitates communication between musicians and guests",
                        "Guests enter via QR code and request songs from the musicians in real time.",
                        "The band manages everything from one dashboard: live requests, event phase changes, CRUD on events and songs.",
                        "Tech: React, Vite, Tailwind, WebSocket, Spring Boot, PostgreSQL, JWT",
                    ],
                },
                {
                    id: 2,
                    name: "banda-corta-jukebox.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://banda-corta-jukebox.vercel.app",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "banda-corta-jukebox.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/ames.jpg",
        },
        {
            id: 2,
            name: "profile-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/ames2.jpg",
        },
        {
            id: 3,
            name: "crazy-playing-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/ames3.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/ames.jpg",
            description: [
                "Hey! I’m Amedeo 👋, a full-stack developer with a solid artistic and technical background shaped by years of professional experience as a pianist, keyboardist, arranger, composer, and sound engineer.",
                "My front-end skills include JavaScript, Typescript and React, while my back-end skills are in Spring and PostgreSql",
                "My background in music and audio engineering has given me a strong foundation in team collaboration, problem-solving under pressure, technical precision, project organization, and a deep sense of creative thinking, all of which I now bring into my work as a developer.",
                "I'm currently looking for opportunities as a Full-Stack, Front-End, or Back-End Developer, where I can merge my technical skills, creativity, and multidisciplinary experience to build meaningful digital products.",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };