import TechnicalSkills from "../TechnicalSkills";
import { useAssetViewer } from "../AssetViewer/AssetViewer";

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-20 mb-20">
      <div className="flex flex-col gap-4 items-center">
        <div className="text-heading text-3xl mx-auto">About Me</div>
        <div className="w-[90%] max-w-[1400px]">
          <div className="flex flex-col md:flex-row gap-4">
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
}

const BioSummary = () => {
  return (
    <div className="bg-card shadow py-4 px-6 rounded-lg flex-1">
      <div className="flex items-center mb-2">
        <div className="text-heading mx-auto text-xl">Summary</div>
      </div>
      <div className="mb-4">
        I&apos;m a full-stack software engineer with expertise in building
        scalable front-end architectures, API integrations, and backend services
        using modern frameworks such as React.js, Next.js, and Ruby on Rails.
        Committed to delivering high-quality, performant applications through
        clean, maintainable code and innovative problem-solving.
      </div>
      <div>
        With a diverse background that includes earning a PhD in Earth Science
        from UCSB, I bring a unique perspective to problem-solving. My ability
        to analyze complex systems and think critically has been instrumental in
        delivering innovative software solutions. I thrive on tackling complex
        challenges and turning them into elegant, impactful solutions.
      </div>
    </div>
  );
};

const Education = () => {
  const { openAssetViewer } = useAssetViewer();

  const educationContainerClass =
    "shadow-lg cursor-pointer mb-6 bg-mediumGray py-2 px-4 rounded-md hover:scale-105 transition transition-translation duration-400";

  return (
    <div className="bg-card shadow py-4 px-6 rounded-lg flex-1">
      <div className="flex items-center mb-2">
        <div className="font-heading text-heading mx-auto text-xl">
          Education
        </div>
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
            hostPath: "/ucsb_degree.jpg",
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
