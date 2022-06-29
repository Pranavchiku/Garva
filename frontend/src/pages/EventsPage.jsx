import { Component } from "react";

import { Box, Center, Heading, Stack } from "@chakra-ui/react";

import EventCard from "../components/EventCard";
import Footer from "../components/Footer";

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
      <div style={{ minHeight: "100%" }}>
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
          paddingBottom="10%"
        >
          {this.renderEventCards()}
        </Stack><br /><br />
        <Box
          position={{ base: "relative", sm: "absolute", md: "absolute" }}
          style={{ bottom: "0", left: "0" }}
          marginTop="auto"
          width="100%"
          height="10%"
          id="footer"
        >
          <Footer />
        </Box>
      </div>
    );
  }
}

export default EventsPage;
