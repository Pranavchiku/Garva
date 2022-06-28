import { Box, Flex, Stack, useColorModeValue, Image } from "@chakra-ui/react";

// import literatureSocietyLogo from "../assets/logos/litsoc.jpg";
import phemeLogo from "../assets/logos/pheme.jpg";
import quizSocietyLogo from "../assets/logos/quizsoc.jpg";
import litSocietyLogo from "../assets/logos/litsoc.jpg";
export default function FooterDesktop() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Flex
        maxW={"100vw"}
        p={5}
        direction={"column"}
        justifyContent={"space-between"}
        display={{ base: "none", md: "flex" }}
      >
        <Stack direction={"row"} spacing={8}>
          {/* <Image
            src={literatureSocietyLogo}
            h="5vh"
            w="3vw"
            alt="Literature Society Logo"
          /> */}
          <Image src={phemeLogo} h="5vh" w="3vw" alt="PHEME Logo" />
          <Image
            src={quizSocietyLogo}
            h="5vh"
            w="3vw"
            alt="Quiz Society Logo"
          />
          <Image
            src={litSocietyLogo}
            h="5vh"
            w="3vw"
            alt="Quiz Society Logo"
          />
        </Stack>
      </Flex>
    </Box>
  );
}
