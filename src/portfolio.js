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
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "McDonald ",
  title: "Hi all, I'm McD",
  subTitle: emoji(
    "A curious Tech ambassador 🚀 that has experience in building Web solutions using / TypeScript / Reactjs / Nodejs and some other cool libraries and frameworks.I also enjoy documenting my software development journey through my Youtube channel @mcdthedev"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cjvzTQkc-1YBu7E6Z4gzLZ60EIJRR4Q2/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/McDonaldMusimwa",
  linkedin: "https://www.linkedin.com/in/mcdonaldmusimwa",
  gmail: "https://www.youtube.com/@mcdthedev",
  youtube: "https://www.youtube.com/@mcdthedev",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What i am made up off",
  subTitle: "CURIOUS TECH ENTHUSIASTE WHO WANTS TO EXPLORE EVERY TECH STACK",
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
      degree: "",
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
      role: "Software Developer",
      company: "SkyIT Services",
      companylogo: require("./assets/images/skyit.png"),
      date: "May 2025 - Present",
      desc: "Built and maintained in-house software solutions using Next.js, React, and Prisma ORM with a PostgreSQL backend, hosted on AWS. Utilized AWS services for database management, scalable data storage, and authentication.",
      descBullets: [
        "Engineered and deployed a full-stack application on AWS EC2, leveraging RDS for database management and S3 for scalable object storage to handle large-scale file and data needs.",
        "Implemented secure user authentication and authorization using AWS Cognito User Pools**, ensuring data protection and a seamless login experience.",
        "Conducted rigorous code reviews on pull requests to ensure a high standard of code quality and maintainability.",
        "Collaborated closely with cross-functional teams in sprint meetings to align on project goals and translate complex requirements into production-ready features."
      ]
    },
    {
      role: "Software Engineer",
      company: "DPIT Solutions",
      companylogo: require("./assets/images/diamondlogo.png"),
      date: "Sept 2024 – May 2025",
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
      role: "Web Developer (Part Time)",
      company: "Aparecio Foundation",
      companylogo: require("./assets/images/apareciologo.png"),
      date: "Feb 2024 – Aug 2024",
      desc: "Primarily worked with PHP, WordPress, and MySQL to develop and maintain our website, ensuring a seamless user experience for visitors and donors alike.",
      descBullets: [
        "Converted design documents into working websites using WordPress.",
        "Worked extensively with database solution such as MySQL to manipulate and store data"
      ]
    } /*,
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
    }*/
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
  title: "Some of my  Projects",
  subtitle: "Some projects that i have worked on",
  projects: [
    {
      image: require("./assets/images/practicesolution.png"),
      projectName: "Practice Solution",
      projectDesc: `I have been working on Practice Solutions, a project designed to help learners test and strengthen their AWS knowledge through interactive practice. The application is built with React, integrates AWS Cognito for authentication, and leverages serverless services like Lambda, API Gateway, and DynamoDB to deliver secure, scalable functionality.`,
      techStack: [
        "React",
        "Typescript",
        "Api-Gatway",
        "Lambda",
        "DynamoDb",
        "Aws Cognito"
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://staging.d385k1fvsqio60.amplifyapp.com/"
        },
        {
          name: "Visit Code Base",
          url: "https://github.com/McDonaldMusimwa/practiceaws.git"
        }
      ]
    },
    {
      image: require("./assets/images/invogo.png"),
      projectName: "InvoGo",
      projectDesc: `This website showcases a mobile invoicing app I built with React Native and Firebase. Inspired by handymen lacking proper invoicing, it enables quick invoice creation and sharing via WhatsApp. The project strengthened my skills in mobile navigation, data structures, authentication, and styling differences between web and mobile development. `,
      techStack: ["Typescript", "React Native", "Firebase"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://main.d2m7mhv4scf0qf.amplifyapp.com/"
        },
        {
          name: "Visit Code Base",
          url: "https://github.com/McDonaldMusimwa/InvoiceToGo.git"
        }
        //  you can add extra buttons here.
      ]
    }
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
  title: "AWS Solutions Architect",
  subtitle:
    "Achieved AWS Certified Solutions Architect – Associate, demonstrating skills in designing and deploying scalable, secure, and cost-effective applications on AWS.",
  image: require("./assets/images/awssaa.png"),
  imageAlt: "AWS Solutions Architect Logo",
  footerLink: [
    {
      name: "Certification",
      url: "https://www.credly.com/badges/0b853cd1-9da3-4ea5-8e70-2e74f8c116aa/linked_in"
    },
  ]
}
,
    
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
      url: "https://medium.com/@mcdonald.musimwa74/starting-a-node-js-server-with-typescript-613b3abd7aee",
      title: "Starting a Node Server with Typescript",
      description:
        "Ditch Javascript server and get started with a Typescript Server with this guide on"
    },
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
  email_address: "musimwamcdonald@gmail.com"
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
