"use client";

import React, { useEffect, useCallback, memo } from "react";
import { Asset } from "@/types/global";
import ImageViewer from "./ImageViewer";
import PdfViewer from "./PdfViewer";
import "./asset-viewer.css";
import useAssetViewerState from "./useAssetViewerState";

export function useAssetViewer() {
  const { asset, setIsOpen, setIsFullScreen, setAsset, setFileType } =
    useAssetViewerState((state) => state);

  const openAssetViewer = useCallback(
    (asset: Asset) => {
      setAsset(asset);
      setFileType(asset.type);
      setIsOpen(true);
    },
    [setAsset, setFileType, setIsOpen]
  );

  const closeAssetViewer = useCallback(() => {
    setAsset(null);
    setIsOpen(false);
    setIsFullScreen(false);
  }, [asset, setAsset, setIsOpen, setIsFullScreen]);

  return {
    openAssetViewer,
    closeAssetViewer,
  };
}

export default memo(() => {
  const { closeAssetViewer } = useAssetViewer();
  const { isOpen, isFullScreen, setIsFullScreen, asset, fileType } =
    useAssetViewerState((state) => state);

  const handleAssetDownload = () => {
    const contentURL = asset?.hostPath;
    if (contentURL) {
      const urlWithHttp = contentURL.startsWith("http")
        ? contentURL
        : `https://${contentURL}`;

      window.open(urlWithHttp, "_blank");
    }
  };

  const handleFullScreenClick = () => {
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAssetViewer();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeAssetViewer]);

  const Content = () => {
    if (!asset) return null;

    switch (fileType) {
      case "pdf":
        return (
          <PdfViewer
            asset={asset}
            isFullScreen={isFullScreen}
            handleFullScreenClick={handleFullScreenClick}
            handleAssetDownload={handleAssetDownload}
            closeAssetViewer={closeAssetViewer}
          />
        );
      case "image":
        return (
          <ImageViewer
            asset={asset}
            isFullScreen={isFullScreen}
            handleFullScreenClick={handleFullScreenClick}
            handleAssetDownload={handleAssetDownload}
            closeAssetViewer={closeAssetViewer}
          />
        );
    }
  };

  const isOpenClassName = isOpen ? "show" : "";
  const contentClassName = isFullScreen
    ? `asset-viewer-content-full ${isOpenClassName}`
    : `asset-viewer-content ${isOpenClassName}`;
  const modalWindowClassName = isFullScreen
    ? `frosty-dark w-[100vw] h-[100vh] ${isOpenClassName}`
    : `frosty-dark border rounded-[1rem] shadow-lg w-[94vw] h-[94vh] ${isOpenClassName}`;

  return (
    <>
      {isOpen && (
        <>
          <div onClick={closeAssetViewer} className="asset-viewer-container">
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={contentClassName}
            >
              <div id="modal-window" className={modalWindowClassName}>
                <Content />
              </div>
            </div>
          </div>
          <div onClick={closeAssetViewer} />
        </>
      )}
    </>
  );
});
