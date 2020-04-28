import React from 'react';
import { Row, Col } from 'react-bootstrap/';
import '../sass/short-description.scss'
import ScrollAnimation from 'react-animate-on-scroll';

function ShortDescription() {
  return (
    <>
      <Row className='short-desc-container'>
        <Col md={8}>
          <ScrollAnimation animateIn='fadeInUp' animateOut="fadeOutUp">
            <p className='lead'>I am a talented individual with a wide range of skills. My passion is all about designing and developing digital products. I can function as any industry defined titles such Digital Designer, UX and UI Designer, 3D Designer, Web Designer, or Frontend Developer. Though I don't have a long professional background behind me yet, I am confident of my skills to face challenges ahead.</p>
          </ScrollAnimation>
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row className='image-container'>
      </Row>
    </>
  );
}

export default ShortDescription;