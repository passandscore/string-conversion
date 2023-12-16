import { Button } from "@chakra-ui/react";
import { ConversionTools } from "src/types";

export const ResetButton = ({ tool }: { tool: ConversionTools }) => {
  return (
    <Button
      size="xs"
      onClick={() => {
        tool.setValue("");
        tool.setResult("");
      }}
      color={"red.400"}
      w="5rem"
      mr={2}
    >
      Reset
    </Button>
  );
};
