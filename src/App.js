import React from 'react';
import { Container } from 'react-bootstrap/';
import './app.scss';
import MainNavbar from './components/MainNavbar';
import HeaderBanner from './components/HeaderBanner';
import ShortDescription from './components/ShortDescription';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ContactMe from './components/ContactSection';

function App() {
  return (
    <Container fluid className='app-container'>
      <MainNavbar />
      <HeaderBanner />
      <ShortDescription />
      <AboutSection />
      <WorkSection />
      <ContactMe />
    </Container>
  );
}

export default App;
