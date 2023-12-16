import { Flex, Text, Button } from "@chakra-ui/react";

import { useWindowSize } from "usehooks-ts";

const Header = () => {
  const { width } = useWindowSize();
  return (
    <>
      <Flex
        mt={10}
        mx="auto"
        maxW="7xl"
        fontSize="3xl"
        fontWeight="bold"
        color="white"
        justify="space-between"
        align="center"
      >
        <Text>{width < 450 ? "Strings" : "String Conversions"}</Text>
        <Flex align="center">
          {/* Star Repo Button */}
          <Button
            size="sm"
            variant={"outline"}
            onClick={() => {
              window.open(
                "https://github.com/passandscore/string-conversion",
                "_blank"
              );
            }}
            fontSize="xs"
            ml={2}
          >
            Star Repository
          </Button>
        </Flex>
      </Flex>

      <Flex
        mx="auto"
        maxW="7xl"
        borderBottom="1px"
        pb={4}
        fontSize="lg"
        justify="space-between"
      >
        <Text color="#4299E1">A suite of utilities</Text>
      </Flex>
    </>
  );
};

export default Header;
