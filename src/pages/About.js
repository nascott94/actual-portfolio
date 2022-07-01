import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/abtimg (1).png';
import AboutInfoItem from '../components/AboutInfoItem';
import Wavy from '../assets/images/wavy.png';
// import Button from '../components/Button';
// import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .wavy {
    position: absolute;
    top: 550px;
    left: 1250px;
    width: 400px;
    height: 400px;
  }

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: #d9eaf4;
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about_info {
    margin-bottom: 4rem;

    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .resume_button {
    font-size: 2.2rem;
    background-color: var(--gray-1);
    padding: 0.7rem 2rem;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: white;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .resume_button {
      font-size: 1.8rem;
    }
    .wavy {
      display: none;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <img className="wavy pulsate-fwd" src={Wavy} alt="shape" />
          <div className="left">
            <p className="about__subheading slide-in-top">
              Hi, my name is <span>Natalie Scott</span>
            </p>
            <h2 className="about__heading slide-in-top">
              I am a freelance Web Developer
            </h2>
            <div className="about__info" style={{ paddingBottom: 20 }}>
              <PText>
                I am energetic and motivated Web Developer with a background in
                architectural design. I thrive in a team environment, working to
                get projects done in an efficient manner. Outside the office I
                could be found cooking recipes I have no business tackling,
                taking my dog Olive on a hike and dreaming of owning an old
                fixer-upper.
              </PText>
            </div>
            <div className="slide-in-top">
              <a
                className="resume_button pulsate-fwd"
                href="https://drive.google.com/file/d/1Em_hcPvT_cJhDGFtsIsx_7qYSeEozluH/view?usp=sharing"
                target="https://drive.google.com/file/d/1Em_hcPvT_cJhDGFtsIsx_7qYSeEozluH/view?usp=sharing"
              >
                Link to Resume
              </a>
            </div>
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="College"
              items={['Furman University', 'Bachelor of Arts']}
            />
            <AboutInfoItem
              title="Coding Boot Camp"
              items={['Denver University']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'React']}
            />
            <AboutInfoItem title="BackEnd" items={['Node', 'Express', 'SQL']} />
            <AboutInfoItem
              title="Design"
              items={['Photoshop', 'SketchUp', 'Revit', 'VRAY']}
            />
          </div>
        </div>
      </div>
      {/* <ContactBanner /> */}
    </AboutPageStyles>
  );
}
