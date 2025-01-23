import TechnicalSkills from "../TechnicalSkills";
import { useAssetViewer } from "../AssetViewer/AssetViewer";

export default () => {
  return (
    <section id="about" className="scroll-mt-20 mb-20">
      <div className="flex flex-col gap-4 items-center">
        <div className="text-3xl mx-auto">About Me</div>
        <div className="w-[90%] max-w-[1400px]">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <BioSummary />
              <Education />
            </div>
            <TechnicalSkills />
          </div>
        </div>
      </div>
    </section>
  );
};

const bioText = [
  "I'm a geologist turned software engineer with a passion for creating intuitive and efficient software solutions. After earning a PhD in Earth Science from UCSB, I transitioned to software development to pursue my interest in technology and problem-solving. This journey has shaped my analytical mindset and given me a unique perspective on tackling challenges in creative and effective ways.",
  "In my software engineering roles, I've gained hands-on experience with full-stack development using tools like React.js, Next.js, and Ruby on Rails. I've built custom UI components, developed APIs, and optimized backend services, focusing on delivering secure, user-friendly applications. My work includes implementing features like embedded content viewers, file proxying systems, and image cropping tools, all designed to enhance functionality and user experience.",
];

const BioSummary = () => {
  return (
    <div className="bg-secondary py-4 px-6 rounded-lg flex-1">
      <div className="flex items-center mb-2">
        <div className="mx-auto text-xl">Summary</div>
      </div>
      <div className="flex flex-col items-center gap-4 ">
        {bioText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

const Education = () => {
  const { openAssetViewer } = useAssetViewer();

  const educationContainerClass =
    "shadow-lg cursor-pointer mb-6 bg-mediumGray py-2 px-4 rounded-md hover:scale-105 transition transition-translation duration-400";

  return (
    <div className="bg-secondary py-4 px-6 rounded-lg flex-1">
      <div className="flex items-center mb-2">
        <div className="mx-auto text-xl">Education</div>
      </div>
      <div
        className={educationContainerClass}
        onClick={() => {
          openAssetViewer({
            name: "Oregon State Degree",
            type: "image",
            hostPath: "/oregon_state_degree.jpg",
          });
        }}
      >
        <div className="flex justify-between">
          <div className="font-bold">B.S., Computer Science</div>
          <div className="italic">Dec 2024</div>
        </div>
        <div>Oregon State University</div>
      </div>
      <div
        className={educationContainerClass}
        onClick={() => {
          openAssetViewer({
            name: "UC Santa Barbara Degree",
            type: "image",
            hostPath: "/oregon_state_degree.jpg",
          });
        }}
      >
        <div className="flex justify-between">
          <div className="font-bold">Ph.D. Earth Science</div>
          <div className="italic">June 2023</div>
        </div>
        <div>University of California, Santa Barbara</div>
      </div>
    </div>
  );
};
