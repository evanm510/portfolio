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
        <div style={{ width: `${size}px`, height: `${size}px` }}>
          <Image
            src={imageSrc}
            alt={`${text} Icon`}
            width={size}
            height={size}
            style={{ width: `${size}px`, height: `${size}px` }}
            className="hover:scale-110 transition-transform duration-400"
          />
        </div>
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
    <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-between gap-6">
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
