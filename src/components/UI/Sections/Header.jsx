import React from "react";
import styled from "styled-components";
import SocialMedia from "../Elements/SocialMedia";
// Components
import FullButton from "../Buttons/FullButton";
import vincebus from "../../assets/img/vicente.png";
import FlagIcon from "../../assets/svg/Services/FlagIcon";

// Assets

export default function Header() {
  return (
    <Wrapper id="home">
      <About className="lightBg">
        <LeftSide>
          <ImageWrapper>
            <img src={vincebus} className="radius6" alt="Vincebus"></img>
          </ImageWrapper>
        </LeftSide>

        <RightSide className="flexCenter">
          <Title className="extraBold font40">VICENTE RIVEROS GARAY</Title>

          <FlagDesc>
            <FlagIcon />
            <SubtitleDesc className="semiBold font20">
              Full Stack Developer & IT Engineer
            </SubtitleDesc>
          </FlagDesc>

          <HeaderP className="font18">
            I'm a Full-stack developer from Chile with 1+ year experience in the
            field, a professional developer with a good set of problem solving
            and technical experience.
          </HeaderP>

          <SocialMediaLinks>
            <SocialMedia />
          </SocialMediaLinks>

          <BtnWrapper>
            <FullButton title="Contact me" />
          </BtnWrapper>

        </RightSide>
      </About>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const About = styled.section`
  display: flex;
  padding: 5%;
  @media (max-width: 760px) {
    flex-direction: column-reverse;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 760px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 9;
  img {
    width: 50%;
    height: auto;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

const RightSide = styled.div`
  display: inline;
  width: 100%;
  height: 100%;

  @media (max-width: 760px) {
    width: 100%;
    margin-top: 30px;
    text-align: center;
  }
`;

const FlagDesc = styled.div`
  display: flex;

  @media (max-width: 760px) {
    justify-content: center;
  }
`;

const HeaderP = styled.p`
  max-width: 470px;
  padding: 15px 0 25px 0;
  line-height: 1.5rem;

  @media (max-width: 760px) {
    padding: 15px 0 25px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  @media (max-width: 760px) {
    justify-content: center;
  }
`;

const SubtitleDesc = styled.div`
  padding: 2%;
`;

const Title = styled.div`
  display: flex;
  @media (max-width: 760px) {
    justify-content: center;
  }
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
