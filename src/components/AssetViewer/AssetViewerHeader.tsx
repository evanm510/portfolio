"use client";

import React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ZoomInIcon,
  ZoomOutIcon,
  DownloadIcon,
  EnterFullScreenIcon,
  ExitFullScreenIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { IconButton, Flex, Heading } from "@radix-ui/themes";

const buttonColor = "#282828";

type ZoomControlProps = {
  onZoomInClick?: () => void;
  onZoomOutClick?: () => void;
};

export const ZoomControl = ({
  onZoomInClick,
  onZoomOutClick,
}: ZoomControlProps) => {
  return (
    <div className="flex flex-row gap-4">
      <IconButton variant="ghost" onClick={onZoomInClick} size="3">
        <ZoomInIcon color={buttonColor} className="w-5 h-5" />
      </IconButton>
      <IconButton variant="ghost" onClick={onZoomOutClick} size="3">
        <ZoomOutIcon color={buttonColor} className="w-5 h-5" />
      </IconButton>
    </div>
  );
};

type FullScreenButtonProps = {
  isFullScreen: boolean;
  handleClick: () => void;
};

export const FullScreenButton = ({
  isFullScreen,
  handleClick,
}: FullScreenButtonProps) => {
  return (
    <IconButton variant="ghost" onClick={handleClick} size="3">
      {isFullScreen ? (
        <ExitFullScreenIcon color={buttonColor} className="w-5 h-5" />
      ) : (
        <EnterFullScreenIcon color={buttonColor} className="w-5 h-5" />
      )}
    </IconButton>
  );
};

type DownloadButtonProps = {
  handleClick: () => void;
};

export const DownloadButton = ({ handleClick }: DownloadButtonProps) => {
  return (
    <IconButton variant="ghost" onClick={handleClick} size="3">
      <DownloadIcon color={buttonColor} className="w-5 h-5" />
    </IconButton>
  );
};

type CloseButtonProps = {
  handleClick: () => void;
};

export const CloseButton = ({ handleClick }: CloseButtonProps) => {
  return (
    <IconButton variant="ghost" onClick={handleClick} size="3">
      <Cross1Icon color={buttonColor} className="w-5 h-5" />
    </IconButton>
  );
};

type AssetViewHeaderProps = {
  children?: React.ReactNode;
  isFullScreen: boolean;
  assetName: string;
  handleFullScreenClick: () => void;
  handleAssetDownload: () => void;
  closeAssetViewer: () => void;
};

export default ({
  children,
  isFullScreen,
  assetName,
  handleFullScreenClick,
  handleAssetDownload,
  closeAssetViewer,
}: AssetViewHeaderProps) => {
  const headingMaxWidthClass = children ? "max-w-[140px]" : "max-w-[200px]";

  return (
    <div
      className={`flex flex-row justify-between w-100 bg-gray-85 px-5 py-3 ${
        isFullScreen ? "" : "rounded-tl-[1rem] rounded-tr-[1rem]"
      }`}
    >
      <div className="mr-4">
        <Heading
          size="4"
          className={`truncate ${headingMaxWidthClass} md:max-w-full`}
        >
          {assetName}
        </Heading>
      </div>
      <div className="flex flex-row gap-4">
        {children}
        <FullScreenButton
          handleClick={handleFullScreenClick}
          isFullScreen={isFullScreen}
        />
        <DownloadButton handleClick={handleAssetDownload} />
        <CloseButton handleClick={closeAssetViewer} />
      </div>
    </div>
  );
};
