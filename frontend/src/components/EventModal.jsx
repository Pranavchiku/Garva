import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export default function EventModal({ event }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        flex={1}
        fontSize={"sm"}
        rounded={"full"}
        _focus={{
          bg: "gray.200",
        }}
      >
        Event Details
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{event.fields.eventName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text> Description: {event.fields.eventDescription}</Text>
            <Text>Prize: Rs. {event.fields.eventPrize}</Text>
            <Text>Point of Contact (POC): {event.fields.eventPocName}</Text>
            <Text>
              POC Contact No.: +91 {event.fields.eventPocContactNumber}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
