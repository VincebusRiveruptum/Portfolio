import React from "react";
import styled from "styled-components";
import github from "../../assets/img/github.png";
import linkedIn from "../../assets/img/linkedin.png";
export default function SocialMedia(){
    return(
        <Wrapper>
            <LogoLink>
                <a href="https://github.com/VincebusRiveruptum">
                    <img src={github} alt="github link"></img> 
                </a>
            </LogoLink>           
            <LogoLink>
                <a href="https://www.linkedin.com/in/vicente-ignacio-riveros-garay-5a545925b">
                    <img src={linkedIn} alt="linkedIn link"></img> 
                </a>
            </LogoLink>           
        </Wrapper>
    )
}

const Wrapper = styled.section`
  display:flex;
`;


const LogoLink = styled.section`
  img{
    padding:20%;
    width:64px;
    height:auto;
    transition: .5s ease;
  }
  img:hover{
    opacity: 0.3;
  }
  img:hover .middle{
    opacity:1;
  }
  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
`;