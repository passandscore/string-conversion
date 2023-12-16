import type { NextPage } from "next";
import React, { useState } from "react";
import { ethers } from "ethers";
import Converter from "src/components/converter/basic-conversion";
import { ConversionTools, StringConversionMethods } from "src/types";

const StringConverter: NextPage = () => {
  const [inputValue, setInputValue] = useState(
    StringConversionMethods.EMPTY_STRING
  );
  const [inputResult, setInputResult] = useState("");
  const [selectedTool, setSelectedTool] = useState(
    StringConversionMethods.NONE
  );

  const onChange = (
    input: StringConversionMethods,
    methodName: StringConversionMethods
  ) => {
    console.log("input", input);
    console.log("methodName", methodName);
    if (
      input === StringConversionMethods.EMPTY_STRING ||
      methodName === StringConversionMethods.EMPTY_STRING ||
      methodName === StringConversionMethods.NONE
    )
      return;

    setInputValue(input);
    setSelectedTool(methodName);

    // handle converted results
    if (methodName === String(StringConversionMethods.CHAR_COUNT)) {
      setInputResult(String(input.length));
      return;
    }

    const convertedResult = ethers[methodName](input);
    setInputResult(convertedResult);
  };

  const tools = [
    {
      title: "Bytes32",
      methodName: StringConversionMethods.ENCODE_BYTES32_STRING,
      returnType: "Bytes32",
    },

    {
      title: "UTF-8",
      methodName: StringConversionMethods.TO_UTF8_BYTES,
      returnType: "Uint8Array",
    },
    {
      title: "Length",
      methodName: StringConversionMethods.CHAR_COUNT,
      returnType: "Number",
    },
  ] as ConversionTools[];

  return (
    <Converter
      tools={tools}
      value={inputValue}
      result={inputResult}
      selectedTool={selectedTool}
      setInputValue={setInputValue}
      setInputResult={setInputResult}
      onChange={onChange}
    />
  );
};

export default StringConverter;
