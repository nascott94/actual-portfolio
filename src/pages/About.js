import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/olive.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

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
      background-color: var(--deep-dark);
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
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hello, my name is <span>Natalie Scott</span>
            </p>
            <h2 className="about__heading"> I am a freelance Web Developer</h2>
            <div className="about__info">
              <PText>
                I am currently located in Denver, Colorado. I am currently
                located in Denver, Colorado.I am currently located in Denver,
                Colorado.I am currently located in Denver, Colorado. I am
                currently located in Denver, Colorado. I am currently located in
                Denver, Colorado.I am currently located in Denver, Colorado.
                <br /> <br />I am currently located in Denver, Colorado. I am
                currently located in Denver, Colorado.I am currently located in
                Denver, Colorado.I am currently located in Denver, Colorado. I
                am currently located in Denver, Colorado. I am currently located
                in Denver, Colorado.I am currently located in Denver, Colorado.
                <br />
                <br />I am currently located in Denver, Colorado. I am currently
                located in Denver, Colorado. I am currently located in Denver,
                Colorado.I am currently located in Denver, Colorado.
              </PText>
            </div>
            <Button btnText="Download Resume" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem title="College" items={['Furman University']} />
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
              items={[
                'Adobe Photoshop',
                'Illustator',
                'SketchUp',
                'Revit',
                'VRAY',
              ]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
