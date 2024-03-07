import React from "react";
import styled from "styled-components";
import ProjectBox from "../Elements/ProjectBox";

import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/imus.png";
import ProjectImg3 from "../../assets/img/projects/admined.png";

export default function CurrentProjects() {
  return (
    <Wrapper id="currentprojects" className="lightBg">
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">Projects</h1>
        </HeaderInfo>
        <div className="row textCenter">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              img={ProjectImg3}
              title="AdministracionEd"
              subtitle="Vue.JS - Laravel/PHP "
              text="Automatized building water consumption lecture system."
              //action={() => alert("clicked")
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              img={ProjectImg1}
              title="Took One"
              subtitle=".NET C#"
              text="Bitmap editor for Pixel Art and sprite drawing."
              //action={() => alert("clicked")}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              img={ProjectImg2}
              title="IMUS"
              subtitle="Laravel - Blade"
              text="Moodle like academic system for PUCV's Instituto de Musica"
              //action={() => alert("clicked")}
            />
          </div>
        </div>
        <div className="row flexCenter">
          <div style={{ margin: "50px 0", width: "200px" }}></div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 5%;
`;

const HeaderInfo = styled.div`
  padding-top: 50px;

  @media (max-width: 860px) {
    text-align: center;
  }
`;
