import React from 'react';
import { Container } from 'react-bootstrap/';
import './app.scss';
import MainNavbar from './components/MainNavbar';
import HeaderBanner from './components/HeaderBanner';
import ShortDescription from './components/ShortDescription';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';

function App() {
  return (
    <Container fluid className='app-container'>
      <MainNavbar />
      <HeaderBanner />
      <ShortDescription />
      <AboutSection />
      <WorkSection />
    </Container>
  );
}

export default App;
