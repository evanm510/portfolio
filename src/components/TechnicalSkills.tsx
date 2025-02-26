import { TechLogoList } from "./TechLogos";

const languages = [
  { imageSrc: "/tech-logos/javascript.svg", text: "JavaScript" },
  { imageSrc: "/tech-logos/typescript.svg", text: "TypeScript" },
  { imageSrc: "/tech-logos/python.svg", text: "Python" },
  { imageSrc: "/tech-logos/ruby.svg", text: "Ruby" },
  { imageSrc: "/tech-logos/sql.svg", text: "SQL" },
];

const frontend = [
  { imageSrc: "/tech-logos/react.svg", text: "React.js" },
  { imageSrc: "/tech-logos/next.js.svg", text: "Next.js" },
  { imageSrc: "/tech-logos/html.svg", text: "HTML.js" },
  { imageSrc: "/tech-logos/css.svg", text: "CSS" },
  { imageSrc: "/tech-logos/tailwind.svg", text: "Tailwind" },
];

const backend = [
  { imageSrc: "/tech-logos/rubyonrails.svg", text: "Ruby on Rails" },
  { imageSrc: "/tech-logos/node.js.svg", text: "Node.js" },
  { imageSrc: "/tech-logos/next.js.svg", text: "Next.js" },
  { imageSrc: "/tech-logos/mysql.svg", text: "MySQL" },
  { imageSrc: "/tech-logos/prisma.svg", text: "Prisma ORM" },
];

const tools = [
  { imageSrc: "/tech-logos/vscode.svg", text: "VS Code" },
  { imageSrc: "/tech-logos/git.svg", text: "Git" },
  { imageSrc: "/tech-logos/github.svg", text: "GitHub" },
  { imageSrc: "/tech-logos/awswhite.svg", text: "AWS" },
  { imageSrc: "/tech-logos/beekeeper.svg", text: "BeeKeeper Studio" },
];

export default function TechnicalSkills() {
  return (
    <div className="bg-card shadow py-4 px-6 rounded-lg w-full">
      <div className="flex items-center">
        <div className="text-heading mx-auto text-xl">Technical Skills</div>
      </div>
      <div className="mb-8">
        <div className="pb-2">Languages</div>
        <TechLogoList logos={languages} size={60} />
      </div>
      <div className="mb-8">
        <div className="pb-2">Front-end Technologies</div>
        <TechLogoList logos={frontend} size={60} />
      </div>
      <div className="mb-8">
        <div className="pb-2">Backend and Databases</div>
        <TechLogoList logos={backend} size={60} />
      </div>
      <div className="">
        <div className="pb-2">Tools and Platforms</div>
        <TechLogoList logos={tools} size={60} />
      </div>
    </div>
  );
}
