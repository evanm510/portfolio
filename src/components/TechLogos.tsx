import Image from "next/image";
import Tooltip from "./Tooltip";

type TechLogoProps = {
  imageSrc: string;
  text: string;
  size: number;
};

export const TechLogo = ({ imageSrc, text, size }: TechLogoProps) => {
  return (
    <div>
      <Tooltip text={text}>
        <Image
          src={imageSrc}
          alt={`${text} Icon`}
          width={size}
          height={size}
          className="hover:scale-110 transition-transform duration-400"
        />
      </Tooltip>
    </div>
  );
};

export const TechLogoList = ({
  logos,
  size,
}: {
  logos: {
    imageSrc: string;
    text: string;
  }[];
  size: number;
}) => {
  return (
    <div className="flex flex-row gap-6 items-center">
      {logos.map((logo, index) => (
        <TechLogo
          key={index}
          imageSrc={logo.imageSrc}
          text={logo.text}
          size={size}
        />
      ))}
    </div>
  );
};
