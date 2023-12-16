import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ConversionTools } from "src/types";

const ButtonMenu = ({
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
    <Menu>
      <MenuButton as={Button} size="xs" rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            tool.setValue("");
            tool.setResult("");
          }}
        >
          Reset
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigator.clipboard.writeText(tool.result);
            copied();
          }}
        >
          Copy
        </MenuItem>
        <MenuItem onClick={() => window.open(tool.source, "_blank")}>
          Source
        </MenuItem>
        <MenuItem onClick={() => handleInfoClick(tool.info)}>Info</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ButtonMenu;
