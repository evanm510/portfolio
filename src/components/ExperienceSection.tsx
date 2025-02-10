import Image from "next/image";
import { Button } from "@/components/Button";
import { TechLogoList } from "./TechLogos";
import { ImageSlider } from "./ImageSlider";
import { ExperienceData } from "@/types/global";

type ExperienceSectionProps = {
  experienceData: ExperienceData;
};

export default function ExperienceSection({
  experienceData,
}: ExperienceSectionProps) {
  return (
    <div className="w-[90%] w-[90%] max-w-[1400px] bg-card shadow p-6 rounded-lg">
      <div className="text-heading w-100 flex flex-col md:flex-row justify-between mb-4">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className="text-2xl">{experienceData.title}</div>
          <div className="hidden md:block">-</div>
          <div className="italic text-2xl">{experienceData.position}</div>
        </div>
        <div className="italic">{experienceData.dateRange}</div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div>
          <div className="italic mb-2">{experienceData.description}</div>
          <div className="text-heading font-bold italic">
            Notable Contributions:
          </div>
          <ul className="list-disc pl-5">
            {experienceData.contributions.map((item, index) => (
              <li key={index}>
                <strong className="text-heading">{item.name}: </strong>
                {item.description}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-[600px] max-h-[400px] overflow-hidden">
          <ImageSlider images={experienceData.images} />
        </div>
      </div>
      <div className="pt-4 flex flex-row justify-between items center">
        <div className="my-auto">
          <Button
            onClick={() => {
              window.open(experienceData.learnMoreUrl);
            }}
          >
            Learn More
          </Button>
        </div>
        <div className="ml-auto">
          <TechLogoList logos={experienceData.technologies} size={40} />
        </div>
      </div>
    </div>
  );
}
