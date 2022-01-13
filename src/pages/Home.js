import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import DarkBlueShape from '../assets/images/darkblue.png';
import LightBlueShape from '../assets/images/lightblue.png';
import DripDrop from '../assets/images/dripdrop.png';
import Wavy from '../assets/images/wavy.png';

const ShapeContainer = styled.div`
  .dark_blue {
    position: absolute;
    top: 10px;
    left: -50px;
    width: 500px;
    height: 500px;
  }
  .light_blue {
    position: absolute;
    top: 300px;
    left: 150px;
    width: 400px;
    height: 400px;
  }
  .outline {
    position: absolute;
    top: 150px;
    left: 100px;
    width: 200px;
    height: 200px;
  }
  .wavy {
    position: absolute;
    top: 400px;
    left: 300px;
    width: 200px;
    height: 200px;
  }
`;

export default function Home() {
  return (
    <div>
      <ShapeContainer>
        {/* <img className="dark_blue" src={DarkBlueShape} alt="shape" />
        <img className="light_blue" src={LightBlueShape} alt="shape" />
        <img className="outline" src={DripDrop} alt="shape" />
        <img className="wavy" src={Wavy} alt="shape" /> */}
      </ShapeContainer>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
