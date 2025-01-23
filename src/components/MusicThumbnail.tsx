import Image from "next/image";
import { useAssetViewer } from "./AssetViewer/AssetViewer";

export default function MusicThumbnail({
  title,
  imgSrc,
  videoSrc,
}: {
  title: string;
  imgSrc: string;
  videoSrc: string;
}) {
  const { openAssetViewer } = useAssetViewer();

  return (
    <div
      onClick={() => {
        openAssetViewer({
          name: title,
          type: "video",
          hostPath: videoSrc,
        });
      }}
    >
      <Image src={imgSrc} alt={title} width={300} height={200} />
    </div>
  );
}
