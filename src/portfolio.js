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
  resumeLink:
    "https://drive.google.com/file/d/1kcvW8P65jWZFeKR6Jopf3nrQLA1qJCwn/view?usp=sharing",
  mail: "mailto:hrishipatel99@gmail.com",
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
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
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
          iconifyClass: "skill-icons:react-dark",
        },
        {
          name: "Bootstrap",
          iconifyClass: "skill-icons:bootstrap",
        },
        
      ],
    },
    {
      name: "Miniproject Cloud Computing",
      url: "https://github.com/burinc51/azure-storage-php",
      description:
        "project",
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
