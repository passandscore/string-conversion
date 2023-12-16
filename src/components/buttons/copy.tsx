import { Button, useToast } from "@chakra-ui/react";
import { ConversionTools } from "src/types";

export const CopyButton = ({ tool }: { tool: ConversionTools }) => {
  const toast = useToast();

  const copied = () => {
    toast({
      title: "Copied",
      status: "success",
      isClosable: true,
      position: "bottom",
    });
  };

  return (
    <Button
      size="xs"
      onClick={() => {
        navigator.clipboard.writeText(tool.result);
        copied();
      }}
      color={"green.400"}
      w="5rem"
      mr={2}
    >
      Copy
    </Button>
  );
};
