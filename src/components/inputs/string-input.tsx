import { Input } from "@chakra-ui/react";
import { StringConversionMethods } from "src/types";

const StringInput = ({
  value,
  selectedTool,
  setInputValue,
  onChange,
}: {
  value: StringConversionMethods;
  selectedTool: StringConversionMethods;
  setInputValue: (value: StringConversionMethods) => void;
  onChange: (value: StringConversionMethods, methodName: string) => void;
}) => {
  return (
    <Input
      type="text"
      value={value}
      placeholder="Enter a value"
      onChange={(e) => {
        const inputValue = e.target.value as StringConversionMethods;
        setInputValue(inputValue);
        onChange(inputValue, selectedTool);
      }}
    />
  );
};

export default StringInput;
