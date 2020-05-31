
import React, { Component } from 'react';
import '../about/style.css';
import {Container, Row,Col,Image} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/about_particle.js';
import Particles from 'react-particles-js';

import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import SocialIcons from '../../components/social_icons';
import PCD from '../../components/project_card_details';

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1
      }}
  />
);

  
class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      show: false,
    };
  }

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    })
  }


  componentDidMount() {
    ReactGa.initialize("UA-154721739-1");
    ReactGa.pageview('About Screen');
  }
 
  render() {
    return (
        <Container className="About-header" fluid={true}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>About | Shubham Kumawat</title>
                <link rel="canonical" />
                <meta name="description" content="Shubham Kumawat | Projects" />
          </Helmet>
           <Animate to="1" from="0" attributeName="opacity">
           <Particles
            params={particles}
            className="particle"
          />
           <Row  xl={11}  className="About-main">
              <HamburgerMenu />
              <div className="d1">
              <Col >
              <Slide left > 
        <Bounce >
          <div className="clc_main">
          <div className="clc_container">
          <Row>
                <Col xl={12} >
            <Fade top cascade>
            <h1 className="clc_header">Projects</h1>
            </Fade>
              <ColoredLine color="#FFC466" />
              <Fade top cascade>
              <div className="AboutBtnContainer">
           
                  <PCD /> 
              </div>
            </Fade>

            <Row className="contact-left-footer" >
              <SocialIcons />
            </Row>
            </Col>
              </Row>
               
          </div>
          </div>
        </Bounce>
      </Slide>
              </Col>
              </div>
           </Row>
           </Animate>
       </Container>
    );
  }
}

export default Projects;
