import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import ButtonMenu from "../menu/button-menu";
import { ResetButton } from "../buttons/reset";
import { CopyButton } from "../buttons/copy";

const ConvertedResults = ({
  returnType,
  result,
  isMobileWidth,
  selectRef,
  textAreaRef,
  setInputValue,
  setInputResult,
}: {
  returnType: string;
  result: string;
  selectRef: React.MutableRefObject<HTMLSelectElement | null>;
  isMobileWidth: boolean;
  textAreaRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  setInputValue: (value: string) => void;
  setInputResult: (value: string) => void;
}) => {
  return (
    <Box>
      <FormControl>
        <FormHelperText>{`Type: ${returnType}`}</FormHelperText>
        <Textarea
          ref={textAreaRef}
          mt={2}
          value={result}
          isReadOnly
          p={30}
        ></Textarea>
      </FormControl>
      <Flex justify="flex-end" mt={3}>
        {isMobileWidth ? (
          <ButtonMenu
            setInputValue={setInputValue}
            setInputResult={setInputResult}
            selectRef={selectRef}
            textAreaRef={textAreaRef}
            result={result}
          />
        ) : (
          <Flex>
            {result && (
              <Flex>
                <ResetButton
                  setInputValue={setInputValue}
                  setInputResult={setInputResult}
                  selectRef={selectRef}
                  textAreaRef={textAreaRef}
                />
                <CopyButton result={result} />
              </Flex>
            )}
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default ConvertedResults;
