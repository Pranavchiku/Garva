import { Button, Flex, Breadcrumb, BreadcrumbItem, Link } from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import RegisterEventDrawer from "./RegisterEventDrawer";
import SubmissionDrawer from "./SubmissionDrawer";

export default function NavBar() {
  return (
    <Flex display={{ base: "none", md: "flex" }}>
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
          <Button variant="ghost">
            <Link href="#footer">Contact</Link>
          </Button>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
}
