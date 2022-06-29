import {
  Button,
  Center,
  Heading,
  Image,
  Link,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { CalendarIcon } from "@chakra-ui/icons";

import EventModal from "./EventModal";

export default function EventCard({ event }) {
  const baseURL = process.env.REACT_APP_API_URL;
  const startDate = new Date(event.fields.eventStartDate);
  const endDate = new Date(event.fields.eventEndDate);

  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "30vw" }}
        height={{ sm: "476px", md: "80vh" }}
        direction={{ base: "column", md: "column" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Center bg="white">
          <Image
            boxSize="15rem"
            src={baseURL + "media/" + event.fields.eventCoverImg}
            alt="event poster"
          />
        </Center>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={window.innerWidth>1250 ? "2xl":"xl"} fontFamily={"body"}>
            {event.fields.eventName}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {event.fields.eventSociety}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            <Tag>
              <TagLeftIcon as={CalendarIcon} />
              <TagLabel>
                {startDate.toLocaleDateString("en-IN")} {startDate.toLocaleTimeString("en-IN")}
              </TagLabel>
            </Tag>
            <br />
            To
            <br />
            <Tag>
              <TagLeftIcon as={CalendarIcon} />
              <TagLabel>
                {endDate.toLocaleDateString("en-IN")} {endDate.toLocaleTimeString("en-IN")}
              </TagLabel>
            </Tag>
          </Text>
          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <EventModal event={event} />
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              <Link href={event.fields.eventRulebookLink} target="_blank">
                Rulebook
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
