import React, { useState } from "react";
import AssetViewerHeader from "./AssetViewerHeader";
import { Flex } from "@radix-ui/themes";
import { Loading } from "../loading";
import { Asset } from "@/types/global";

type VideoViewerProps = {
  asset: Asset;
  isFullScreen: boolean;
  handleFullScreenClick: () => void;
  handleAssetDownload: () => void;
  closeAssetViewer: () => void;
};

export default ({
  asset,
  isFullScreen,
  handleFullScreenClick,
  handleAssetDownload,
  closeAssetViewer,
}: VideoViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <AssetViewerHeader
        isFullScreen={isFullScreen}
        handleFullScreenClick={handleFullScreenClick}
        handleAssetDownload={handleAssetDownload}
        closeAssetViewer={closeAssetViewer}
      />
      {isLoading && (
        <div className="absolute top-[46%] left-[50%]">
          <Loading />
        </div>
      )}
      <div className="p-4">
        <Flex
          justify="center"
          align="center"
          className={isFullScreen ? "h-[86vh]" : "h-[80vh]"}
        >
          <video
            src={`${asset.hostPath}`}
            controls
            autoPlay
            className={
              (isFullScreen ? "max-h-[86vh]" : "max-h-[76vh]") +
              (isLoading ? " hidden" : "")
            }
            onLoadedMetadata={() => setIsLoading(false)}
          />
        </Flex>
      </div>
    </div>
  );
};
