import {
  Button,
  Flex,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  Spacer,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import RegisterEventDrawer from "./RegisterEventDrawer";
import SubmissionDrawer from "./SubmissionDrawer";

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
            color: "black",
          }}
        >
          <BreadcrumbItem>
            <RegisterEventDrawer nav />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <SubmissionDrawer nav />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button variant="ghost">Contact</Button>
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
