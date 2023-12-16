import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { StringConversionMethods } from "src/types";

const ButtonMenu = ({
  setInputValue,
  setInputResult,
  selectRef,
  textAreaRef,
  result,
}: {
  setInputValue: (value: string) => void;
  setInputResult: (value: string) => void;
  selectRef: React.MutableRefObject<HTMLSelectElement | null>;
  textAreaRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  result: string;
}) => {
  const toast = useToast();

  const copied = () => {
    toast({
      title: "Copied",
      status: "success",
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Menu>
      <MenuButton as={Button} size="xs" rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            setInputValue("");
            setInputResult("");
            selectRef.current!.value = StringConversionMethods.NONE;
            textAreaRef.current!.value = "";
          }}
        >
          Reset
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigator.clipboard.writeText(result);
            copied();
          }}
        >
          Copy
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default ButtonMenu;
