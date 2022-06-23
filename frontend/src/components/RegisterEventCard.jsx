import { Component } from "react";

import {
  Flex,
  Box,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

import { registerEvent } from "../utils/eventsUtils";

class RegisterEventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      name: "",
      email: "",
      contact: "",
      college: "",
      poetry: false,
      article: false,
      quiz: false,
      submissionCode: "",
      isModalOpen: false,
    };
  }

  onModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleCollegeNameChange = (e) => {
    this.setState({
      college: e.target.value,
    });
  };

  handleContactChange = (e) => {
    this.setState({
      contact: e.target.value,
    });
  };

  handlePoetryChange = (e) => {
    this.setState({
      poetry: e.target.checked,
    });
  };

  handleArticleChange = (e) => {
    this.setState({
      article: e.target.checked,
    });
  };

  handleQuizChange = (e) => {
    this.setState({
      quiz: e.target.checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let userDetails = {
      userName: this.state.name,
      userEmail: this.state.email,
      userContact: this.state.contact,
      userCollegeName: this.state.college,
      poetry: this.state.poetry ? "true" : "",
      article: this.state.article ? "true" : "",
      quiz: this.state.quiz ? "true" : "",
    };

    registerEvent(userDetails).then((res) => {
      if (JSON.parse(res).code) {
        this.setState({
          error: null,
          submissionCode: JSON.parse(res).code,
        });
      } else {
        this.setState({
          error: JSON.parse(res).message,
          submissionCode: "",
        });
      }
    });
  };

  renderModalHeader = () => {
    if (this.state.error) {
      return (
        <ModalHeader>
          <Text>Email already registered</Text>
        </ModalHeader>
      );
    } else {
      return (
        <ModalHeader>
          <Text>Registration Successful</Text>
        </ModalHeader>
      );
    }
  };

  renderModalBody = () => {
    if (this.state.error) {
      return (
        <ModalBody>
          <Text>{this.state.error}</Text>
        </ModalBody>
      );
    } else {
      return (
        <ModalBody>
          <Text>You have been successfully registered!</Text>
          <br />
          <Text>
            Your submission code is: {this.state.submissionCode}. Please save
            this code as it is required while making submissions (except quiz).
            It has also been emailed to your email address.
          </Text>
        </ModalBody>
      );
    }
  };

  render() {
    return (
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={8} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Register for Events
            </Heading>
          </Stack>
          <form name="register-form">
            <Box rounded={"lg"} p={8}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="userName" isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input
                        type="text"
                        name="userName"
                        onChange={this.handleNameChange}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="userCollegeName" isRequired>
                      <FormLabel>College</FormLabel>
                      <Input
                        type="text"
                        name="userCollegeName"
                        onChange={this.handleCollegeNameChange}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="userEmail" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="userEmail"
                    onChange={this.handleEmailChange}
                  />
                </FormControl>
                <FormControl id="userContact" isRequired>
                  <FormLabel>Contact No.</FormLabel>
                  <Input
                    type="text"
                    name="userContact"
                    onChange={this.handleContactChange}
                  />
                </FormControl>
                <FormControl>
                  <CheckboxGroup>
                    <Stack spacing={[1, 5]} direction={["column", "row"]}>
                      <Checkbox
                        value="poetry"
                        name="poetry"
                        onChange={this.handlePoetryChange}
                      >
                        <Text>Poetry</Text>
                      </Checkbox>
                      <Checkbox
                        value="article"
                        name="article"
                        onChange={this.handleArticleChange}
                      >
                        <Text>Article</Text>
                      </Checkbox>
                      <Checkbox
                        value="quiz"
                        name="quiz"
                        onChange={this.handleQuizChange}
                      >
                        <Text>Quiz</Text>
                      </Checkbox>
                    </Stack>
                  </CheckboxGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={(e) => {
                      this.handleSubmit(e);
                      this.onModalOpen();
                    }}
                  >
                    Register
                  </Button>
                </Stack>
                <Modal
                  onClose={this.onModalClose}
                  isOpen={this.state.isModalOpen}
                  isCentered
                >
                  <ModalOverlay />
                  <ModalContent>
                    {this.renderModalHeader()}
                    <ModalCloseButton />
                    {this.renderModalBody()}
                    <ModalFooter>
                      <Button onClick={this.onModalClose}>Close</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Flex>
    );
  }
}

export default RegisterEventCard;
