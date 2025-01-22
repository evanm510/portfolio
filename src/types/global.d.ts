type AssetType = "pdf" | "image" | "video";

export type Asset = {
  name: string;
  type: AssetType;
  hostPath: string;
};

type Technology = {
  imageSrc: string;
  text: string;
};

type Contribution = {
  name: string;
  description: string;
};

type Image = {
  imageSrc: string;
  alt: string;
};

export type ExperienceData = {
  title: string;
  dateRange: string;
  position: string;
  description: string;
  contributions: Contribution[];
  learnMoreUrl: string;
  technologies: Technology[];
  images: Image[];
};
