import { create } from "zustand";
import { Asset } from "@/types/global";

type AssetViewerState = {
  asset: Asset | null;
  setAsset: (asset: Asset | null) => void;
  fileType: string;
  setFileType: (fileType: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isFullScreen: boolean;
  setIsFullScreen: (isFullScreen: boolean) => void;
};

export default create<AssetViewerState>((set) => ({
  asset: null,
  setAsset: (asset) => {
    set({ asset });
  },
  fileType: "",
  setFileType: (fileType) => {
    console.log("file type: ", fileType);
    set({ fileType });
  },
  isOpen: false,
  setIsOpen: (isOpen) => {
    console.log("is Open: ", isOpen);
    set({ isOpen });
  },
  isFullScreen: false,
  setIsFullScreen: (isFullScreen) => {
    set({ isFullScreen });
  },
}));
