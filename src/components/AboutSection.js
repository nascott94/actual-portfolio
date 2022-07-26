import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import AboutImg from '../assets/images/chaffeehouse.png';
import SectionTitle from './SectionTitle';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .aboutImg {
    border: 2px solid var(--gray-1);
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            Hi, I'm Natalie! I am energetic and motivated Web Developer with a
            background in architectural design. I am currently located in
            Denver, CO but am orginally from Daytona Beach, FL. I can be
            contacted by email at{' '}
            <a href="mailto:nascott94@outlook.com">nascott94@outlook</a>.
          </PText>
          <div className="aboutSection__buttons">
            <div className="pulsate-fwd">
              <Button btnText="Projects" btnLink="/projects" />
            </div>
            <div className="pulsate-bck">
              <Button btnText="Read More" btnLink="/about" />
            </div>
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
