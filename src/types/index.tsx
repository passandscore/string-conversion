export type ConversionTools = {
  title: string;
  methodName: string;
  returnType: string;
};

export enum StringConversionMethods {
  EMPTY_STRING = "",
  NONE = "Select option",
  ENCODE_BYTES32_STRING = "encodeBytes32String",
  TO_UTF8_BYTES = "toUtf8Bytes",
  CHAR_COUNT = "charCount",
}
