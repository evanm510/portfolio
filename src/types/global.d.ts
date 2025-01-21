type AssetType = "pdf" | "image" | "video";

export type Asset = {
  name: string;
  type: AssetType;
  hostPath: string;
};
