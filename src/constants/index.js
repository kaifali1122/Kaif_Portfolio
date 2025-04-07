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

  threejs,
  GuessTheNumber,
  Name3D,
  AmazonClone,
  WhatsappClone,  
  NetflixClone,
  HangmanGame,
  CurrencyConverter,
  Cadetship,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Editor",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Cadetship",
    icon: web,
    iconBg: "#E6DEDD",
    linkedin_link: "https://www.linkedin.com/posts/kaif-ali-web_webdevelopment-html-css-activity-7158167830855565312-q8dX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFt1_YB1cBnOaKS9zouruWj_ejA82O2g3g",
    points: [
      "Developed interactive web components including cards, flip cards, and user-friendly forms using HTML, CSS, and JavaScript",
      "Created and implemented a dynamic countdown timer feature for enhanced user engagement",
      "Collaborated with the Cadetship team to learn and apply front-end development best practices",
      "Gained practical experience in building responsive and interactive web interfaces",
      "Completed projects are documented and available on GitHub for reference",
    ],
  },
  {
    title: "Lead Developer - CureNest",
    company_name: "Full Stack Project",
    icon: web,
    iconBg: "#383E56",
    linkedin_link: "https://www.linkedin.com/posts/kaif-ali-web_reactjs-tailwindcss-mongodb-activity-7313987726578446337-1OTv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFt1_YB1cBnOaKS9zouruWj_ejA82O2g3g",
    points: [
      "Led the development of CureNest, a full-stack doctor appointment booking platform using React.js, Node.js, and MongoDB",
      "Implemented secure authentication using JWT and bcrypt.js for user, doctor, and admin portals",
      "Integrated Cloudinary for efficient image storage and CDN delivery of profile images",
      "Developed RESTful APIs with Express.js and managed state using React Context API",
      "Deployed frontend on Netlify and backend on Render/Vercel with MongoDB Atlas for scalability",
    ],
  },
  {
    title: "3D Web Developer",
    company_name: "Three.js Project",
    icon: creator,
    iconBg: "#E6DEDD",
    linkedin_link: "https://www.linkedin.com/posts/kaif-ali-web_threejs-webdevelopment-javascript-activity-7308646034648219648-m1ks?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFt1_YB1cBnOaKS9zouruWj_ejA82O2g3g",
    points: [
      "Developed an interactive 3D name transformation application using Three.js and JavaScript",
      "Implemented MongoDB integration for permanent storage of user-generated 3D models",
      "Created a dynamic leaderboard showcasing all transformed names in the database",
      "Built an intuitive user interface for seamless interaction with 3D graphics",
    ],
  },
  {
    title: "Game Developer",
    company_name: "Express.js Project",
    icon: creator,
    iconBg: "#383E56",
    linkedin_link: "https://www.linkedin.com/posts/kaif-ali-web_canabryouabrreachabrtheabrtop-numberguessinggame-activity-7308247475021062148-W0F8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFt1_YB1cBnOaKS9zouruWj_ejA82O2g3g",
    points: [
      "Developed a competitive number guessing game using Express.js and MongoDB",
      "Implemented EJS templating for dynamic HTML rendering and interactive UI",
      "Created a leaderboard system to track and display player rankings",
      "Built RESTful APIs for game logic and score management",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Personal Projects",
    icon: creator,
    iconBg: "#E6DEDD",
    linkedin_link: "https://www.linkedin.com/in/kaif-ali-web/",
    points: [
      "Built multiple web applications using React.js and modern JavaScript",
      "Implemented responsive designs and interactive user interfaces",
      "Utilized modern web technologies and best practices",
      "Created portfolio projects showcasing various web development skills",
    ],
  }
];

