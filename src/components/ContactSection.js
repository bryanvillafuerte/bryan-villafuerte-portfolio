import React from 'react';
import { Row, Col, Container } from 'react-bootstrap/';
import '../sass/contact-section.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function ContactMe() {
  return (
    <>
      <Row className='contact-container' id='contactMe'>
        <Col md={12} className='text-right'>
          <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOutLeft'>
            <h2>GET IN<br/>
              <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOutLeft' delay='200'>
                <span>TOUCH</span>.
              </ScrollAnimation>
            </h2>
          </ScrollAnimation>
        </Col>
        <Container className='text-left'>
            <ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutDown'>
              <div className='d-flex'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"/><path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"/></svg>
                </span>
                <h3><a href="mailto:bryan.villafuerte@bryvil.com?subject=Hello Bryan!" target="_blank" rel="noopener noreferrer">Email Me</a></h3>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutDown'>
              <div className='d-flex'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/></svg>
                </span>
                <h3><a href='https://github.com/bryjho' target="_blank" rel="noopener noreferrer">Github</a></h3>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutDown'>
              <div className='d-flex'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"/></svg>
                </span>
                <h3><a href='https://www.linkedin.com/in/bryvillafuerte/' target="_blank" rel="noopener noreferrer">LinkedIn</a></h3>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutDown'>
              <div className='d-flex'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M262.3 199.2c-1.6-2.8-5.6-3.2-7.7-.7l-91.9 122.2c-2.5 2.9-.6 7.4 3.2 7.7l161.1 14c3.8.3 6.4-3.8 4.5-7.1l-69.2-136.1zM367.2 264.1c-1.6-2.8-5.6-3.2-7.7-.7l-24.8 25.1a4.68 4.68 0 0 0-.5 5.4l25.4 49.5c.8 1.3 2.1 2.2 3.7 2.3l44.9 3.9c3.8.3 6.4-3.8 4.5-7.1l-45.5-78.4zM378.1 224.4c11.2-.1 20.9-8.3 23-19.2 2.8-14.8-8.6-28.3-23.7-28.1-11.2.1-20.9 8.3-23 19.2-2.8 14.8 8.6 28.3 23.7 28.1z"/><path d="M455.2 129.3l-65.8-5.7-6.1-67c-1.3-14.9-14.5-25.9-29.5-24.5L56.7 58.9c-14.9 1.3-25.9 14.5-24.6 29.4l26.8 296.5c1.3 14.9 14.5 25.9 29.5 24.5l15.7-1.4-1.5 16.7c-1.3 14.9 9.7 28 24.7 29.3l297.3 25.9c14.9 1.3 28.1-9.7 29.4-24.6l26-296.6c1.2-14.8-9.8-28-24.8-29.3zM87.6 300.7c-3.7.3-7-2.4-7.4-6.1l-18-200c-.3-3.7 2.4-7 6.1-7.3l279.2-25.1c3.7-.3 7 2.4 7.4 6.1l4.8 52.8L158 103.4c-14.9-1.3-28.1 9.7-29.4 24.6l-14.9 170.3-26.1 2.4zm362.2-135.6l-17.5 200c-.3 3.7-3.6 6.5-7.3 6.2l-18.6-1.6L145.7 347c-3.7-.3-6.5-3.6-6.2-7.3l3.8-43.9L157 139.7c.3-3.7 3.6-6.5 7.3-6.2l198 17.3 29.7 2.6 51.6 4.5c3.8.2 6.6 3.5 6.2 7.2z"/></svg>
                </span>
                <h3><a href='https://bryjhovillafuerte.myportfolio.com/' target="_blank" rel="noopener noreferrer">Other Works</a></h3>
              </div>
            </ScrollAnimation>
          </Container>
      </Row>
      <Row className='footer-container'>
        <Col md={12} className='text-center small'>
          <p>© 2020 All rights reserved ■ Bryan Luis Villafuerte</p>
        </Col>
      </Row>
    </>
  );
}

export default ContactMe;