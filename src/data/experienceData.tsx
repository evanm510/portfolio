import { ExperienceData } from "@/types/global";

export const sendKitsExperienceData: ExperienceData = {
  title: "SendKits",
  dateRange: "Feb 2024 - Present",
  position: "Software Engineer I",
  description:
    "SendKits streamlines sales by enabling rapid creation of web-based sales rooms featuring branded materials, documents, and media, with analytics to track engagement and drive better results.",
  contributions: [
    {
      name: "Embedded Content Viewer",
      description:
        "Built a custom viewer for displaying documents and media, enhancing client engagement and usability.",
    },
    {
      name: "File Proxying System",
      description:
        "Implemented a secure proxy system for serving assets from AWS S3, improving security and reliability.",
    },
    {
      name: "AWS Lambda Integration",
      description:
        "Engineered a function to generate and store thumbnail images dynamically.",
    },
    {
      name: "Image Cropping Feature",
      description:
        "Developed and integrated an intuitive tool for users to edit images, improving control and customization.",
    },
    {
      name: "API and UI Development",
      description:
        "Designed and deployed APIs, database scripts, and reusable UI components, ensuring seamless third-party integrations and robust performance.",
    },
  ],
  learnMoreUrl: "https://www.sendkits.io/",
  technologies: [
    { imageSrc: "/tech-logos/react.svg", text: "React.js" },
    { imageSrc: "/tech-logos/next.js.svg", text: "Next.js" },
    { imageSrc: "/tech-logos/typescript.svg", text: "TypeScript" },
    { imageSrc: "/tech-logos/html.svg", text: "HTML" },
    { imageSrc: "/tech-logos/css.svg", text: "CSS" },
    { imageSrc: "/tech-logos/mysql.svg", text: "MySQL" },
    { imageSrc: "/tech-logos/prisma.svg", text: "Prisma ORM" },
    { imageSrc: "/tech-logos/awswhite.svg", text: "AWS" },
  ],
  images: [
    {
      imageSrc: "/SendKitsScreenshots/SK_DemoKit.png",
      alt: "Screenshot of Demo Kit",
    },
    {
      imageSrc: "/SendKitsScreenshots/SK_AssetManager1.png",
      alt: "Screenshot of Asset Manager 1",
    },
    {
      imageSrc: "/SendKitsScreenshots/SK_AssetManager2.png",
      alt: "Screenshot of Asset Manager 2",
    },
    {
      imageSrc: "/SendKitsScreenshots/SK_AssetManager3.png",
      alt: "Screenshot of Asset Manager 3",
    },
    {
      imageSrc: "/SendKitsScreenshots/SK_DemoKit2.png",
      alt: "Screenshot of Demo Kit 2",
    },
    {
      imageSrc: "/SendKitsScreenshots/SK_DemoKit3.png",
      alt: "Screenshot of Demo Kit 3",
    },
    {
      imageSrc: "/SendKitsScreenshots/SK_Home.png",
      alt: "Screenshot of Home screen",
    },
    {
      imageSrc: "/SendKitsScreenshots/SK_KitBuilder.png",
      alt: "Screenshot of Kit Builder",
    },
    {
      imageSrc: "/SendKitsScreenshots/SK_ViewerScreen.png",
      alt: "Screenshot of Viewer Screen",
    },
  ],
};

export const threadCloudExperienceData: ExperienceData = {
  title: "ThreadCloud",
  dateRange: "Aug 2023 - Feb 2024",
  position: "Software Engineering Intern",
  description:
    "ThreadCloud is a project management software designed to streamline collaboration and provide clients with real-time visibility into the progress of their projects. With features like task tracking, milestone management, and status updates, Threadcloud enables teams to stay organized and ensures clients remain informed throughout the project lifecycle.",
  contributions: [
    {
      name: "UI Components Optimization",
      description:
        "Built and optimized UI components to add new features, improve user experience, and resolve bugs.",
    },
    {
      name: "API Development",
      description:
        "Developed RESTful APIs to handle data processing and implement business logic.",
    },
    {
      name: "Database Schema Design",
      description:
        "Assisted in database schema design and implemented changes to meet application requirements.",
    },
  ],
  learnMoreUrl: "",
  technologies: [
    { imageSrc: "/tech-logos/react.svg", text: "React.js" },
    { imageSrc: "/tech-logos/rubyonrails.svg", text: "Ruby on Rails" },
    { imageSrc: "/tech-logos/javascript.svg", text: "JavaScript" },
    { imageSrc: "/tech-logos/ruby.svg", text: "Ruby" },
    { imageSrc: "/tech-logos/html.svg", text: "HTML" },
    { imageSrc: "/tech-logos/css.svg", text: "CSS" },
    { imageSrc: "/tech-logos/mysql.svg", text: "MySQL" },
  ],
  images: [
    {
      imageSrc: "/ThreadCloudScreenshots/ThreadCloud_img1.png",
      alt: "ThreadCloud Home Screen",
    },
    {
      imageSrc: "/ThreadCloudScreenshots/ThreadCloud_img2.png",
      alt: "ThreadCloud Project Screen",
    },
    {
      imageSrc: "/ThreadCloudScreenshots/ThreadCloud_img3.png",
      alt: "ThreadCloud Task Screen",
    },
    {
      imageSrc: "/ThreadCloudScreenshots/ThreadCloud_img4.png",
      alt: "ThreadCloud Projects Screen",
    },
    {
      imageSrc: "/ThreadCloudScreenshots/ThreadCloud_img5.png",
      alt: "ThreadCloud Profile Screen",
    },
  ],
};
