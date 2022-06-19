import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

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
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={baseURL + "media/" + event.fields.eventCoverImg}
            alt="event poster"
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
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
            {event.fields.eventDescription}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            Start: {startDate.getHours()}:{startDate.getMinutes()}{" "}
            {startDate.getDate()}/{startDate.getMonth()}/
            {startDate.getFullYear()}
            <br />
            End: {endDate.getHours()}:{endDate.getMinutes()} {endDate.getDate()}
            /{endDate.getMonth()}/{endDate.getFullYear()}
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
