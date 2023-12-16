import { Button } from "@chakra-ui/react";
import { StringConversionMethods } from "src/types";

export const ResetButton = ({
  setInputValue,
  setInputResult,
  selectRef,
  textAreaRef,
}: {
  setInputValue: (value: string) => void;
  setInputResult: (value: string) => void;
  selectRef: React.MutableRefObject<HTMLSelectElement | null>;
  textAreaRef: React.MutableRefObject<HTMLTextAreaElement | null>;
}) => {
  return (
    <Button
      size="xs"
      onClick={() => {
        setInputValue("");
        setInputResult("");
        selectRef.current!.value = StringConversionMethods.EMPTY_STRING;
        textAreaRef.current!.value = "";
      }}
      color={"red.400"}
      w="5rem"
      mr={2}
    >
      Reset
    </Button>
  );
};
