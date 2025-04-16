import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bitu pathak",
  initials: "DV",
  url: "https://dillion.io",
  location: "India,Dergaon,Assam",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Driving transformation through full-stack development, UI/UX precision, and a mindset rooted in innovation and growth",
  summary:
    "Hi, I'm Bitu Pathak — a Full-Stack Developer turned Entrepreneur with a passion for building impactful digital products. I specialize in full-stack web development, love crafting great user experiences, and enjoy sharing insights on tech and startups. Always exploring, always building  , I focus on creating seamless user experiences that solve real-world problems. I’ve worked on a range of projects—from startup websites to automation tools and AI-driven platforms. I'm also the founder of Assam Webtech and Skripo, where I lead tech innovation and digital growth. When I'm not coding or designing, you'll find me sharing ideas, learning new tech, or helping others grow in their journey.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Node.js",
    "Python",
    "SQL",
    "C++",
    "UI/UX",
    "Git",
    "GitHub"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bp2817433@gmail.com",
    tel: "+91 6002764980",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MRNOXZ",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/bitu-pathak",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/PathakBitu89550",
        icon: Icons.x,

        navbar: true,
      },
    
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Advert Marketing",
      href: "..",
      badges: [],
      location: "Remote",
      title: "Web Developments",
      logoUrl: "/yu.jpg",
      start: "May 2024",
      end: "Jun 2024",
      description:
        "As a Web Developer at Advert Marketing, I focused on creating and optimizing websites that enhanced brand visibility. My role involved developing responsive designs, improving user experience, and implementing digital strategies to boost online engagement and drive business growth..",
    },
    {
      company: "Suvidha Foundation",
      badges: [],
      href: "https://www.linkedin.com/company/suvidha-foundation/posts/?feedView=all",
      location: "Remote",
      title: "Web Dev Engineer",
      logoUrl: "/ty.jpg",
      start: "Jul 2024",
      end: "Jul 2024",
      description:
      "As a Web Development Intern at Suvidha Foundation, I contributed to building and maintaining web solutions that supported the foundation's mission. My role involved developing user-friendly interfaces, ensuring website functionality, and optimizing content to enhance user engagement"
    },
    {
      company: "Assam WebTech",
      href: "https://nvidia.com/",
      badges: [],
      location: "Jorhat,Assam",
      title: "CTO  & Software Engineer",
      logoUrl: "/ass.png",
      start: "January 2024",
      end: "2025",
      description:
      "As the Technical Manager and founder of Assam Webtech, I oversee the development of innovative digital solutions, from web applications to mobile platforms. I lead a team of developers, ensuring project success through technical expertise, creative problem-solving, and delivering high-quality, user-centric products for clients."
    },
    
    
  ],
  education: [
    {
      school: "Dergaon HS School Assam",
      href: "https://www.facebook.com/dsssdergaon.djb/",
      degree: "6-10th",
      logoUrl: "/sh.jpg",
      start: "2016",
      end: "2021",
    },
    {
      school: "Royal Academy Junior College, Dergaon",
      href: "https://www.facebook.com/Royal.Academy.Dergaon/",
      degree: "11th - 12th With Science Stream ,CSE",
      logoUrl: "rl.jpg",
      start: "2022",
      end: "2023",
    },
    {
      school: "The Assam Kaziranga University Jorhat",
      href: "https://www.kzu.ac.in/",
      degree: "Bachelor's Degree of Computer Science & Engineering (CSE)",
      logoUrl: "/ku.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Internshala Training",
      href: "https://ibo.org",
      degree: "Web Development",
      logoUrl: "/in.png",
      start: "2023",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "ARC Refrigeration Consulting Hub",
      href: "https://arcrefri.com/",
      dates: "jul 2024 - jul 2024",
      active: true,
      description:
        "Worked with ARC Refrigeration Consulting Hub to support their digital presence by contributing to website development and ensuring a smooth user experience for their consulting services",
      technologies: [
        "HTML",
        "Javascript",
        "TailwindCSS",
        "Css",
        "Animations CDN",
      ],
      links: [
        {
          type: "Website",
          href: "https://arcrefri.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "p1.mp4",
    },
    {
      title: "Tayler Brown",
      href: "http://taylerbrown.co.uk/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "At Tayler Brown, we specialize in matching exceptional talent with outstanding career opportunities. Whether you're a company seeking the perfect candidate or a professional looking for your next big move, we're here to make the process seamless and successful.",
      technologies: [
        "React.js",
        "Css",
        "API",
        
        "TailwindCSS",
        
      ],
      links: [
        {
          type: "Website",
          href: "http://taylerbrown.co.uk/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "rtc.mp4",
    },
    {
      title: "AIO>io is an all-in-one productivity website",
      href: "--",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Your Productivity HubTo-Do App Organize tasks and manage your daily schedule effortlessly Pomodoro App Boost focus and productivity with time management techniques.",
      technologies: [
        "HTML/CSS",
        "Javascript",
        "TailwindCSS",
        
        
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "vvv.mp4",
    },
    {
      title: "Smart Billing System 📦",
      href: "",
      dates: "April 2023 - April 2023",
      active: true,
      description:
       "The Store Billing System is a web-based application designed to streamline and manage daily store operations efficiently. This project enables users to:Add Products: Easily add products with details such as name, price, and quantity.",
      technologies: [
        "HTML/CSS",
        "Javascript",
        "CDN",
  
        "TailwindCSS",
        "LocalStorage",
        "Illustartions",
        "QR API",
        
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "xc.mp4",
    },
    {
      title: "Fast AI Text-to-Image Generator",
      href: "",
      dates: "April 2023 - April 2023",
      active: true,
      description:
      "This Fast AI Text-to-Image Generator allows users to generate images from textual descriptions using AI. Built with HTML, CSS, and JavaScript, the app sends user input to a Hugging Face API model to generate and display images quickly. ",
      technologies: [
        "HTML/CSS",
        "Javascript",
        "CDN",
  
        "TailwindCSS",
        "LocalStorage",
        "Illustartions",
        " API",
        
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "we.mp4",
    },
    {
      title: "Background Remover Tool",
      href: "",
      dates: "April 2024",
      active: true,
      description:
       "his project is a Background Remover Tool that allows users to easily upload an image, remove its background, and download the processed image. It provides an intuitive interface where users can preview their uploaded image, click a button to remove the background, and see the final result immediately.",
      technologies: [
        "HTML/CSS",
        "Javascript",
        "CDN",
  
        "TailwindCSS",
        "LocalStorage",
        "Illustartions",
        " API",
        
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "dgg.mp4",
    },
  ],
  hackathons: [
    {
      title: "IIT Guwahati GDSC",
      dates: "feb-2025",
      location: "IIT Guwahati ,Assam",
      description:
        "Attending the IIT Guwahati GDSC DevFest 2025 was truly an inspiring and enriching experience. From the moment I walked into the event, I was surrounded by a vibrant atmosphere filled with passionate developers, enthusiastic learners, and industry experts.",
      image:
        '/iit.png',
    
    },
    {
      title: "Google GDSC",
      dates: "September 2023-2027",
      location: "Jorhat,Assam",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "/gdcs.jpg",
     
    },
    {
      title: "Infosys Certificate",
      dates: "Feb 21th, 2024",
      location: "India",
      description:
       "Completed a JavaScript certification from Infosys, gaining a strong foundation in core concepts, DOM manipulation, and modern JS practices for dynamic web development.",
      icon: "public",
      image:
        "info.png",
     
    },
    {
      title: "Interview Skills course from TCS iON ",
      dates: "April 11th , 2025",
      location: "India",
      description:
       "This course helped me to improve my communication skills, understand interview etiquette, and boost my confidence for future interviews.",
      image:
        "tcs.png",
    
    },
    {
      title: "Oasis Infobyte",
      dates: "January 2023th",
      location: "Remote - Internship",
      description:
        "Completed a web development internship at Oasis Infobyte, working on real-world projects and enhancing skills in frontend technologies and responsive design.",
      image:
       "oaa.jpg",
      links: [
       
        // {
        //   title: "ML",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/Wallet6/my6footprint-machine-learning",
        // },
        // {
        //   title: "iOS",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/Wallet6/CarbonWallet",
        // },
        // {
        //   title: "Server",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/Wallet6/wallet6-server",
        // },
      ],
    },
    {
      title: "Job ready MERN full-stack web development course",
      dates: "August 2th , 2024",
      location: "Online Course",
      description:
       "Completed a job-ready MERN Stack web development course, gaining hands-on experience in building full-stack applications using MongoDB, Express.js, React, and Node.js.",
      image:
        "df.png",
     
    },
    {
      title: "AI  from HP LIfe",
      dates: "April - 2025",
      location: "Virtual",
      description:
       "Completed the 'AI for Beginners' course by HP LIFE, gaining foundational knowledge of Artificial Intelligence, its real-world applications, and future potential.",
      image:
       "hp.jpg",
     
    },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
