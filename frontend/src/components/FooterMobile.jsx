import {
  Box,
  Flex,
  Stack,
  useColorModeValue,
  Image,
  Center,
} from "@chakra-ui/react";

// import literatureSocietyLogo from "../assets/logos/litsoc.jpg";
import phemeLogo from "../assets/logos/pheme.jpg";
import quizSocietyLogo from "../assets/logos/quizsoc.jpg";
import litSocietyLogo from "../assets/logos/litsoc.jpg";
export default function FooterMobile() {
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
        display={{ base: "flex", md: "none" }}
      >
        <Center>
          <Stack direction={"row"} spacing={8}>
            {/* <Image
            src={literatureSocietyLogo}
            h="6vh"
            w="12vw"
            alt="Literature Society Logo"
          /> */}
            <Image src={phemeLogo} h="6vh" w="12vw" alt="PHEME Logo" />
            <Image
              src={quizSocietyLogo}
              h="6vh"
              w="12vw"
              alt="Quiz Society Logo"
            />
            <Image
              src={litSocietyLogo}
              h="6vh"
              w="12vw"
              alt="Literature Society Logo"
            />
          </Stack>
        </Center>
      </Flex>
    </Box>
  );
}
