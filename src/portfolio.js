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
  username: "Kaushal Khachane",
  title: "Hi all, I'm Kaushal",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1uaBP8LfzG6ak1Z_7Lxq8t_JOkFxZeA6u/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kaushalkhachane",
  linkedin: "https://www.linkedin.com/in/kaushal-khachane-a8bbb11a0",
  gmail: "khachaneks22@gmail.com",
  gitlab: "https://gitlab.com/khachaneks22",
  kaggle: "https://www.kaggle.com/kaushalkhachane",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ A full-stack developer with a comprehensive understanding of both frontend and backend development"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / AppWrite / Mongo DB atlas"
    ),
    emoji("⚡ Strong proficiency in building and maintaining the backend of applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)."),
    emoji("⚡ Effective collaboration with cross-functional teams, to ensure a cohesive and efficient development process"),
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
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Government Polytechnic, Khamgaon",
      logo: require("./assets/images/Gpk.jpg"),
      subHeader: "Diploma in Computer Science",
      duration: "June 2019 - April 2022",
      Percentage: "93.43%",
      desc: "Acquired Proficiency in Diverse Technologies: C, C++, Java, VB.Net Framework, Python, PHP, Android Development, SQL Database, Netweking, Operating System",
      descBullets: [
        "AWT, Swing, JDBC, Java Servlet",
        "Developed a comprehensive job finding website using Java Servlets. Utilized Apache as the server to ensure robust performance.",
      ],
    },
    {
      schoolName: "Vishwakarma Institute Of Information Technology",
      logo: require("./assets/images/Viit.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "Nov 2022 - April 2025",
      CGPA: "9.28",
      desc: "Learned Subjects Such As: Data Science and Machine Learning: Artificial Intelligence Agile and DevOps Applied Artificial Intelligence Cloud Computing, SQL and NO-SQL Database, Netweking, Operating System",
      descBullets: ["Participated in a Kaggle competition hosted by a college professor."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Bitpills IT Solution",
      companylogo: require("./assets/images/Bitpills.png"),
      date: "Aug 2021 – Sep 2021",
      desc: "Included working on Java, Adv. Java, Servlet and MySql for preparing Ecommerce based website for our customer. Developed Covid Vaccination Management Project Using Java, Java Servlet, JSP and",
      url: "https://drive.google.com/file/d/16OxXk-BVtz_dwl0ItfNo_dhcODJc8g9h/view?usp=drive_link"
    },
    // {
    //   role: "Software Engineer",
    //   company: "Facebook",
    //   companylogo: require("./assets/images/facebookLogo.png"),
    //   date: "June 2018 – Present",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
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
  title: "Projects",
  subtitle: "SOME BIG Projects and some other projects",
  projects: [
    {
      image: require("./assets/images/BloodMernPro.png"),
      projectName: "BloodX",
      projectDesc: "Created user-friendly web app for blood donation, featuring hospital, user, admin portals using MERN Stack",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/KaushalKhachane/bloodx"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/JobPro.png"),
      projectName: "JOB Finding Website",
      projectDesc: "Created a career site with job postings, allowing job seekers to search, apply, and interact with employers for seamless hiring Using Java Servlet and MYSQL",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/KaushalKhachane/Job-Finding-Website"
        }
      ]
    },
    {
      image: require("./assets/images/Fickle.png"),
      projectName: "FickleFlight",
      projectDesc: "Constructed a Fickle Flight Name website with HTML, CSS, React, Material-UI, and Tailwind CSS. Aligned with Figma design, emphasizing modular components and accessibility.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/KaushalKhachane/FickleFlight"
        }
      ]
    },
    {
      image: require("./assets/images/ChatRoom.png"),
      projectName: "ChatRoom",
      projectDesc: "Developed a chat room app using Appwrite as a Firebase alternative. Users register, log in, and seamlessly join a shared chat space. Enables engaging conversations.",
      footerLink: [
        {
          name: "Demo",
          url: "https://chat-room-ashy-nu.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/CovidPro.png"),
      projectName: "Covid Vaccination Management",
      projectDesc: "The main objective of the project is to develop Covid Vaccination management system. In Covid Vaccination management system all vaccination work is done manually.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/KaushalKhachane/Covid-Vaccination-System"
        }
      ]
    },
    {
      image: require("./assets/images/Recommend.png"),
      projectName: "Music and Movie Recommendation",
      projectDesc: "Proposed system captures face with camera, predicts emotion via CNN, suggests music playlist based on mood, aims to improve user's mood. Negative emotions trigger selected playlist/movie. Interactive user-music player experience.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/KaushalKhachane/Music-and-Movies-Recommendation-Based-on-Facial-Emotion"
        }
      ]
    },
    {
      image: require("./assets/images/BloodBankSql.png"),
      projectName: "Centralized Blood Bank Administration System",
      projectDesc: "Developed a chat room app using Appwrite as a Firebase alternative. Users register, log in, and seamlessly join a shared chat space. Enables engaging conversations.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/KaushalKhachane/Centralized-Blood-Bank-Administration-System"
        }
      ]
    },
    
    {
      image: require("./assets/images/ViitConnect.png"),
      projectName: "VIIT Connect",
      projectDesc: "VIIT Connect, a pioneering mobile app built on Flutter, redefines college exploration. Integrating 360-degree panoramas, interactive maps, and augmented reality, it transforms the conventional virtual tour, aiming to bridge the gap between the digital and physical college experience.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/KaushalKhachane/VIIT_CONNECT"
        }
      ]
    },
    {
      image: require("./assets/images/Todo.png"),
      projectName: "Todo List",
      projectDesc: "To-Do List an Android Application developed in Android Studio. By Using SQLite database we can easily stored user work list and process it on Application",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/KaushalKhachane/TODO-List-Android-Project"
        }
      ]
    }, {
      image: require("./assets/images/Volleyball.png"),
      projectName: "Best Volleyball",
      projectDesc: "This dataset is generated from https://women.volleybox.net/ and some other websites by web scraping. It includes top 30 players in 2019 women volleyball and their information. The point here is to understand what makes them best so that I tried to analyze some features and their distributions.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/KaushalKhachane/Best-Volleyball-Players-2019/blob/master/Copy_of_Volleyball.ipynb"
        }
      ]
    },
    {
      image: require("./assets/images/Placement.png"),
      projectName: "ML Models for Placement-Classifier",
      projectDesc: "Our instructor assigned a Kaggle competition with student data in three files: train, test, and solution. The task involved preprocessing, drawing inferences, and applying machine learning models. I achieved 90% accuracy using Random Forest. The evaluation included training on train, testing on test, and comparing predictions with solution.csv.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/KaushalKhachane/ML-Model-For-Placement-Classifier"
        }
      ]
    }, 
    {
      image: require("./assets/images/BankPro.png"),
      projectName: "Customer Account Banking Management System",
      projectDesc: "Developed a C-based console application Using Linked List, for fundamental banking operations. Users manage accounts, conduct transactions, and access customer details with the project password: dsuproject.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/KaushalKhachane/Customer-Account-Banking-Management-System"
        }
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
      title: "First Rank",
      subtitle:
        "Ranked as the First Topper in the Department of Computer Engineering with an percentage of 93.43.",
      image: require("./assets/images/Rank.jpg"),
      imageAlt: "1st Rank at Government Polytechnic Khamgaon",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1f4oUvN_iMXTrdvTPW7iJP3OMQSTE07uq/view?usp=drive_link"
        },
      ]
    },
    {
      title: "Smart India Hackethon",
      subtitle:
        "Smart India Hachethon Winner for VIIT College",
      image: require("./assets/images/SIH.webp"),
      imageAlt: "SIH Logo",
      footerLink: [
        {
          name: "View Project1 Idea",
          url: ""
        },
        {
          name: "View Project2 Idea",
          url: "https://docs.google.com/document/d/1pwc-FSHUBOaBjp1ulUmNKsu3MHzEFJ6DHVHnyCBRqLc/edit"
        },
        {
          name: "Project1 Figma Design",
          url: "https://www.figma.com/file/BEVHEnRNgSSfd4CWYt0DDg/Dhruva-dynamo?type=design&node-id=0-1&mode=design&t=RpkB86uPQy75wycD-0"
        }
      ]
    },

    {
      title: "National Programme on Technology Enhanced Learning",
      subtitle: "Completed NPTEL Certifcation for course Programming In Java",
      image: require("./assets/images/Nptel.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1mKZOcShV4GyAmmOa68I_8Tm3vp7PrRyA/view?usp=drive_link"
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9359168397",
  email_address: "khachaneks22@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable
};
