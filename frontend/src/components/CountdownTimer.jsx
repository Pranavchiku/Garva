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

function CountdownCard({ heading, days, hours, minutes, seconds, over }) {
  return (
    <Center py={8}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box p={8}>
          <Stack>
            <Stack
              spacing={0}
              align={"center"}
              mb={5}
              marginTop="3vh"
              className="cardHeading"
            >
              <Heading fontWeight={500} fontFamily={"body"}>
                {heading}
              </Heading>
            </Stack>
            {!over && (
              <Stack
                direction={"row"}
                justify={"center"}
                spacing={2}
                className="cardText"
              >
                <Text fontWeight={600}>
                  {days < 10 ? "0" : ""}
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
            )}

            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                verticalAlign: "center",
                minHeight: "8vh",
                marginTop: "3vh",
              }}
            >
              <RegisterEventDrawer className="registerButton" />
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
    return <CountdownCard heading="The event has started." over />;
  } else {
    return (
      <CountdownCard
        heading="The event starts in:"
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
}
