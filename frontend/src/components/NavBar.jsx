import {
  Flex,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import azadiKaAmritMahotsavLogo from "../assets/logos/akam.png";

export default function NavBar() {
  return (
    <>
      <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
        <Breadcrumb
          className="headerText"
          spacing="10px"
          separator={<ChevronRightIcon color="gray.500" />}
          fontWeight="bold"
          style={{
            marginTop: "2vh",
            marginLeft: "4vw",
            color: "white",
          }}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Spacer />
        <Image
          src={azadiKaAmritMahotsavLogo}
          className="headerImage"
          style={{ marginTop: "2vh", marginRight: "1vw" }}
        />
      </Flex>
    </>
  );
}
