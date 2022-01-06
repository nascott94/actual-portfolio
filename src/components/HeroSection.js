import React from 'react';
import HeroImg from '../assets/images/olive.jpeg';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          hello
          <span>Welcome, my name is </span>
          <span>Natalie Scott </span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="olive+me" />
        </div>
        <div className="hero__info">
          <div>
            I am working as a freelance web developer for the last year. I have
            a background in architecture and love good design.
          </div>
        </div>
      </div>
    </div>
  );
}
