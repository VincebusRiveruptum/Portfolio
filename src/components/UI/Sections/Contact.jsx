import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { options, serviceId, templateID } from "../../../options";
import ConfirmationModal from "../Elements/ConfirmationModal";
import emailjs from "@emailjs/browser";
import FullButton from "../Buttons/FullButton";

export default function Contact() {
  const [mailConfirmation, setMailConfirmation] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateID, e.target, options).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setMailConfirmation(true);
  }

  return (
    <Wrapper id="contact">
      <ContactBox className="whiteBg container">
        <HeaderInfo>
          <h1 className="font40 extraBold">Contact me</h1>
          <p className="font13">
            If you are interested hiring me you can contact me directly filling
            the form below.
          </p>
        </HeaderInfo>
        <FormWrapper>
          <MessageForm onSubmit={handleSubmit} id="contactForm">
            <label className="font13">First name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="font20 extraBold"
              required
            />
            <label className="font13">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              className="font20 extraBold"
              required
            />
            <label className="font13">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="font20 extraBold"
              required
            />
            <textarea
              rows="4"
              cols="50"
              type="text"
              id="message"
              name="message"
              className="font20 extraBold"
              required
            />
          </MessageForm>
        </FormWrapper>

        <SumbitWrapper className="flex">
          <FullButton
            form="contactForm"
            type="submit"
            value="Send Message"
            color="#7620ff"
          />
        </SumbitWrapper>
        <ConfirmationModal mailConfirmation={mailConfirmation} />
      </ContactBox>
    </Wrapper>
  );
}

const ContactBox = styled.div`
  display: inline-block;
  padding: 5%;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom:5%;
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const MessageForm = styled.form`
  width: 60%;
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 760px) {
    padding: 30px 0;
    width:100%;
  }
`;

const FormWrapper = styled.div`
  display:flex;
  justify-content:center;
`

const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
