import ExperienceSection from "../ExperienceSection";
import {
  sendKitsExperienceData,
  threadCloudExperienceData,
} from "@/data/experienceData";

export default () => {
  return (
    <section id="experience" className="scroll-mt-20  mb-20">
      <div className="flex flex-col gap-4 items-center">
        <div className="text-3xl mx-auto">Experience</div>
        <ExperienceSection experienceData={sendKitsExperienceData} />
        <ExperienceSection experienceData={threadCloudExperienceData} />
      </div>
    </section>
  );
};
