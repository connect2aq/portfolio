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
  bonzerpoint,
  bonzerflix,
  bonzerstore,
  mobily,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Development',
    icon: web,
  },
  {
    title: 'Product Management',
    icon: mobile,
  },
  {
    title: 'Project Management',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Web Developement',
    company_name: 'Bonzer Point',
    icon: bonzerpoint,
    iconBg: '#6936F5',
    date: 'Jan 2021 - Today',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Digital Transformation Manager ',
    company_name: 'Mobily',
    icon: mobily,
    iconBg: '#E6DEDD',
    date: 'Jan 2018 - Dec 2020',
    points: [
      'Engaged in all areas of product lifecycle (research to development to launch to market penetration).',
      'Implemented Agile, Lean and DevOps methodologies for transformation.',
      'Showed great critical thinking skills and foreseen the conflicts/gaps/bottlenecks. Took immediate action to avoid any sort of risk on business.',
      'Managed product roadmap. Always aligned the roadmap with senior management. Any urgent customer need was adopted in product roadmap by ensuring all the stake holders are onboard with the change.',
    ],
  },
  {
    title: 'IT Development Lead',
    company_name: 'Mobily',
    icon: mobily,
    iconBg: '#383E56',
    date: 'Jan 2014 - Jan 2017',
    points: [
      'Responsible to deliver key business projects.',
      'Involved in close coordination with the Business Services group, responsible for business requirements, to understand and fulfill business requirements as necessary.',
      'Involved in all aspects of the System Development Life Cycle - from conceptual phase through to implementation.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Bonzer Flix',
    description:
      'An AI powered comprehensive movie application where users can discover titles within specific categories and genres, Login to TMDB (The Movie DB) system, save them to watchlists and Favorites, view trailers, and access information about the cast, synopsis, and more. Provide light and dark mode access to users viewing on multiple devices. All these features can be access by in-app voice assistants that built using Alan AI.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'material-ui',
        color: 'pink-text-gradient',
      },
      {
        name: 'Alan AI',
        color: 'blue-text-gradient',
      },
    ],
    image: bonzerflix,
    source_code_link: 'https://github.com/connect2aq/bonzerflix',
    website_link: 'https://bonzerflix.netlify.app/',
  },
  {
    name: 'Bonzer Store',
    description:
      'eCommerce with NEXT JS. Log In and Log Out authentication Flow with NextAuth. Add to Basket Functionality using Redux toolkit. Basket page where you can add/remove products and change their quantities. Complete Stripe Payments Checkout Flow for all the items in basket. Cloud Firestore database to have an order screen with all orders details. Used Tailwind CSS to built a beautiful responsive Amazon Clone.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Stripe',
        color: 'blue-text-gradient',
      },
    ],
    image: bonzerstore,
    source_code_link: 'https://github.com/connect2aq/bonzerstore',
    website_link: 'https://bonzerstore.vercel.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
