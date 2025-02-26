import ExperienceSection from "../ExperienceSection";
import {
  sendKitsExperienceData,
  threadCloudExperienceData,
} from "@/data/experienceData";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20  mb-20">
      <div className="flex flex-col gap-4 items-center">
        <div className="text-heading font-heading text-3xl mx-auto">
          Experience
        </div>
        <ExperienceSection experienceData={sendKitsExperienceData} />
        <ExperienceSection experienceData={threadCloudExperienceData} />
      </div>
    </section>
  );
}
