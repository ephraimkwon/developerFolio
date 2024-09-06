/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ephraim Kwon",
  title: "Hi, I'm Ephraim",
  subTitle: emoji(
    "A passionate New Grad Full Stack Software Developer 🚀 I have experience working with Python / Java / ReactJS / Flutter / Docker and many other cool technologies and frameworks!"
  ),
  resumeLink:
    "Ephraim_Kwon_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ephraimkwon",
  linkedin: "https://www.linkedin.com/in/ephraim-kwon/",
  gmail: "ephraim.kwon@gmail.com",
  instagram: "https://www.instagram.com/ephraimkwon/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "NEW GRAD FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Sr Specialist Member of Technical Staff @ AT&T"),
    emoji("⚡ Passionate about learning new technologies such as Cloud Computing, high-concurrency bulk data processing, and AI"),
    emoji(
      "⚡ Constantly learning new things!"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Nodejs",
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
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/Georgia_Tech_seal.svg.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2020 - December 2023",
      desc: "GPA: 3.75 - Graduated with Highest Honors",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Front-End Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr Specialist Member of Technical Staff",
      company: "AT&T Labs",
      companylogo: require("./assets/images/att.jpg"),
      date: "September 2024 – Present",
      desc: "Member of Technical Staff @ AT&T Labs",
      descBullets: [
        "Built high-concurrency bulk data processing systems using multithreading and real-time socket programming using Java",
        "Utilized big data tools such as Kafka, NoSQL databases, Snowflake, and Oracle SQL in order to process and store large volumes of data",
        "Wrote Python/Perl/Shell scripts to automate processes"
      ]
    },
    {
      role: "Software Engineer",
      company: "NCR Voyix",
      companylogo: require("./assets/images/voyix_logo.png"),
      date: "February 2024 – September 2024",
      desc: "Software Engineer 1 @ NCR Voyix on the Fuel and Convenience Retail Team",
      descBullets: [
        "Leveraged code quality technologies such as SonarQube to identify and resolve critical bugs, code smells,and security vulnerabilities within a large-scale C++ enterprise codebase",
        "Conducted comprehensive code analysis, leading to the detection and remediation of 500+ code issues, resulting in a 30% reduction in technical debt, enhancing overall code quality and maintainability",
        "Diagnosed and resolved complex bugs reported by large corporate clients in NCR Voyix’s point of salesystems, ensuring minimal downtime and operational efficiency",
        "Utilized virtual machines and site lab environments to accurately reproduce and troubleshootcustomer-reported bugs, ensuring thorough analysis and effective solutions"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "NCR Corporation",
      companylogo: require("./assets/images/NCR_Corporation_logo.svg.png"),
      date: "Summer of 2022 and 2023",
      desc: "Software Engineer Intern on the Application Security Team and Fuel and Convenience Retail Team",
      descBullets: [
        "Developed a full-stack AI chatbot application using React and Python that streamlines shoppers’ experiences at NCR locations",
        "Deployed an open source large language model to a server with threading and TCP to manage efficient communication and concurrent processing, boosting overall performance by 40%",
        "Integrated NCR’s API functions to provide real-time product information, availability, and pricing, enhancing the chatbot’s utility and user experience",
        "Curated over a dozen NCR React components and pages using Material UI components following industry standard Material Design system guidelines and principles",
        "Utilized Linux, bash scripts, and Docker to containerize the NIST Statistical Test Suite used to test the validity and security of random number generators in production code in the case of a PCI – DSS audit"
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

// Some `big p`rojects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some projects I have worked on for real clients and personal development",
  projects: [
    {
      image: require("./assets/images/carries-closet.webp"),
      projectName: "Carrie's Closet",
      projectDesc: "Built and deployed a cross platform mobile application for a non-profit organization that provides clothes and hygiene products to hundreds of at-risk children in 80+ schools in the Georgia public school system",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://carriesclosetofga.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/aws.png"),
      projectName: "Personal Cloud Portfolio",
      projectDesc: "My personal journey learning about Cloud Services like AWS and creating my own personal porfolio website",
      footerLink: [
        {
          name: "Read More",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

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
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or reach out for opportunities? My inbox is open!",
  number: "",
  email_address: "ephraim.kwon@gmail.com",
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  contactInfo,
  isHireable,
  resumeSection
};
