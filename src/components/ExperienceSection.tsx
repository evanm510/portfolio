import Image from "next/image";
import { Button } from "@/components/Button";

type ExperienceSectionProps = {
  title: string;
  dateRange: string;
  position: string;
  description: string[];
  imageSrc: string;
  learnMoreUrl: string;
};

export default ({
  title,
  dateRange,
  position,
  description,
  imageSrc,
  learnMoreUrl,
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
        <Image
          src={imageSrc}
          alt={`${title} Screenshot`}
          height={10}
          width={400}
          layout="intrinsic"
        />
      </div>
      <div className="pt-4">
        <Button
          onClick={() => {
            window.open(learnMoreUrl);
          }}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};
