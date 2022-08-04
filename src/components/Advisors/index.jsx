import React from "react";
// import Faces from "./Faces";
// import { Button } from "../ButtonElements";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  imgstart,
  topLine,
  headline,
  lightText,
  darkText,
  description,
/*   primary,
  dark,
  dark2, */
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id="advisors">
        <InfoWrapper>
          <InfoRow imgstart={imgstart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
            <div style={{color: "black"}}>
              <h4>Here will be the Faces slider</h4>
            </div>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
