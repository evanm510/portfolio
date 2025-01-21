import { Spinner } from "flowbite-react";
import { Box } from "@radix-ui/themes";

type sizes = "xs" | "sm" | "md" | "lg" | "xl";
export const Loading = ({
  padding = false,
  size = "md",
}: {
  padding?: boolean;
  size?: sizes;
}) => {
  return (
    <Box p={padding ? "4" : "0"}>
      <Spinner size={size} className="sk-loading" color="purple" />
    </Box>
  );
};
