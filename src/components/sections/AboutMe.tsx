import TechnicalSkills from "../TechnicalSkills";

export default () => {
  return (
    <section id="about" className="scroll-mt-20 mb-20">
      <div className="flex flex-col gap-6 items-center">
        <div className="text-3xl mx-auto">About Me</div>
        <div className="w-[90%]">
          <div className="flex gap-4">
            <BioSummary />
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
  "I thrive on solving complex problems and am always eager to learn and adapt to new challenges. Whether it's collaborating with teams, designing scalable solutions, or diving deep into code, I bring a strong focus on quality and efficiency. My goal is to create impactful software that not only meets business needs but also makes users' lives easier.",
];

const BioSummary = () => {
  return (
    <div className="bg-secondary py-4 px-6 rounded-lg">
      <div className="flex items-center">
        <div className="mx-auto text-xl">Summary</div>
      </div>
      <div className="flex flex-col items-center gap-2 ">
        {bioText.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
