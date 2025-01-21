import Image from "next/image";
import { Button } from "@/components/Button";
import { TechLogoList } from "./TechLogos";
import { ImageSlider } from "./ImageSlider";

type ExperienceSectionProps = {
  title: string;
  dateRange: string;
  position: string;
  description: string[];
  learnMoreUrl: string;
  technologies: { imageSrc: string; text: string }[];
  images: { imageSrc: string; alt: string }[];
};

export default ({
  title,
  dateRange,
  position,
  description,
  learnMoreUrl,
  technologies,
  images,
}: ExperienceSectionProps) => {
  return (
    <div className="w-[90%] bg-secondary p-6 rounded-lg">
      <div className="w-100 flex flex-row justify-between mb-4">
        <div className="text-2xl">{title}</div>
        <div className="italic">{dateRange}</div>
      </div>
      <div className="flex flex-row gap-6">
        <div>
          <div className="italic mb-2">{position}</div>
          <ul className="list-disc pl-5">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <ImageSlider images={images} />
      </div>
      <div className="pt-4 flex flex-row justify-between items center">
        <div className="my-auto">
          <Button
            onClick={() => {
              window.open(learnMoreUrl);
            }}
          >
            Learn More
          </Button>
        </div>
        <TechLogoList logos={technologies} size={40} />
      </div>
    </div>
  );
};
