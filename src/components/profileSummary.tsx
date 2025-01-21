import Image from "next/image";

import { Button } from "@/components/button";
import { IconButton } from "@/components/iconButton";
import { useAssetViewer } from "./AssetViewer/AssetViewer";
import { Loading } from "./loading";

export const ProfileSummary = () => {
  return (
    <div className="flex flex-row gap-12 items-center">
      <div className="flex flex-col gap-4">
        <div className="text-5xl">Evan Monroe</div>
        <div className="w-80">
          PhD geologist turned software engineer with a passion for full-stack
          web development and an analytical approach to problem-solving.
        </div>
        <Buttons />
      </div>
      <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
        <Image src="/headshot.jpeg" alt="Headshot" width={300} height={300} />
      </div>
    </div>
  );
};

const Buttons = () => {
  const { openAssetViewer } = useAssetViewer();

  return (
    <div className="flex flex-row gap-10">
      <Button
        onClick={() => {
          openAssetViewer({
            name: "Resume",
            type: "pdf",
            hostPath: "http://localhost:3000/resume.pdf",
          });
        }}
      >
        My Resume
      </Button>
      <div className="flex flex-row gap-4">
        <IconButton
          onClick={() => {
            window.open("https://www.linkedin.com/in/evan-monroe-53a842162/");
          }}
        >
          <Image
            src="icons/linkedInIcon.svg"
            alt="LinkedIn Icon"
            width={38}
            height={38}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("https://github.com/evanm510");
          }}
        >
          <Image
            src="icons/githubIconWhite.svg"
            alt="GitHub Icon"
            width={38}
            height={38}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("mailto:evanm510@gmail.com");
          }}
        >
          <Image
            src="icons/gmailIcon.svg"
            alt="Gmail Icon"
            width={38}
            height={38}
          />
        </IconButton>
      </div>
    </div>
  );
};
