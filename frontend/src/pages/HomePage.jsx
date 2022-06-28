import { Component } from "react";

import CountdownTimer from "../components/CountdownTimer";
import Carousel from "../components/Carousel";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      targetDate: new Date("June 30, 2022 12:00:00"),
    };
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <div>
          <Carousel />
        </div>
        <div className="counter">
          <CountdownTimer targetDate={this.state.targetDate} />
        </div>
      </div>
    );
  }
}

export default Homepage;
