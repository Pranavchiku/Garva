import React from "react";

import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import RegisterEventDrawer from "./RegisterEventDrawer";

import { useCountdown } from "../hooks/useCountdown";

function CountdownCard({ days, hours, minutes, seconds }) {
  return (
    <Center py={6}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box p={8}>
          <Stack>
            <Stack spacing={0} align={"center"} mb={5} marginTop="3vh">
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                The Event starts in:
              </Heading>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={4}>
              <Text fontWeight={600}>
                {days} {days <= 1 ? "Day" : "Days"}
              </Text>
              <Text fontWeight={600}>:</Text>
              <Text fontWeight={600}>
                {hours < 10 ? "0" : ""}
                {hours} {hours <= 1 ? "Hour" : "Hours"}
              </Text>
              <Text fontWeight={600}>:</Text>
              <Text fontWeight={600}>
                {minutes < 10 ? "0" : ""}
                {minutes} {minutes <= 1 ? "Minute" : "Minutes"}
              </Text>
              <Text fontWeight={600}>:</Text>
              <Text fontWeight={600}>
                {seconds < 10 ? "0" : ""}
                {seconds} {seconds <= 1 ? "Second" : "Seconds"}
              </Text>
            </Stack>
            <br />
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                verticalAlign: "center",
                minHeight: "10vh",
              }}
            >
              <RegisterEventDrawer />
            </div>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}

export default function CountdownTimer({ targetDate }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <CountdownCard />;
  } else {
    return (
      <CountdownCard
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
}