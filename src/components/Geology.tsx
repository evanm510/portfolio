import Image from "next/image";
import { Button } from "./Button";
import { useAssetViewer } from "./AssetViewer/AssetViewer";

export default () => {
  const { openAssetViewer } = useAssetViewer();
  return (
    <div className="w-[90%] bg-secondary shadow p-6 rounded-lg">
      <div className="flex justify-center mb-4">
        <div className="text-2xl">Geology</div>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-6 flex-1">
          <div>
            Before transitioning to software engineering, I earned a PhD in
            Geology from UC Santa Barbara. My research focused on the magmatic
            and structural evolution of the Deep Creek Range and Kern Mountains
            in eastern Nevada. This work included over six months of fieldwork,
            combined with extensive petrographic analysis, geochemical modeling,
            and U-Pb geochronology. The findings led to a significant
            reinterpretation of the region’s Late Cretaceous geologic history
            and uncovered one of the largest magmatically induced folds ever
            identified.
          </div>
        </div>
        <div className="flex-2">
          <Image src="/geology_image.jpg" alt="" width={600} height={400} />
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