const projects = [
  {
    name: "CureNest",
    description:
      "A full-stack doctor appointment booking platform that simplifies healthcare with seamless experience for admins, doctors, and patients. Features include admin panel for management, doctor profiles with availability settings, and user appointment booking based on symptoms.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://www.linkedin.com/posts/kaif-ali-web_reactjs-tailwindcss-mongodb-activity-7313987726578446337-1OTv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFt1_YB1cBnOaKS9zouruWj_ejA82O2g3g",
    demo_link: "https://curenest.netlify.app/"
  },
  {
    name: "3D Name Model",
    description:
      "An interactive web application that transforms user-inputted names into stunning 3D models. Features include real-time 3D rendering, permanent storage in MongoDB database, and a leaderboard showcasing all transformed names. Built with Three.js for immersive 3D graphics.",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      }
    ],
    image: Name3D,
    source_code_link: "https://www.linkedin.com/posts/kaif-ali-web_threejs-webdevelopment-javascript-activity-7308646034648219648-m1ks?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFt1_YB1cBnOaKS9zouruWj_ejA82O2g3g",
    demo_link: "https://threed-model-imq5.onrender.com/"
  },
  {
    name: "Number Guessing Game",
    description:
      "An engaging number guessing game with competitive leaderboard features. Built with Express.js and MongoDB for backend, EJS for templating, and modern JavaScript for game logic. Features include player rankings, score tracking, and real-time feedback for an interactive gaming experience.",
    tags: [
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "ejs",
        color: "blue-text-gradient",
      }
    ],
    image: GuessTheNumber,
    source_code_link: "https://www.linkedin.com/posts/kaif-ali-web_canabryouabrreachabrtheabrtop-numberguessinggame-activity-7308247475021062148-W0F8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFt1_YB1cBnOaKS9zouruWj_ejA82O2g3g",
    demo_link: "https://guess-the-number-nzps.onrender.com/"
  },
  {
    name: "Currency Converter – Real-Time Exchange Rates",
    description:
      "Developed a responsive currency converter web app using React.js that fetches real-time exchange rates via an external API. Features include a clean UI, seamless currency selection, and instant conversion results—optimized for user convenience and accuracy.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: CurrencyConverter,
    source_code_link: "https://www.linkedin.com/posts/kaif-ali-web_react-javascript-webdevelopment-activity-7307875957879578626-6Z4i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFt1_YB1cBnOaKS9zouruWj_ejA82O2g3g",
    demo_link: "https://kaif-currency-converter.netlify.app/"
  },
  {
    name: "Hangman Game",
    description:
      "Developed a classic Hangman game using vanilla JavaScript with an interactive UI and engaging gameplay. Players guess hidden words within limited attempts, enhancing vocabulary and logic skills. Designed for smooth performance and fun user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: HangmanGame,
    source_code_link: "https://www.linkedin.com/posts/kaif-ali-web_javascript-webdevelopment-codingchallenge-activity-7307513568432726016-iriY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFt1_YB1cBnOaKS9zouruWj_ejA82O2g3g",
    demo_link: "https://kaifali1122.github.io/Hangman-Game/"
  },
  {
    name: "Cadetship Web Components",
    description:
      "A collection of interactive web components developed during my internship at Cadetship. Features include responsive cards, flip cards with animations, user-friendly forms, and a dynamic countdown timer. Built with pure HTML, CSS, and JavaScript focusing on modern web development practices.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      }
    ],
    image: Cadetship,
    source_code_link: "https://www.linkedin.com/posts/kaif-ali-web_webdevelopment-html-css-activity-7158167830855565312-q8dX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFt1_YB1cBnOaKS9zouruWj_ejA82O2g3g",
    demo_link: "https://github.com/kaifali1122/CadetshipInfotech-Task-1"
  },
  {
    name: "Netflix Clone",
    description:
      "A pixel-perfect recreation of Netflix's user interface using HTML and CSS. Features include dynamic product listings, intuitive navigation, and responsive design that captures the essence of Netflix's sleek and user-friendly shopping interface.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      }
    ],
    image: NetflixClone,
    source_code_link: "https://www.linkedin.com/posts/kaif-ali-web_frontenddevelopment-html-css-activity-7100788578342846464-4JCH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFt1_YB1cBnOaKS9zouruWj_ejA82O2g3g",
    demo_link: "https://kaifali1122.github.io/Netflix-clone/"
  },
  {
    name: "WhatsApp Clone",
    description:
      "An authentic WhatsApp frontend clone featuring chat bubbles, sender avatars, timestamps, and a typing indicator. Built with HTML and CSS, this project showcases responsive design principles and CSS animations for an engaging user experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      }
    ],
    image: WhatsappClone,
    source_code_link: "https://www.linkedin.com/posts/kaif-ali-web_frontendmagic-htmlcssartistry-clonewhatsappui-activity-7096357774254600192-jd8n?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFt1_YB1cBnOaKS9zouruWj_ejA82O2g3g",
    demo_link: "https://kaifali1122.github.io/WhatsApp-clone/"
  },
  {
    name: "Amazon Clone",
    description:
      "My first web development project - a recreation of Amazon's iconic shopping interface. Built with HTML and CSS, this project features an immersive shopping experience with dynamic product listings and intuitive navigation.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      }
    ],
    image: AmazonClone,
    source_code_link: "https://www.linkedin.com/posts/kaif-ali-web_codingjourney-amazonclone-htmlandcss-activity-7095362791351476225-mxHG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFt1_YB1cBnOaKS9zouruWj_ejA82O2g3g",
    demo_link: "https://kaifali1122.github.io/Amazon-clone/"
  }
];

export { services, technologies, experiences, projects };
