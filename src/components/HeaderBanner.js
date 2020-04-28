import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';
import '../sass/header-banner.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function HeaderBanner() {
  return (
    <Container fluid className='header-banner-container' id='top'>
      <Row className='title-container d-flex align-items-center'>
        <Col md={12}>
          <ScrollAnimation animateIn='fadeInRightBig' animateOut='fadeOutLeftBig'>
            <h1 className='hello-title'>HELLO<span>.</span></h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInLeftBig' delay='200' animateOut='fadeOutLeftBig'>
            <h1 className='name-title1 text-right'>I AM</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInLeftBig' delay='400' animateOut='fadeOutLeftBig'>
            <h1 className='name-title2 text-right'>BRYAN</h1>
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderBanner;