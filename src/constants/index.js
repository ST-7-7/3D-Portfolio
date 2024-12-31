export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const myProjects = [
  {
    title: 'Shopping - Furniture Online',
    desc: 'This project is a modern furniture shopping website built with React.js, Redux Toolkit, and Firebase v9.',
    subdesc:
      'It offers a seamless user experience with a modern UI, featuring real-time data management, secure user authentication, and product handling powered by Firebase. Key features include user registration, login, and account management, along with a fully functional shopping cart that allows users to manage their purchases. Additionally, an administrative panel enables efficient user and product management.',
    href: 'https://furniture-online-5b100.web.app/home',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/arrow-up.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'tech/reactjs.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'tech/redux.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: 'tech/javascript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: 'tech/nodejs.png',
      },
      {
        id: 5,
        name: 'Framer Motion',
        path: 'tech/framer.png',
      },
    ],
  },

  {
    title: '3D Page - Creatures',
    desc: 'This 3D website, built using HTML, CSS, and JavaScript, creates an immersive experience for showcasing animals.',
    subdesc:
      'It combines interactive 3D models with embedded videos, allowing users to explore animals in both detailed virtual environments and real-life footage. Whether for educational or entertainment purposes, this platform offers a unique way to connect with and learn about the animal world.',
    href: 'https://st-7-7.github.io/Creature-3D/#',
    texture: '/textures/project/project7.mp4',
    logo: '/assets/arrow-up.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'tech/javascript.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'tech/css.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: 'tech/html.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: 'tech/figma.png',
      },
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.10,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -10.6, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Master of Information Technology',
    pos: 'University of South Australia',
    duration: 'July 2022 - July 2024',
    // title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/hat.webp',

  },

  {
    id: 2,
    name: 'AWS Certified DevOps Engineer - Professional',
    pos: 'Amazon',
    duration: 'Dec 2024 - Dec 2027',
    // title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/dop.png',

  },
  {
    id: 3,
    name: 'AWS Certified Developer - Associate',
    pos: 'Amazon',
    duration: 'Nov 2024 - Nov 2027',
    // title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/dva.png',

  },

  {
    id: 4,
    name: 'The Complete 2024 Web Development Bootcamp ',
    pos: 'Udemy',
    duration: 'May 2024',
    // title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/udemy.png',
 
  },
  {
    id: 5,
    name: 'Data Analytics and Visualisation Job Simulation',
    pos: 'Accenture',
    duration: 'Dec 2023',
    // title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/accenture.png',
  
  },
  {
    id: 6,
    name: 'Deloitte Australia - Technology Job Simulation',
    pos: 'Deloitte',
    duration: 'Dec 2023',
    // title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/deloitte.png',
    
  },
  {
    id: 7,
    name: 'Google Business Intelligence Specialisation',
    pos: 'Google ',
    duration: 'October 2023',
    // title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/google.webp',
  
  },
];
