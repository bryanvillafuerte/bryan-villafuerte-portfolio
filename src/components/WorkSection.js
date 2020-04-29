import React from 'react';
import '../sass/work-section.scss';
import { Row, Col, CardGroup, Card, Button, Modal, ResponsiveEmbed } from 'react-bootstrap/';
import NasaSpaceX from '../images/nasa-spacex.png';
import OrdrDesign from '../images/webdesign.jpg';
import OsloZoo from '../images/oslo-zoo.gif';
import Rawg from '../images/rawg.png';
import Letha from '../images/letha.gif';
import ScrollAnimation from 'react-animate-on-scroll';

function WorkSection() {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);
  const [modalShow5, setModalShow5] = React.useState(false);

  return (
    <>
      <Row className='work-container' id='myWork'>
        <Col md={12} className='text-left'>
          <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutRight'>
            <h2>MY<br/>
              <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutRight' delay='200'>
                <span>WORK</span>.
              </ScrollAnimation>
            </h2>
          </ScrollAnimation>
        </Col>
        <Col md={12}>
          <CardGroup>
            <Card className='h-100'>
              <ScrollAnimation animateIn='zoomIn' animateOut='zoomOut'>
                <Card.Body>
                  <Card.Img variant="top" src={NasaSpaceX} alt="GamePhoto" />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <div className="overlay-container">
                      <Card.Title>NASA and SpaceX Microsite</Card.Title>
                      <Button onClick={() => setModalShow1(true)} block>VIEW PROJECT</Button>
                    </div>
                  </Card.ImgOverlay>
                </Card.Body>
              </ScrollAnimation>
              <Modal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
              >
                <Modal.Header closeButton />
                <Modal.Body>
                  <div className="embed-container">
                    <ResponsiveEmbed>
                      <embed src="https://nasa-spacex-react.netlify.app" />
                    </ResponsiveEmbed>
                  </div>
                </Modal.Body>
              </Modal>
            </Card>
            <Card className='h-100'>
              <ScrollAnimation animateIn='zoomIn' animateOut='zoomOut' delay='00'>
                <Card.Body>
                  <Card.Img variant="top" src={Rawg} alt="GamePhoto" />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <div className="overlay-container">
                      <Card.Title>DevShaft Media</Card.Title>
                      <Button onClick={() => setModalShow2(true)} block>VIEW PROJECT</Button>
                    </div>
                  </Card.ImgOverlay>
                </Card.Body>
              </ScrollAnimation>
              <Modal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
              >
                <Modal.Header closeButton />
                <Modal.Body>
                  <div className="embed-container">
                    <ResponsiveEmbed>
                      <embed src="https://devshaft-media.netlify.app/" />
                    </ResponsiveEmbed>
                  </div>
                </Modal.Body>
              </Modal>
            </Card>
            <Card className='h-100'>
              <ScrollAnimation animateIn='zoomIn' animateOut='zoomOut' delay='400'>
                <Card.Body>
                  <Card.Img variant="top" src={Letha} alt="GamePhoto" />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <div className="overlay-container">
                      <Card.Title>Letha Website Design</Card.Title>
                      <Button onClick={() => setModalShow3(true)} block>VIEW PROJECT</Button>
                    </div>
                  </Card.ImgOverlay>
                </Card.Body>
              </ScrollAnimation>
              <Modal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
              >
                <Modal.Header closeButton />
                <Modal.Body>
                  <div className="embed-container">
                    <ResponsiveEmbed>
                      <embed src="https://bryjhovillafuerte.myportfolio.com/letha-responsive-web-design" />
                    </ResponsiveEmbed>
                  </div>
                </Modal.Body>
              </Modal>
            </Card>
          </CardGroup>
        </Col>
        <Col md={12}>
          <CardGroup>
            <Card className='h-100'>
              <ScrollAnimation animateIn='zoomIn' animateOut='zoomOut'>
                <Card.Body>
                  <Card.Img variant="top" src={OrdrDesign} alt="GamePhoto" />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <div className="overlay-container">
                      <Card.Title>Ordr AS</Card.Title>
                      <Button onClick={() => setModalShow4(true)} block>VIEW PROJECT</Button>
                    </div>
                  </Card.ImgOverlay>
                </Card.Body>
              </ScrollAnimation>
              <Modal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
              >
                <Modal.Header closeButton />
                <Modal.Body>
                  <div className="embed-container">
                    <ResponsiveEmbed>
                      <embed src="https://bryjhovillafuerte.myportfolio.com/ordras" />
                    </ResponsiveEmbed>
                  </div>
                </Modal.Body>
              </Modal>
            </Card>
            <Card className='h-100'>
              <ScrollAnimation animateIn='zoomIn' animateOut='zoomOut' delay='200'>
                <Card.Body>
                  <Card.Img variant="top" src={OsloZoo} alt="GamePhoto" />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <div className="overlay-container">
                      <Card.Title>Oslo Zoo App Design</Card.Title>
                      <Button onClick={() => setModalShow5(true)} block>VIEW PROJECT</Button>
                    </div>
                  </Card.ImgOverlay>
                </Card.Body>
              </ScrollAnimation>
              <Modal
                show={modalShow5}
                onHide={() => setModalShow5(false)}
              >
                <Modal.Header closeButton />
                <Modal.Body>
                  <div className="embed-container">
                    <ResponsiveEmbed>
                      <embed src="https://bryjhovillafuerte.myportfolio.com/zoo-family-app" />
                    </ResponsiveEmbed>
                  </div>
                </Modal.Body>
              </Modal>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </>
  );
}

export default WorkSection;