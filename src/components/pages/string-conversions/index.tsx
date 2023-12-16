import type { NextPage } from "next";
import React, { useState } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import BasicConverter from "../../accordians/basic-conversion";
import { ConversionTools } from "src/types";

const StringConverter: NextPage = () => {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *                               State                              *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  const [stringToBytesValue, setStringToBytesValue] = useState("");
  const [stringToBytesResult, setStringToBytesResult] = useState("");

  const [toUtf8BytesValue, setToUtf8BytesValue] = useState("");
  const [toUtf8BytesResult, setToUtf8BytesResult] = useState("");

  const [stringCounterValue, setStringCounterValue] = useState("");
  const [stringCounterResult, setStringCounterResult] = useState(0);

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *                               On Change                              *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  const onStringToBytesChange = (e: any) => {
    setStringToBytesValue(e.target.value);
    const bytes = ethers.utils.formatBytes32String(e.target.value);
    setStringToBytesResult(bytes);
  };

  const onToUtf8BytesChange = (e: any) => {
    setToUtf8BytesValue(e.target.value);
  };

  const onStringCounterChange = (e: any) => {
    setStringCounterValue(e.target.value);
    setStringCounterResult(e.target.value.length);
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *                               On Submit                              *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  const onToUtf8BytesSubmit = (e: any) => {
    if (toUtf8BytesValue.length === 0) {
      notification("Please enter a value to convert", "info");
      return;
    }
    const bytes = ethers.utils.toUtf8Bytes(toUtf8BytesValue);
    const bytesArray = ethers.utils.arrayify(bytes).join(", ");
    setToUtf8BytesResult(bytesArray);
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *                               Helpers                              *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  const handleCopy = (value: any) => {
    copy(value);
    notification("Copied to clipboard", "info");
  };

  const notification = (message: string, type: string) => {
    toast[type](message, {
      theme: "colored",
      position: "top-right",
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *                               Data                              *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  const heading = "String Converter";
  const tools = [
    {
      title: "Formats a string as a Bytes32 hexdataString",
      value: stringToBytesValue,
      setValue: setStringToBytesValue,
      onChange: onStringToBytesChange,
      onSubmit: () => null,
      result: stringToBytesResult,
      setResult: setStringToBytesResult,
      submit: false,
      placeholder: "Enter a value",
      source:
        "https://github.com/passandscore/blockstar-studios/blob/main/dapp/pages/string-converter.tsx#L25",
      info: {
        title: `String to Bytes32`,
        description: `
        Returns a hex string representation of text, exactly 32 bytes wide. Strings must be 31 bytes or shorter, or an exception is thrown.${"\n"}
        NOTE: Keep in mind that UTF-8 characters outside the ASCII range can be multiple bytes long.`,
        types:
          "utils . toUtf8String ( hexStringOrArrayish , [ ignoreErrors = false )   =>   string",
        codeblock: `
        let text = "Hello World!"

        let bytes32 = ethers.utils.formatBytes32String(text)
        // "0x48656c6c6f20576f726c64210000000000000000000000000000000000000000"
        
        let originalText = ethers.utils.parseBytes32String(bytes32)
        // "Hello World!",`,
      },
    },

    {
      title: "Converts a string to its UTF-8 bytes.",
      value: toUtf8BytesValue,
      setValue: setToUtf8BytesValue,
      onChange: onToUtf8BytesChange,
      onSubmit: onToUtf8BytesSubmit,
      result: toUtf8BytesResult,
      setResult: setToUtf8BytesResult,
      submit: true,
      placeholder: "Enter a value",
      source:
        "https://github.com/passandscore/blockstar-studios/blob/main/dapp/pages/string-converter.tsx#L42",
      info: {
        title: "String to UTF-8 bytes",
        description:
          "Converts a hex-encoded string or array to its UTF-8 representation.",
        types: "string",
        codeblock: `
        let text = "Hello World";

        let bytes = utils.toUtf8Bytes(text);
        
        console.log(bytes);
        // Uint8Array [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
        `,
      },
    },
    {
      title: "Character Counter",
      value: stringCounterValue,
      setValue: setStringCounterValue,
      onChange: onStringCounterChange,
      onSubmit: () => null,
      result: stringCounterResult,
      setResult: setStringCounterResult,
      submit: false,
      placeholder: "Enter a value",
      source:
        "https://github.com/passandscore/blockstar-studios/blob/main/dapp/pages/string-converter.tsx#L38",
    },
  ] as ConversionTools[];

  return (
    <BasicConverter heading={heading} tools={tools} handleCopy={handleCopy} />
  );
};

export default StringConverter;
