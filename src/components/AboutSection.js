import React from 'react';
import { Row, Col, Image } from 'react-bootstrap/';
import '../sass/about-section.scss';
import MyImage from '../images/bryan_halfbody_edited1.png'
import ScrollAnimation from 'react-animate-on-scroll';

function AboutSection() {
  return (
    <>
      <Row className='about-container' id='aboutMe'>
        <Col md={6} className='image-container text-center'>
          <Image src={MyImage} alt='My Image' />
        </Col>
        <Col md={6} className='about-text-container'>
          <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutRight'>
            <h2>ABOUT<br/>
              <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutRight' delay='200'>
                <span>ME</span>.
              </ScrollAnimation>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutRight'>
            <p className='lead'>My name is Bryan Luis Villafuerte. I am 36 years of age, married and have 3 children and originally from the Philippines. I graduated with a bachelor's degree in Interactive Media - Animation and 3D Design from Noroff School of Technology and Digital Media. I am also currently studying Frontend Development in the same school and will be finished in the summer 2020.</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutRight'>
            <p className='lead'>I would not to define myself by the work I’ve done, I would define myself by the work I want to do. Skills can be taught, but personality and attitude towards your work is what I think is the most essential. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutRight'>
            <p className='lead'>Despite my lack of professional experience, I am confident in my skills and competence to complete the work. I have knowledge of important topics, tools and methods in interactive media, 3D, animation, front-end development, graphic, digital and web design. In addition to these, I also learned the planning, research and structure of what a good design is. My high work ethic and almost endless amounts of energy helps me in my pursuit of further developing my skills in different areas of study and artistic endeavors. This makes it easy for me to learn new things quickly and effectively.</p>
          </ScrollAnimation>
        </Col>
      </Row>
    </>
  );
}

export default AboutSection;