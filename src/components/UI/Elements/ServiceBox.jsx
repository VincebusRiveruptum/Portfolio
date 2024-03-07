import React from "react";
import styled from "styled-components";

import ps from "../../assets/img/ps.png";
import ad from "../../assets/img/adapt.png";
import res from "../../assets/img/res.png";
import com from "../../assets/img/com.png";
import mo from "../../assets/img/mo.png";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "com":
      getIcon = (
        <IconImg>
          <img src={com} alt=""></img>
        </IconImg>
      );
      break;
    case "res":
      getIcon = (
        <IconImg>
          <img src={res} alt=""></img>
        </IconImg>
      );
      break;
    case "ad":
      getIcon = (
        <IconImg>
          <img src={ad} alt=""></img>
        </IconImg>
      );
      break;
    case "ps":
      getIcon = (
        <IconImg>
          <img src={ps} alt=""></img>
        </IconImg>
      );
      break;
    case "mo":
      getIcon = (
        <IconImg>
          <img src={mo} alt=""></img>
        </IconImg>
      );
      break;
    default:
      getIcon = <img src={ps} alt="" />;

      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const IconImg = styled.div`
  img {
    width: 64px;
    height: 64px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
