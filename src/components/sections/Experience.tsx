import ExperienceSection from "../ExperienceSection";

const sendKitsExperienceData = {
  title: "SendKits",
  dateRange: "Feb 2024 - Present",
  position:
    "Full-stack developer for digital sales room software using React.js, Next.js and MySQL.",
  description: [
    "Built a custom embedded content viewer for displaying documents and media within the app.",
    "Implemented a file proxying system to improve security when serving assets from AWS S3.",
    "Engineered an AWS Lambda function to generate and store thumbnail images.",
    "Developed and integrated an image cropping feature to improve user control over image editing.",
    "Implemented various other APIs, UI components, database scripts, and third-party integrations.",
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

const threadCloudExperienceData = {
  title: "ThreadCloud",
  dateRange: "Aug 2023 - Feb 2024",
  position:
    "Full-stack developer for project management software using React.js and Ruby on Rails.",
  description: [
    "Built and optimized UI components to add new features, improve user experience, and resolve bugs.",
    "Developed RESTful APIs to handle data processing and implement business logic",
    "Assisted in database schema design and implemented changes to meet application requirements.",
  ],
  learnMoreUrl: "https://app.threadcloud.net/",
  technologies: [
    { imageSrc: "/tech-logos/react.svg", text: "React.js" },
    { imageSrc: "/tech-logos/next.js.svg", text: "Next.js" },
    { imageSrc: "/tech-logos/javascript.svg", text: "JavaScript" },
    { imageSrc: "/tech-logos/html.svg", text: "HTML" },
    { imageSrc: "/tech-logos/css.svg", text: "CSS" },
    { imageSrc: "/tech-logos/mysql.svg", text: "MySQL" },
    { imageSrc: "/tech-logos/prisma.svg", text: "Prisma ORM" },
    { imageSrc: "/tech-logos/awswhite.svg", text: "AWS" },
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

export default () => {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="flex flex-col gap-6 items-center">
        <div className="text-3xl mx-auto">Experience</div>
        <ExperienceSection
          title={sendKitsExperienceData.title}
          dateRange={sendKitsExperienceData.dateRange}
          position={sendKitsExperienceData.position}
          description={sendKitsExperienceData.description}
          images={sendKitsExperienceData.images}
          learnMoreUrl={sendKitsExperienceData.learnMoreUrl}
          technologies={sendKitsExperienceData.technologies}
        />
        <ExperienceSection
          title={threadCloudExperienceData.title}
          dateRange={threadCloudExperienceData.dateRange}
          position={threadCloudExperienceData.position}
          description={threadCloudExperienceData.description}
          images={threadCloudExperienceData.images}
          learnMoreUrl={threadCloudExperienceData.learnMoreUrl}
          technologies={threadCloudExperienceData.technologies}
        />
      </div>
    </section>
  );
};
