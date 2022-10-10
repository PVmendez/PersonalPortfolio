import { FiLinkedin, FiGithub, FiMail, FiMapPin } from "react-icons/fi";

import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiRedux,
  SiGit,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

import HackShop from "./assets/HackShop.png";
import nataliePortfolio from "./assets/NataliePortfolio.png";
import Twitter from "./assets/twitter.png";

export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

export const social = [
  {
    icon: <FiLinkedin className="h-6 w-6" />,
    href: "",
  },
  {
    icon: <FiGithub className="h-6 w-6" />,
    href: "",
  },
];

export const skills = [
  {
    icon: <SiHtml5 />,
  },
  {
    icon: <SiCss3 />,
  },
  {
    icon: <SiJavascript />,
  },
  {
    icon: <SiNodedotjs />,
  },
  {
    icon: <SiExpress />,
  },
  {
    icon: <SiReact />,
  },
  {
    icon: <SiRedux />,
  },
  {
    icon: <SiPostgresql />,
  },
  {
    icon: <SiGit />,
  },
  {
    icon: <SiMongodb />,
  },
  {
    icon: <SiBootstrap />,
  },
  {
    icon: <SiTailwindcss />,
  },
];

export const projectsData = [
  {
    id: "1",
    image: HackShop,
    name: "HackShop Chocolate",
    category: "Web Development",
    href: "https://hackshop-client.vercel.app/",
    repo: "https://github.com/PVmendez/E-Commerce_Client",
    description: "React JS, Redux, NodeJS, Express, HTML, CSS, Javascript, SQL, Github y Boostrap",
  },
  {
    id: "2",
    image: nataliePortfolio,
    name: "Fashion Portfolio",
    category: "UI/UX Design",
    href: "http://www.nataliecederbaum.tk/",
    repo: "https://github.com/PVmendez/Repo-Portfolio",
    description: "HTML, CSS y Javascript",
  },
  {
    id: "3",
    image: Twitter,
    name: "Twitter Clon",
    category: "Repositories",
    href: "",
    repo: "https://github.com/PVmendez/ejercicio_twitter",
    description: "HTML, CSS, Javascript, EJS, NodeJS, Express, MongoDB, Github y Boostrap",
  },
];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "Web Development",
  },
  {
    name: "Repositories",
  },
];

export const contact = [
  {
    icon: <FiMail />,
    title: "¿Tienes alguna duda?",
    subtitle: "Estoy aqui para resolverla",
    description: "valentino.mendez.rey@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Localización",
    subtitle: "Montevideo, Uruguay",
    description: "",
  },
];
