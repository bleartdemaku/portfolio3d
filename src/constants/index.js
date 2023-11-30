import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  // {
  //   imageUrl: motion,
  //   name: "Motion",
  //   type: "Animation",
  // },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  // {
  //   imageUrl: nextjs,
  //   name: "Next.js",
  //   type: "Frontend",
  // },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  // {
  //   imageUrl: redux,
  //   name: "Redux",
  //   type: "State Management",
  // },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Course",
    company_name: "Roi Academy",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "August 2022 - November 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ContoFix",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "January 2023 - March 2023",
    points: [
      "Developing and maintaining web applications using Html and Css.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/bleartdemaku",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/bleart-demaku-b64427251/",
  },
];

export const projects = [
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Ball for All",
    description:
      "Built a complete application that is truly unique, allowing amateur footballers to share photos and videos of their skills connect with friends in a familiar social media environment while clubs are able to create vacancies an players can apply to  get to the club that they wanted.",
    link: "https://github.com/bleartdemaku",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "gpt3",
    description:
      "Developed a chatGPT with modern UI/UX landing page thai i translated from a figma design that is fully responsive and professional looking.",
    link: "https://github.com/bleartdemaku/gpt3",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Banking Website",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/bleartdemaku/bank/tree/main/bank",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Netflix Clone",
    description:
      "Built a complete clone of Netflix, allowing users to watch and search movies or series and be able to leave comments on them.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Roi Website",
    description:
      "Built a website using ReactJs and ReactBootstrap while utilizing react components, react hooks and other things that react offers.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "3d Portfolio",
    description:
      "If you want to build this portfolio yourself i have this repository as public. Feel free to explore my repository",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
