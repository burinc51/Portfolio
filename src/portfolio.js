/* Change this file to get your personal Porfolio */


//Home Page
const greeting = {
  title: "Hello.",
  title2: "Burin",
  logo_name: "C.burin()",
  nickname: "hrishi1999 / picleric",
  full_name: "Burin Chornwaree",
  subTitle:
    "",
  // resumeLink:
  //   "https://drive.google.com/file/d/1kcvW8P65jWZFeKR6Jopf3nrQLA1qJCwn/view?usp=sharing",
  // mail: "mailto:hrishipatel99@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/burinc51",
  linkedin: "https://www.linkedin.com/in/burin-chornwaree/",
  gmail: "burin.chornwaree@gmail.com",
  facebook: "https://www.facebook.com/burin.chornware.3",
  
};

const degrees = {
  degrees: [
    {
      title: "KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK (KMUTNB)",
      subtitle: "Electronic Engineering Technology (Computer)",
      logo_path: "logo_kmutnb.png",
      alt_name: "kmutnb",
      duration: "2022 - present",
      descriptions: [
        "⚡ GPXA: 3.35",
      ],
      website_link: "https://www.kmutnb.ac.th",
    },
    {
      title: "CHANTHABURI TECHNICAL COLLEGE.",
      subtitle: "High vocational Certificate in Computer Technology",
      logo_path: "logo_technic.png",
      alt_name: "technic",
      duration: "2020 - 2022",
      descriptions: [
        ""
      ],
      website_link: "https://www.technicchan.ac.th",
    },
  ],
};

const experience = {
  experience: [
    { 
      title: "Laconic Technology co. ltd",
      subtitle: "Frontend Developer",
      logo_path: "Advice_logo.png",
      alt_name: "Advice",
      duration: "May. - Present. 2024",
      descriptions: [
        "⚡ Developed and maintained web applications using React.js, TypeScript, Tailwind CSS, and Redux",
        "⚡ Debugged and resolved issues as assigned"
      ],
    },
    { 
      title: "Advice IT Chanthaburi",
      subtitle: "Computer technicians And Salesman",
      logo_path: "Advice_logo.png",
      alt_name: "Advice",
      duration: "Jun. - Jul. 2021",
      descriptions: [
        "⚡ Computer technicians",
        "⚡ Salesman"
      ],
    },
    {
      title: "SNC Former PCL",
      subtitle: "Maintenance Technician",
      logo_path: "SNC_logo.png",
      alt_name: "SNC",
      duration: "Feb. - Mar. 2021",
      descriptions: [
        "⚡ Assistant Production Engineer",
        "⚡ production Line staff"
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hrishi2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      name: "Portfolio",
      url: "https://github.com/burinc51/Portfolio",
      description: "Web Portfolio React.js is a project in the SELECTED TOPIC IN COMPUTER class. Learn about React.js, Node.js, github desktop.",
      img:"index.png",
      languages: [
        {
          name: "React.js",
          iconifyClass: "skill-icons:react-light",
        },
        {
          name: "Bootstrap",
          iconifyClass: "skill-icons:bootstrap",
        },
        
      ],
    },
    {
      name: "WebFileDrop",
      url: "https://github.com/burinc51/azure-storage-php",
      description:
        "Miniproject cloud computing",
      img:'miniproject.png',
        languages: [
        {
          name: "php",
          iconifyClass: "logos:php",
        },
        {
          name: "Azure",
          iconifyClass: "devicon:azure",
        },
      ],
    },
    {
      name: "webShorturl and Qrcode",
      url: "https://github.com/burinc51/ShortUrl-front.git",
      description:
        "",
      img:'shorturl.png',
        languages: [
        {
          name: "React.js",
          iconifyClass: "skill-icons:react-light",
        },
        {
          name: "Bootstrap",
          iconifyClass: "skill-icons:bootstrap",
        },
        {
          name : "Node.js",
          iconifyClass: "logos:nodejs-icon-alt"
        }
      ],
    },
 
  ],
};

export {
  greeting,
  socialMediaLinks,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
