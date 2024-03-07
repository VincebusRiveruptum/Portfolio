import React from "react";
import styled from "styled-components";

export default function Experience() {
  return (
    <Wrapper id="experience">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Experience</h1>
            <br />
            <h1 className="font25 semiBold">Full-stack developer</h1>
            <h1 className="font18 semiBold">Project "AdministacionEd"</h1>
            Freelancer, October 2023 - Today
            <p className="font13">
              <li>Migration process from Bootstrap to Vuetify</li>
              <li>
                Functionality implementation, user control, internal API REST
                and bug fixing.
              </li>
              <br />
            </p>
            <br />
            <h1 className="font25 semiBold">Researcher</h1>
            <h1 className="font18 semiBold">Prototyping</h1>
            UAT PUCV, June 2023 - October 2023
            <p className="font13">
              <li>
                Research in video game development with Unity and C#. Creation
                of virtual reality video game prototypes on business and
                advertising themes with Unity 3D.
              </li>
              <br />
            </p>
            <br />
            <h1 className="font25 semiBold">Professional Training</h1>
            UAT PUCV, March 2023 - June 2023
            <br />
            <br />
            <h1 className="font18 semiBold">Project “IMUS”</h1>
            <p className="font13">
              <li>Full-stack Web Development with Laravel and PHP.</li>
              <li>
                Implementation of functionalities on the front and back-end of
                the academic browser of the music school of PUCV. User profile
                implementation
              </li>
              <li>
                Optimization of migrations and database. QA and Testing of the
                IMUS academic site.
              </li>
              <li>Documentation and requirements management.</li>
            </p>
            <br />
            <h1 className="font18 semiBold">
              Intranet system project “GORE Biobío”
            </h1>
            <p className="font13">
              <li>Documentation and requirements management.</li>
              <li>
                Modeling of BPMN diagrams and Use Cases on the internal
                architecture of the GORE Biobío intranet portal site
                Implementation of functionalities on the front-end of the GORE
                Biobío intranet system Bug fixes on the platform Implementation
                of styles on the site.
              </li>
              <br />
            </p>
            <h1 className="font18 semiBold">CORFO project “NuevaFuente”</h1>
            <p className="font13">
              <li>
                Capture of requirements during the initial stages of the
                project.
              </li>
              <li>
                Connection of the energy ministry API for capturing climatic
                data from the national territory.
              </li>
              <br />
            </p>
          </HeaderInfo>
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
  li {
    list-style: circle;
  }
  @media (max-width: 760px) {
  }
`;
