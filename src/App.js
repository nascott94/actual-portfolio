import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import SmoothScrollbar from './components/SmoothScrollbar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import ShapeDot from './assets/images/shape+dot.png';

const ShapeContainer = styled.div`
  .dark_blue {
    position: absolute;
    top: 10px;
    left: -50px;
    width: 500px;
    height: 500px;
  }
`;

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <SmoothScrollbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
