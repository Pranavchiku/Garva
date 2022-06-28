import React from "react";

import { Box, Flex, Image, Spacer } from "@chakra-ui/react";

import Slider from "react-slick";

import NavBar from "../components/NavBar";
import NavDrawer from "./NavDrawer";

import azadiKaAmritMahotsavLogo from "../assets/logos/akam.png";
import flag from "../assets/backgrounds/flag.jpg";
import india from "../assets/backgrounds/india.jpg";
import color from "../assets/backgrounds/color.jpg";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
};

export default function Carousel() {
  // eslint-disable-next-line no-unused-vars
  const [slider, setSlider] = React.useState();

  const images = [
    flag,
    india,
    color,
  ];

  return (
    <Box position={"fixed"} height={"100vh"} width={"full"} overflow={"hidden"}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((image, index) => (
          <Box
            key={index}
            height={"100vh"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${image})`}
          >
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
              <NavBar />
              <NavDrawer />
              <Spacer />
              <Image
                src={azadiKaAmritMahotsavLogo}
                className="headerImage"
                style={{ marginTop: "2vh", marginRight: "1vw" }}
              />
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
