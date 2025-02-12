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

  
  xceltec,


  frontendmarketplace,
  devcode,
  eccom,

  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "NodeJs Developer",
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
    name: "Redux Toolkit",
    icon: redux,
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
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Angular Developer",
    company_name: "XcelTec",
    icon: xceltec,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using Angualr and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "NodeJs Developer",
    company_name: "XcelTec",
    icon: xceltec,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
     "Developing and maintaining server-side applications using Node.js and other related technologies.",
"Collaborating with cross-functional teams, including frontend developers, product managers, and designers, to build scalable and high-performance applications.",
"Implementing RESTful APIs, handling database interactions, and ensuring efficient backend performance.",
"Participating in code reviews and providing constructive feedback to improve backend code quality."
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Utsav Patel",
    designation: "",
    company: "",
    image: "/public/img/utsav.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Sandip Singh",
    designation: "Sales Executive",
    company: "",
    image: "/public/img/senty.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Nikita Thakkar",
    designation: "BDM",
    company: "of Sunflower broking pvt ltd",
    image: "/public/img/nikki.jpg",
  },
];

const projects = [
  {
    name: "FrontEnd market place",
    description:
      "The Frontend Market Place is a collaborative platform where frontend developers can share their code, images, and projects, enabling learning and networking. Project management, and seamless interaction",
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
    ],
    image: frontendmarketplace,
    source_code_link: "https://github.com/Rajprj/",
  },
  {
    name: "IT Agency",
    description:
      "Designed and developed a professional IT agency landing page with smooth animations using GSAP.js and Locomotive.js.Implemented engaging scroll effects and interactive elements to enhance user experience.",
    tags: [
      {
        name: "LocomotiveJs",
        color: "blue-text-gradient",
      },
      {
        name: "GsapJs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: devcode,
    source_code_link: "https://github.com/Rajprj/",
  },
  {
    name: "FashionFlick",
    description:
      "The website features interactive elements and dynamic content, ensuring a seamless and intuitive shopping experience. This project showcases my frontend development skills and my ability to create modern.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "Boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: eccom,
    source_code_link: "https://github.com/Rajprj/",
  },
];

export { services, technologies, experiences, testimonials, projects };
