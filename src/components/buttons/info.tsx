import { Button } from "@chakra-ui/react";
import { ConversionTools } from "src/types";

export const InfoButton = ({
  tool,
  handleInfoClick,
}: {
  tool: ConversionTools;
  handleInfoClick: (info: {
    title: string;
    description: string;
    types: string;
    codeblock: string;
  }) => void;
}) => {
  return (
    <Button
      size="xs"
      ml={2}
      onClick={() => handleInfoClick(tool.info)}
      colorScheme="blue"
      w="5rem"
    >
      Info
    </Button>
  );
};
