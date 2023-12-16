import { Flex, Container } from "@chakra-ui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useWindowSize } from "usehooks-ts";

import { ConversionTools, StringConversionMethods } from "src/types";
import StringInput from "src/components/inputs/string-input";
import ConversionSelector from "src/components/inputs/conversion-selector";
import ConvertedResults from "src/components/textarea/converted-results";

const Converter = ({
  tools,
  value,
  result,
  selectedTool,
  setInputValue,
  setInputResult,
  onChange,
}: {
  value: StringConversionMethods;
  result: string;
  tools: ConversionTools[];
  selectedTool: StringConversionMethods;
  setInputValue: (value: StringConversionMethods) => void;
  setInputResult: (value: string) => void;
  onChange: (value: StringConversionMethods, methodName: string) => void;
}) => {
  // HOOKS
  const { width } = useWindowSize();
  const selectRef = useRef<HTMLSelectElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textArea = textAreaRef.current;
    const isValid =
      value && selectedTool != StringConversionMethods.NONE && result;

    if (isValid && textArea) {
      textArea.style.height = "0px";

      const scrollHeight = textArea.scrollHeight;
      textArea.style.height = scrollHeight + "px";
    }
  }, [textAreaRef.current, result, width, value, selectedTool]);

  // STATE
  const [returnType, setReturnType] = useState("");

  // CONSTANTS
  const isMobileWidth = width < 450;

  return (
    <Fragment>
      <Container maxW="container.xl" mt={10}>
        <Flex my={10} gap={5} direction={isMobileWidth ? "column" : "row"}>
          <StringInput
            value={value}
            selectedTool={selectedTool}
            setInputValue={setInputValue}
            onChange={onChange}
          />

          {/* Conversion Tool Selection */}
          <ConversionSelector
            selectRef={selectRef}
            value={value}
            isMobileWidth={isMobileWidth}
            tools={tools}
            onChange={onChange}
            setReturnType={setReturnType}
          />
        </Flex>

        {/* Result Textarea */}
        {selectedTool != StringConversionMethods.NONE &&
          value != StringConversionMethods.EMPTY_STRING && (
            <ConvertedResults
              returnType={returnType}
              result={result}
              isMobileWidth={isMobileWidth}
              selectRef={selectRef}
              textAreaRef={textAreaRef}
              setInputValue={setInputValue}
              setInputResult={setInputResult}
            />
          )}
      </Container>
    </Fragment>
  );
};

export default Converter;
