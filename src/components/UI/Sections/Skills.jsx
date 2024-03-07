import React from "react";
import styled from "styled-components";
// Components

// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Skills() {
  return (
    <Wrapper id="skills">
      <div className="lightBg">
        <div className="container">
          <SkillSet className="flexSpaceCenter">
            <SkillList>
              <h2 className="font40 extraBold">Skillset</h2>
              <p>I have experience with the following technologies</p>
              <br />
              <ul>
                <li>
                  <b>Back-end: </b>PHP & Laravel, API REST knowledge.
                </li>
                <li>
                  <b>Front-end:</b> NodeJS with React & Vue, State and store
                  management with Redux and Vuex.
                </li>
                <li>
                  <b>Styling and UI libraries: </b> Vuetify & MaterialUI,
                  Bootstrap, and Styled Components
                </li>
                <li>
                  <b>DB: </b>Database management using SQL languaje tools.
                </li>
              </ul>
              <br />
              <h2 className="font20 extraBold">Other skills</h2>
              <ul>
                <li>Repository Management with GIT and Bitbucket</li>
                <li>AGILE methodologies</li>
                <li>Diagram design and modeling</li>
                <li>Intermediate English Level</li>
              </ul>
            </SkillList>
            <AddRight>
              <AddRightInner>
                <div className="flexNullCenter">
                  <AddImgWrapp1 className="flexCenter">
                    <img src={AddImage1} alt="office" />
                  </AddImgWrapp1>
                  <AddImgWrapp2>
                    <img src={AddImage2} alt="office" />
                  </AddImgWrapp2>
                </div>
                <div className="flexNullCenter">
                  <AddImgWrapp3>
                    <img src={AddImage3} alt="office" />
                  </AddImgWrapp3>
                  <AddImgWrapp4>
                    <img src={AddImage4} alt="office" />
                  </AddImgWrapp4>
                </div>
              </AddRightInner>
            </AddRight>
          </SkillSet>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const SkillSet = styled.div`
  padding:5%;
  position: relative;

  @media (max-width: 760px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;

const SkillList = styled.div`
  width: 50%;

  h2 {
    line-height: 3rem;
    margin: 15px 0;
  }

  ul {
    list-style: circle;
    margin-left: 35px;
  }

  @media (max-width: 760px) {
    width: 80%;
    order: 2;
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
