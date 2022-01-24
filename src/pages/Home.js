import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import DarkBlueShape from '../assets/images/darkblue.png';
import DripDrop from '../assets/images/dripdrop.png';
// import LightBlueShape from '../assets/images/lightblue.png';
// import Wavy from '../assets/images/wavy.png';

const ShapeContainer = styled.div`
  .dark_blue {
    position: absolute;
    top: 1190px;
    left: 1210px;
    width: 500px;
    height: 500px;
    z-index: -1;
  }
  .outline {
    position: absolute;
    top: 1400px;
    left: 1400px;
    width: 200px;
    height: 200px;
  }
  /* .light_blue {
    position: absolute;
    top: 300px;
    left: 150px;
    width: 400px;
    height: 400px;
  }
  .wavy {
    position: absolute;
    top: 400px;
    left: 300px;
    width: 200px;
    height: 200px;
  } */
  @media only screen and (max-width: 768px) {
    .dark_blue {
      display: none;
    }
    .outline {
      display: none;
    }
  }
`;

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ShapeContainer>
        <img
          className="dark_blue pulsate-fwd"
          src={DarkBlueShape}
          alt="shape"
        />
        <img className="outline" src={DripDrop} alt="shape" />
      </ShapeContainer>
      <ProjectsSection />
    </div>
  );
}
