import type { NextPage } from "next";
import {
  Flex,
  Button,
  Input,
  Box,
  Container,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
// import InfoDialog from "~/features/converters/InfoDialog";
import { ConversionTools } from "src/types";
import { useWindowSize } from "usehooks-ts";
import { ResetButton } from "../buttons/reset";
import { CopyButton } from "../buttons/copy";
import { SourceButton } from "../buttons/source";
import { InfoButton } from "../buttons/info";
import ButtonMenu from "../menu/button-menu";

const BasicConverter = ({
  heading,
  tools,
  handleCopy,
}: {
  heading: string;
  tools: ConversionTools[];
  handleCopy: (value: string) => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogDescription, setDialogDescription] = useState("");
  const [codeblock, setCodeblock] = useState("");
  const [types, setTypes] = useState("");

  const toast = useToast();
  const { width } = useWindowSize();
  const isMobileWidth = width < 450;

  const handleInfoClick = (info: {
    title: string;
    description: string;
    types: string;
    codeblock: string;
  }) => {
    const { title, description, types, codeblock } = info;
    setDialogTitle(title);
    setDialogDescription(description);
    setTypes(types);
    setCodeblock(codeblock);
    onOpen();
  };

  return (
    <Fragment>
      {/* <FeatureHeader heading={heading} /> */}
      {/* <InfoDialog
        isOpen={isOpen}
        onClose={onClose}
        dialogTitle={dialogTitle}
        dialogDescription={dialogDescription}
        types={types}
        codeblock={codeblock}
      /> */}

      <Container maxW="container.lg" mt={10}>
        <Accordion>
          {tools.map((tool, index) => (
            <Fragment key={index}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {tool.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex justify={"space-between"}>
                    <Input
                      type="text"
                      value={tool.value}
                      placeholder={tool.placeholder}
                      onChange={(e) => {
                        tool.onChange(e);
                      }}
                    />

                    {tool.submit && (
                      <Button ml={5} onClick={tool.onSubmit}>
                        Submit
                      </Button>
                    )}
                  </Flex>
                  <Text fontSize="sm" color={"cadetBlue"} mt={5}>
                    {tool.result}
                  </Text>
                  <Flex justify="flex-end" mt={3}>
                    {isMobileWidth ? (
                      <ButtonMenu
                        tool={tool}
                        handleInfoClick={handleInfoClick}
                      />
                    ) : (
                      <Flex>
                        {tool.result && (
                          <Flex>
                            <ResetButton tool={tool} />
                            <CopyButton tool={tool} />

                            <SourceButton tool={tool} />
                          </Flex>
                        )}
                        <InfoButton
                          tool={tool}
                          handleInfoClick={handleInfoClick}
                        />
                      </Flex>
                    )}
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Fragment>
          ))}
        </Accordion>
      </Container>
    </Fragment>
  );
};

export default BasicConverter;
