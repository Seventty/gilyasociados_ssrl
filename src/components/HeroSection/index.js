import React, { useState, useRef } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const videoRef = useRef(null);

  const videoSources = [Video];
  let videoSource = videoSources[0];

  let index = 1;

  const nextVideo = (e) => {
    e.preventDefault();
    if (index >= videoSources.length) {
      index = 0;
    }
    videoSource = videoSources[index];

    index++;

    videoRef.current.src = videoSource;
    videoRef.current.play();
  };

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          ref={videoRef}
          autoPlay
          muted
          src={videoSource}
          type="video/mp4"
          onEnded={(e) => nextVideo(e)}
        ></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>¡Empieza tu Consultoría Financiera hoy!</HeroH1>
        <HeroP>Descubre con nosotros los planes de consultoría financiera y como podemos guíarte al progreso financiero que anhelas.</HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
