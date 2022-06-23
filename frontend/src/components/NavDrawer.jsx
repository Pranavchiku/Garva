import React from "react";

import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  IconButton,
  Link,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import RegisterEventDrawer from "./RegisterEventDrawer";
import SubmissionDrawer from "./SubmissionDrawer";

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <IconButton
        onClick={onOpen}
        icon={<HamburgerIcon h={10} w={10} marginTop="3vh" marginLeft="5vw" />}
        size="lg"
        variant="ghost"
      ></IconButton>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Center>
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          </Center>
          <DrawerBody>
            <Flex direction="column" margin="15">
              <RegisterEventDrawer nav />
              <br />
              <SubmissionDrawer nav />
              <br />
              <Button variant="ghost" onClick={onClose}>
                <Link href="#footer">Contact</Link>
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
