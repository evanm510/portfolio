import ExperienceSection from "../ExperienceSection_temp";

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
  imageSrc: "/SendKitsImage.png",
  learnMoreUrl: "https://www.sendkits.io/",
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
  imageSrc: "/SendKitsImage.png",
  learnMoreUrl: "https://app.threadcloud.net/",
};

export default () => {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="flex flex-col gap-6 items-center">
        <div className="text-3xl mx-auto">Professional Experience</div>
        <ExperienceSection
          title={sendKitsExperienceData.title}
          dateRange={sendKitsExperienceData.dateRange}
          position={sendKitsExperienceData.position}
          description={sendKitsExperienceData.description}
          imageSrc={sendKitsExperienceData.imageSrc}
          learnMoreUrl={sendKitsExperienceData.learnMoreUrl}
        />
        <ExperienceSection
          title={threadCloudExperienceData.title}
          dateRange={threadCloudExperienceData.dateRange}
          position={threadCloudExperienceData.position}
          description={threadCloudExperienceData.description}
          imageSrc={threadCloudExperienceData.imageSrc}
          learnMoreUrl={threadCloudExperienceData.learnMoreUrl}
        />
      </div>
    </section>
  );
};
