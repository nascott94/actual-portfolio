import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import DarkBlueShape from '../assets/images/darkblue.png';
import LightBlueShape from '../assets/images/lightblue.png';

// const ShapeContainer = styled.div`
//   position: absolute;

//   .dark_blue {
//     max-width: 750px;
//     left: -500;
//     top: -100;
//     z-index: -1;
//   }
//   .light_blue {
//     max-width: 750px;
//     z-index: -1;
//   }
// `;

const ShapeContainer = styled.div`
  .dark_blue {
    position: absolute;
    top: 10px;
    left: -50px;
    width: 650px;
    height: 650px;
  }
  .light_blue {
    position: absolute;
    top: 300px;
    left: 150px;
    width: 400px;
    height: 400px;
  }
`;

export default function Home() {
  return (
    <div>
      <ShapeContainer>
        <img className="dark_blue" src={DarkBlueShape} alt="shape" />
        <img className="light_blue" src={LightBlueShape} alt="shape" />
      </ShapeContainer>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
