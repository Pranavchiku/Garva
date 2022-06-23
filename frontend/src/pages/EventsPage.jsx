import { Component } from "react";

import { Box, Center, Heading, Stack } from "@chakra-ui/react";

import EventCard from "../components/EventCard";
import FooterDesktop from "../components/FooterDesktop";
import FooterMobile from "../components/FooterMobile";

import { getEvents } from "../utils/eventsUtils";

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      events: [],
    };
  }

  componentDidMount() {
    getEvents().then((data) => {
      this.setState({ events: JSON.parse(data.events) });
    });
  }

  renderEventCards() {
    return this.state.events.map((event) => {
      return (
        <div style={{ margin: "10px" }}>
          <EventCard event={event} />
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <br />
        <br />
        <Center marginTop="15vh">
          <Heading as="h1" size="3xl" position="absolute">
            Events
          </Heading>
        </Center>
        <Stack
          style={{
            position: "relative",
            justifyContent: "center",
          }}
          spacing="10"
          alignItems="center"
          marginTop="15vh"
          direction={["column", "row"]}
        >
          {this.renderEventCards()}
        </Stack>

        <Box
          position={{ base: "relative", md: "absolute" }}
          style={{ bottom: "0", left: "0", right: "0", zIndex: "1" }}
          width="100%"
          flexDirection="column"
          id="footer"
        >
          <FooterDesktop />
          <FooterMobile />
        </Box>
      </div>
    );
  }
}

export default EventsPage;
