/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "McDonald ",
  title: "Hi all, I'm McD",
  subTitle: emoji(
    "A curious Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Java / JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/McDonaldMusimwa",
  linkedin: "https://www.linkedin.com/in/mcdonaldmusimwa",
  gmail: "mcdonald.musimwa74@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What i am made up off",
  subTitle:
    "CURIOUS FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brigham Young University (Idaho)",
      logo: require("./assets/images/byuidaho.png"),
      subHeader: "Bachelor of Science in Software Development",
      duration: "January 2020 - December 2024",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Development,Database Admin, Operating Systems, ...",
      descBullets: [
        "Completed three specialized certificates: Web and Computer Programming, Web Development, and Software Development, focusing on foundational and advanced web and software development skills.",
        "Developed dynamic, data-driven applications: Built visually appealing, industry-standard web applications, demonstrating full-stack development skills.",
        "Contributed to the full software lifecycle: Gained experience in planning, designing, developing, and testing software while evaluating alternative solutions.",
        "Enhanced self-learning and teamwork skills: Independently learned new technologies and demonstrated strong collaboration in project-based settings."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend - Database",
      progressPercentage: "100%"
    },
    {
      Stack: "Programming",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
<img
  data-src=""
  border="0"
  alt="Diamond Pinnacle IT Solutions&nbsp;"
  class=" lazyloaded"
  src=""
></img>;
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "DPIT Solutions",
      companylogo: require("./assets/images/diamondlogo.png"),
      date: "Sept 2024 – Present",
      desc: "Designed and development of complex software solutions,primarily worked with Java and Node for backend and React js for front end.Converted Figma design documents into working software.",
      descBullets: [
        "Developed and maintained web applications using Java, Node, JavaScript, and React, ensuring high performance and responsiveness.",
        "Collaborated closely with the design team to implement and refine software solutions.",
        "Implemented RESTful APIs to integrate front-end React applications with back-end Java and Node systems.",
        "Optimized code for scalability, reliability, and maintainability across various platforms.",
        "Worked in an agile environment, focusing on rapid iterations and deployment of features"
      ]
    },
    {
      role: "Web Developer (Voluntary)",
      company: "Aparecio Foundation",
      companylogo: require("./assets/images/apareciologo.png"),
      date: "Feb 2024 – Aug 2024",
      desc: "Primarily worked with PHP, WordPress, and MySQL to develop and maintain our website, ensuring a seamless user experience for visitors and donors alike.",
      descBullets: [
        "Converted design documents into working websites using WordPress.",
        "Worked extensively with database solution such as MySQL to manipulate and store data"
      ]
    },
    {
      role: "Financial Accountant",
      company: "Forever Living Products",
      companylogo: require("./assets/images/foreverlogo.jpg"),
      date: "Feb 2024 – Apr 2024",
      desc: "A Financial Controller was responsible for managing an organization’s financial operations, including accurate bookkeeping, financial reporting, budgeting, and cost management. They ensured compliance with financial regulations, streamlined processes, and provided strategic insights to enhance profitability and support decision-making across multiple business entities.",
      descBullets: [
        "Increased stock reports accuracy by 4% by introducing accurate stock costing and stock controlling systems.",
        "Successfully managed financial entries for 3 international entities, ensuring accurate bookkeeping and timely submission, consistently meeting deadlines 2-3 days in advance.",
        "Orchestrated the preparation of year-end financial statements by effectively coordinating a team of 4 bookkeepers, streamlining document sourcing and report compilation processes to ensure accuracy and timeliness."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I WORKED WITH TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/invogo.png"),
      projectName: "InvoGo",
      projectDesc: "Mobile app invoiving application.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://invogo.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    /*
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
      */
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/posts/mcdonaldmusimwa_i-have-been-looking-at-the-current-tech-trajectory-activity-7070359655868190721-AGZ-?utm_source=share&utm_medium=member_desktop",
      title: "Navigating the Evolving Realm of Technology-Driven Enterpris",
      description:
        "Technology has become an indispensable part of our lives, propelling us to new levels of efficiency and innovation."
    },
    {
      url: "https://www.linkedin.com/posts/mcdonaldmusimwa_backend-software-webdevelopment-activity-7040123698959273984-XcB5?utm_source=share&utm_medium=member_desktop",
      title: "Web apps,Static or Dynamic ?",
      description:
        "Web development is an evolving industry deciding which web solution will meet your objectives and revolve around choosing between "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+27-67 1033055",
  email_address: "mcdonald.musimwa74@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
