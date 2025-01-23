import Image from "next/image";
import { Button } from "./Button";
import { useAssetViewer } from "./AssetViewer/AssetViewer";

export default () => {
  const { openAssetViewer } = useAssetViewer();
  return (
    <div className="w-[90%] bg-secondary p-6 rounded-lg">
      <div className="flex justify-center mb-4">
        <div className="text-2xl">Geology</div>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-6 flex-1">
          <div>
            Before transitioning to software engineering, I earned a PhD in
            Geology from UC Santa Barbara. My research focused on the magmatic
            and structural evolution of the Deep Creek Range and Kern Mountains
            in eastern Nevada, and included over six months of fieldwork,
            combined with extensive petrographic analysis, geochemical modeling,
            and U-Pb geochronology.
          </div>
          <div>
            My experiences in graduate school prepared me to tackle complex
            problems and manage multiple responsibilities with independence and
            efficiency. Conducting research required meticulous planning, time
            management, and the ability to adapt to unexpected challenges in the
            field and laboratory. In addition to my research, I served as a
            teaching assistant for over 25 courses, including five intensive,
            six-week summer field classes where students and instructors camped
            together. These experiences sharpened my ability to collaborate,
            communicate, and lead in dynamic environments, skills that have been
            invaluable in my transition to software engineering.
          </div>
        </div>
        <div className="flex-2">
          <Image src="/geology_image.jpg" alt="" width={700} height={400} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-6 gap-2">
        <div className="font-bold">Check out my Dissertation:</div>
        <div className="flex flex-row gap-6">
          <Button
            onClick={() => {
              openAssetViewer({
                name: "Dissertation - Abstract",
                type: "pdf",
                hostPath: "dissertation/abstract.pdf",
              });
            }}
          >
            Abstract
          </Button>
          <Button
            onClick={() => {
              openAssetViewer({
                name: "Dissertation - Chapter 1",
                type: "pdf",
                hostPath: "dissertation/chapter_1.pdf",
              });
            }}
          >
            Chapter 1
          </Button>
          <Button
            onClick={() => {
              openAssetViewer({
                name: "Dissertation - Chapter 2",
                type: "pdf",
                hostPath: "dissertation/chapter_2.pdf",
              });
            }}
          >
            Chapter 2
          </Button>
          <Button
            onClick={() => {
              openAssetViewer({
                name: "Dissertation - Chapter 3",
                type: "pdf",
                hostPath: "dissertation/chapter_3.pdf",
              });
            }}
          >
            Chapter 3
          </Button>
        </div>
      </div>
    </div>
  );
};
