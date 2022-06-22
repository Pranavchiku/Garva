import React from "react";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import SubmissionCard from "./SubmissionCard";

export default function SubmissionDrawer({ nav }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (nav) {
    return (
      <>
        <Button variant="ghost" onClick={onOpen}>
          Submission
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Make Submissions
            </DrawerHeader>
            <DrawerBody>
              <SubmissionCard />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  } else {
    return (
      <>
        <Button
          flex={1}
          maxW="250px"
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
          onClick={onOpen}
        >
          Submit
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Make Submissions
            </DrawerHeader>
            <DrawerBody>
              <SubmissionCard />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
}
