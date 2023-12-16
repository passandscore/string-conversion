import { Button } from "@chakra-ui/react";
import { ConversionTools } from "src/types";

export const SourceButton = ({ tool }: { tool: ConversionTools }) => {
  return (
    <Button
      size="xs"
      w="5rem"
      onClick={() => window.open(tool.source, "_blank")}
    >
      Source
    </Button>
  );
};
