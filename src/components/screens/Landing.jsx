import React from "react";
// Sections
import TopNavbar from "../UI/Nav/TopNavbar";
import Header from "../UI/Sections/Header";
import PersonalInformation from "../UI/Sections/PersonalInformation";
import Skills from "../UI/Sections/Skills";
import Experience from "../UI/Sections/Experience";
import CurrentProjects from "../UI/Sections/CurrentProjects";
import Contact from "../UI/Sections/Contact";
import Footer from "../UI/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <PersonalInformation />
      <Skills/>
      <Experience />
      <CurrentProjects/>
      <Contact />
      <Footer />
    </>
  );
}
  

