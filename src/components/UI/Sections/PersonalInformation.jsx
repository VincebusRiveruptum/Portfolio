import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";

export default function PersonalInformation() {
  return (
    <Wrapper id="personalinformation">
      <div className="whiteBg">
        <div className="container">
          <h1 className="font40 extraBold">Personal Information</h1>
          <Pinfo>
            <Degree>
              <h1 className="font30 extraBold">Degree</h1>
              <h1 className="font20 semiBold">
                Pontificia Universidad Católica de Valparaíso
              </h1>
              <p className="font13">
                Degree: "Ingeniero en Ejecución Informática" (2016 - december
                2023)
                <br />
              </p>
            </Degree>
            <Address>
              <h1 className="font30 extraBold"> Address</h1>
              <p className="font13">Santiago, Chile</p>
            </Address>
          </Pinfo>

          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="ps"
                title="Resoluteness"
                subtitle="I'm a resolutive person with big persientence for solving problems"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="ad"
                title="Adaptability"
                subtitle="I adapt easily to any environment and conditions without losing focus."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="com"
                title="Communicative"
                subtitle="According to me, great comunication skills such as sincerity and respect are needed for good team work."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="res"
                title="Resilency"
                subtitle="My best work is when i'm under pressure"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="mo"
                title="Motivated"
                subtitle="I have big motivation for learning and sharing knowledge with people."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 5%;
  @media (max-width: 760px) {
    display:flex;
    justify-content: center;
    text-align:center;
  }
`;

const Pinfo = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 760px) {
    width: 100%;
    padding-top:5%;
    flex-direction:column;

  }
`;

const Degree = styled.div`
  padding-bottom: 50px;
  @media (max-width: 760px) {
    padding-bottom: 50px;
    text-align: center;
  }
`;

const Address = styled.div`
  @media (max-width: 760px) {
    text-align: center;
  }
`;


const ServiceBoxRow = styled.div`
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 760px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;

