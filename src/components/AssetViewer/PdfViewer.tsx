"use client";

import React, { useState, useEffect } from "react";
import { Loading } from "../Loading_temp";
import AssetViewerHeader, { ZoomControl } from "./AssetViewerHeader";
import { Asset } from "@/types/global";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { Flex } from "@radix-ui/themes";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type PdfViewerHeaderProps = {
  isFullScreen: boolean;
  assetName: string;
  handleZoomInClick: () => void;
  handleZoomOutClick: () => void;
  handleAssetDownload: () => void;
  handleFullScreenClick: () => void;
  closeAssetViewer: () => void;
};

const PdfViewerHeader = ({
  isFullScreen,
  assetName,
  handleZoomInClick,
  handleZoomOutClick,
  handleAssetDownload,
  handleFullScreenClick,
  closeAssetViewer,
}: PdfViewerHeaderProps) => {
  return (
    <AssetViewerHeader
      isFullScreen={isFullScreen}
      assetName={assetName}
      closeAssetViewer={closeAssetViewer}
      handleAssetDownload={handleAssetDownload}
      handleFullScreenClick={handleFullScreenClick}
    >
      <Flex gap="4" align="center">
        <ZoomControl
          onZoomInClick={handleZoomInClick}
          onZoomOutClick={handleZoomOutClick}
        />
      </Flex>
    </AssetViewerHeader>
  );
};

type PdfViewerProps = {
  asset: Asset;
  isFullScreen: boolean;
  handleAssetDownload: () => void;
  handleFullScreenClick: () => void;
  closeAssetViewer: () => void;
};

export default ({
  asset,
  isFullScreen,
  handleAssetDownload,
  handleFullScreenClick,
  closeAssetViewer,
}: PdfViewerProps) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageWidth, setPageWidth] = useState<number>(
    Math.min(window.innerWidth * 0.6, 1000)
  );

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  const handleZoomInClick = () => {
    setPageWidth(pageWidth * 1.15);
  };

  const handleZoomOutClick = () => {
    setPageWidth(pageWidth / 1.15);
  };

  return (
    <div>
      <PdfViewerHeader
        isFullScreen={isFullScreen}
        assetName={asset.name}
        handleZoomInClick={handleZoomInClick}
        handleZoomOutClick={handleZoomOutClick}
        handleFullScreenClick={handleFullScreenClick}
        handleAssetDownload={handleAssetDownload}
        closeAssetViewer={closeAssetViewer}
      />
      <Document
        file={asset.hostPath}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="absolute top-[46%] left-[50%]">
            <Loading />
          </div>
        }
      >
        <div className="p-4">
          <div
            className={`flex flex-col items-center overflow-scroll ${
              isFullScreen ? "max-h-[88vh]" : "max-h-[82vh]"
            }`}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div className="my-2" key={index}>
                <Page
                  pageNumber={index + 1}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  width={pageWidth}
                  loading={""}
                />
              </div>
            ))}
          </div>
        </div>
      </Document>
    </div>
  );
};
