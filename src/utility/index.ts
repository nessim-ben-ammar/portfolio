import { v4 as uuidv4 } from 'uuid';
// import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';

export const projects = [
  {
    id: uuidv4(),
    name: 'E-BOOK Library',
    image: mock10,
    description:
      'Developed E-BOOK Library with vast book collection, engaging animations, and smooth user experience using Open Library API, Swiper, and TailwindCSS.',
    url: 'https://zicoly-e-book-website.netlify.app',
    techStack: ['Open Library API', 'Swiper', 'TailwindCSS', 'HTML5', 'CSS3'],
    sourceUrl: 'https://github.com/zicoly/E-BOOK-Library',
  },
  {
    id: uuidv4(),
    name: 'Health Guardian',
    image: mock09,
    description:
      'Designed, developed, and implemented a robust hospital management software with scroll reveal animation for a hackathon project with [ The4Coders ], streamlining patient care and administrative tasks.',
    url: 'https://hg-gamma.vercel.app',
    techStack: ['Node.js', 'TailwindCSS', 'Next.js', 'TypeScript', 'OpenAI'],
  },
  {
    id: uuidv4(),
    name: 'Ecommerce Store',
    image: mock08,
    description:
      'Explore FauxStore: Your playground for simulated online shopping! Experiment with e-commerce features in this repository. Build, test, and have fun!',
    url: 'https://zicoly.github.io/Lobe-Website',
    techStack: ['React', 'Redux', 'CSS'],
  },
  {
    id: uuidv4(),
    name: 'TO-DO List Application',
    image: mock07,
    description:
      'Simple To-Do List Application using HTML, CSS, and JavaScript. Features: add todos, mark completion, filter tasks, and remove todos.',
    url: 'https://zicoly.github.io/To-do-List-Application/',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    sourceUrl: 'https://github.com/zicoly/To-do-List-Application',
  },
  // {
  //   id: uuidv4(),
  //   name: 'WeManage: Real Estate Asset Management',
  //   image: mock06,
  //   description:
  //     'This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.',
  //   url: 'http://www.wemanage.jp/',
  //   techStack: ['Ruby on Rails', 'JavaScript'],
  // },
  {
    id: uuidv4(),
    name: 'Chiquitas-IMS',
    image: mock05,
    description:
      "Collaborated with my team,[ The4Coders ], to develop an Inventory Management Software for a client's hair business.",
    url: 'https://www.byuh.edu/covid-19-case-management',
    techStack: ['React', 'Node.js', 'TailwindCSS', 'TypeScript', 'Vite'],
  },
  {
    id: uuidv4(),
    name: 'Podia',
    image: mock04,
    description:
      'Recreating the Podia website to enhance web development skills using HTML, CSS, and JavaScript, focusing on designing.',
    url: 'https://zicoly.github.io/Podia/',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    sourceUrl: 'https://github.com/zicoly/Podia',
  },
  {
    id: uuidv4(),
    name: 'Lobe Website',
    image: mock03,
    description:
      "Recreated the Lobe website using HTML, CSS, and JavaScript to practice web development skills. This project showcases layout, styling, and responsiveness.",
    url: 'https://zicoly.github.io/Lobe-Website',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    sourceUrl: 'https://github.com/zicoly/Lobe-Website',
  },
  {
    id: uuidv4(),
    name: 'A Simple Guessing Game',
    image: mock02,
    description:
      'Developed an engaging Guessing Game with limited attempts to find the correct number. Enjoy the challenge and test your skills!',
    url: 'https://zicoly.github.io/The-Guessing-Game/',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    sourceUrl: 'https://github.com/zicoly/The-Guessing-Game',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Submeowrine',
  //   image: mock01,
  //   description:
  //     'Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.',
  //   url: 'https://github.com/yujisatojr/submeowrine',
  //   techStack: ['Java', 'Android Studio'],
  // },
];
