import React, { useState } from "react";
import AssetViewerHeader, { ZoomControl } from "./AssetViewerHeader";
import { Asset } from "@/types/global";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { Loading } from "../Loading";

type ImageViewerHeaderProps = {
  asset: { name: string; type: string; hostPath: string };
  isFullScreen: boolean;
  handleFullScreenClick: () => void;
  handleAssetDownload: () => void;
  closeAssetViewer: () => void;
};

const ImageViewerHeader = ({
  asset,
  isFullScreen,
  handleFullScreenClick,
  handleAssetDownload,
  closeAssetViewer,
}: ImageViewerHeaderProps) => {
  const { zoomIn, resetTransform } = useControls();

  return (
    <AssetViewerHeader
      isFullScreen={isFullScreen}
      handleFullScreenClick={handleFullScreenClick}
      handleAssetDownload={handleAssetDownload}
      closeAssetViewer={closeAssetViewer}
      assetName={asset.name}
    >
      <ZoomControl
        onZoomInClick={() => {
          zoomIn();
        }}
        onZoomOutClick={() => {
          resetTransform();
        }}
      />
    </AssetViewerHeader>
  );
};

type ImageViewerProps = {
  asset: Asset;
  isFullScreen: boolean;
  handleFullScreenClick: () => void;
  handleAssetDownload: () => void;
  closeAssetViewer: () => void;
};

export default function ImageViewer({
  asset,
  isFullScreen,
  handleFullScreenClick,
  handleAssetDownload,
  closeAssetViewer,
}: ImageViewerProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <TransformWrapper initialPositionX={0} initialPositionY={0}>
        {({ zoomIn, zoomOut, ...rest }) => (
          <>
            <ImageViewerHeader
              asset={asset}
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
              <div
                className={`flex justify-center align-center ${
                  isFullScreen ? "h-[90vh]" : "h-[84vh]"
                }`}
              >
                <TransformComponent>
                  <img
                    src={asset.hostPath}
                    alt={asset.name}
                    className={
                      (isFullScreen ? "max-h-[84vh]" : "max-h-[78vh]") +
                      (isLoading ? " hidden" : "")
                    }
                    onLoad={() => setIsLoading(false)}
                  />
                </TransformComponent>
              </div>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
