import {
  aws,
  css,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  coniferpoint,
  hometown,
  dadir_design,
  ai_summary,
  nick_lamb,
  nick_dom,
  zach_warf,
  avatarman,
  avatarwomen,
  dbryan,
  openai,
  david_narrates,
  lambda,
  smart_cards,
  nextjs,
  stripe,
  pinecone,
  profsrated,
  headstarter
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
    path: "/",
  },
  {
    id: "experience",
    title: "Experience",
    path: "/experience",
  },
  {
    id: "testimonials",
    title: "Testimonials",
    path: "/testimonials",
  },
  {
    id: "projects",
    title: "Projects",
    path: "/projects",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Software Engineer Fellow",
    company_name: "Headstarter",
    icon: headstarter,
    iconBg: "#383E56",
    date: "July 2024 - September 2024",
    points: [
      "Built 5 AI apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI with 98% accuracy, as seen by 1000 users.",
      `Led and mentored a team of 3 fellows in mastering Git best practices and the MVC software design pattern ,
        resulting in their ability to independently manage a full project lifecycle from blueprint to launch within just 4
        weeks.`,
      `Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and microservice
        patterns.`,
    ],
  },
  {
    title: "Full-stack Web Developer",
    company_name: "Conifer Point (contract)",
    icon: coniferpoint,
    iconBg: "#383E56",
    date: "October 2023 - April 2024",
    points: [
      "Spearheaded the development of a dormant molecule lookup application using React and AWS Lambda, prompting the CEO to initiate the refunding request process with the Gates Foundation.",
      "Revitalized a dormant GraphQL codebase for complex queries, reducing large molecule search times by 550%.",
      "Optimized SQLAlchemy and MySQL queries, reducing average search times by 60%",
      "Successfully upgraded data sources to latest versions, deployed to AWS S3, then migrated data to a new database system ensuring seamless data continuity and new computational research",
      "Troubleshot EC2 instance crashes and optimized AWS Route 53 routing, improving uptime.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Hometown Ticketing",
    icon: hometown,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Worked closely with mobile engineers, UX designers, and product managers to deliver features in an agile fashion.",
      "Collaborated with clients to troubleshoot website issues, manage content embeds, and automate database operations using PHP",
      "Resolved a persistent two-year stale session issue by integrating the Clerk sign-out API, ensuring the reliability of the sign-out process across Android and iOS platforms on separate codebases (Java, Swift)",
    ],
  },
];

const testimonials = [
  {
    quote:
      "I have seen my fair share of engineers and developers throughout my career.\
            Hamza Shueib is someone who has really stood out when I think back about those I've\
            encountered. Hamza has demonstrated many great qualities and skills that I\
            think any leader should want on their team. Hamza is a quick learner and flexible with a\
            great ability to adapt and context switch when asked. Through his experience here he\
            has shown myself and my team how bright his future truly is.",
    name: "Zach Warf",
    title: "Mobile Development Delivery Manager",
    company: "Hometown Ticketing",
    img: zach_warf,
  },
  {
    quote:
      "He was a quick learner with Xcode, already tackling complex storyboarding constraints used to position and align UI components in apps)\
            within a matter of days. He also picked up the Swift language very quickly, producing clean and readable code.",
    name: "Daniel Gump",
    title: "Mobile Engineering Tech Lead",
    company: "Hometown Ticketing",
    img: avatarman,
  },
  {
    quote:
      "Hamza played the key role in resuming development on our search tool for “Natural Product” molecules,\
            which had been lying dormant for over a year. Hamza was a wonderful part of our team. He brings joy, enthusiasm, and integrity to the work.\
            He quickly finds solutions for problems but is teachable, always ready to learn the principles that suggest\
            alternate approaches",
    name: "Daniel Bryan",
    title: "Chief Software Architect",
    company: "Conifer Point",
    img: dbryan,
  },
  {
    quote:
      "Hamza is eager to hop in and start working independently but is also ready to ask great\
            questions and take feedback and advice when offered. He was asked to begin working\
            on a script and was able to begin scaffolding the structure right away. When it became a\
            more urgent matter and I took over, he provided valuable insight into things that I\
            missed and would have had to correct down the road.",
    name: "Nick Lamb",
    title: "Senior Support Engineer",
    company: "Hometown Ticketing",
    img: nick_lamb,
  },
  {
    quote:
      "Hamza is an extremely bright and driven individual who will provide great value from a\
            technical contribution and culture perspective to any company that brings him on",
    name: "Nick Domitio",
    title: "Web Development Delivery Manager",
    company: "Hometown Ticketing",
    img: nick_dom,
  },
  {
    quote:
      "Hamza is extremely eager to work and tackle new challenges. He is inquisitive when\
                being shown new information in order to understand the processes we use.",
    name: "August Newman",
    title: "Support Engineer",
    company: "Hometown Ticketing",
    img: avatarwomen,
  },
];

const projects = [
  {
    id: 1,
    name: "SmartCards AI",
    description:
      "SmartCards AI is an innovative web app that uses advanced AI to generate personalized flashcards, helping students study more effectively and efficiently.\
            It offers customizable decks, adaptive learning, and seamless collaboration to elevate academic performance.",
    iconLists: [nextjs, javascript, tailwind, openai, stripe],
    img: smart_cards,
    source_code: "https://github.com/hamza24v/smart-cards-ai",
    livelink: "https://smart-cards-ai.vercel.app//",
  },
  {
    id: 2,
    name: "Ai Summarizer",
    description:
      "Ever came across a dauntingly long article and started etching for a TLDR note that's no where to be found? Let me introduce you to the AI summarizer.\
          This website will summarize any article that you feed into it.",
    iconLists: [reactjs, javascript, nodejs, tailwind, openai],
    img: ai_summary,
    source_code: "https://github.com/hamza24v/ai_summarizer",
    livelink: "https://aisummaryy.netlify.app/",
  },
  {
    id: 3,
    name: "Dadir Designs",
    description:
      "Web based platform for a furniture assembly company: Dadir Design. This service allows users to view galleries, reviews, book appointments, and buy services.",
    iconLists: [reactjs, javascript, nodejs, aws, tailwind, mongodb],
    img: dadir_design,
    source_code: "https://github.com/hamza24v/Dadir_design",
    livelink: "",
  },
  {
    id: 4,
    name: "David Narrates",
    description:
      "AI based web app used to transform everyday photos into fun and engaging documentary-style stories, narrated by the iconic voice of David Attenborough.",
    iconLists: [reactjs, nodejs, tailwind, lambda, openai],
    img: david_narrates,
    source_code: "https://github.com/hamza24v/david_narrates/tree/node_backend",
    livelink: "https://dqsonwlvmbxv9.cloudfront.net/index.html",
  },
  {
    id: 5,
    name: "Profs Rated AI",
    description:
      "Trained on a dataset of 20,000 samples from Rate My Professor, Profs Rated AI is designed to empower students by providing insightful, AI-driven reviews and ratings of professors.",
    iconLists: [nextjs, tailwind, openai, pinecone],
    img: profsrated,
    source_code: "https://github.com/umerp/AI-rate-my-professor",
    livelink: "https://ai-rate-my-professor-umerps-projects.vercel.app/",
  },
];

export { navLinks, technologies, experiences, testimonials, projects };
