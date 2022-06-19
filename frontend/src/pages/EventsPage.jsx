import { Component } from "react";
import EventCard from "../components/EventCard";
import { HStack } from "@chakra-ui/react";
import { getEvents } from "../utils/eventsUtils";
import { Heading } from "@chakra-ui/react";
import Footer from "../components/Footer";
import { Center } from "@chakra-ui/react";

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
      return <EventCard event={event} />;
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
        <HStack
          style={{
            position: "relative",
            justifyContent: "center",
          }}
          spacing="10"
          alignItems="center"
          marginTop="15vh"
        >
          {this.renderEventCards()}
        </HStack>
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
          <Footer />
        </div>
      </div>
    );
  }
}

export default EventsPage;
