import React from 'react';
import '../home/style.css';
import Footer from '../../components/footer';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/particle.js';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';

import MouseIcon from '../../components/mouse/mouse';
import {
   Link
  } from "react-router-dom";
import SocialIcons from '../../components/social_icons';

  var ReactRotatingText = require('react-rotating-text');

function Analytics(){
  ReactGa.initialize("UA-154721739-1")
  ReactGa.pageview('Home Screen')
}

function Home() {
  Analytics()
  return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Home | Shubham Kumawat</title>
                  <link rel="canonical"  />
                  <meta name="description" content="Shubham Kumawat | Home " />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
          <Container className="App-header" fluid={true}>
            <Row className="App-main">
              <Col  xl={12}  className="App-left">
                
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <h1 className="first-line">
           Hey!  I am 
         </h1>
         <h2 className="second_line">
          <strong>Shubham Kumawat</strong>
          
         </h2>
         <h3>I am <span>
         <ReactRotatingText  items={["Web Designer.", "Developer.", "Programer."]} > </ReactRotatingText>
         </span></h3>
            <br />
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">About Me</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/Projects" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">Projects</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact" className="home-left-aboutme">Contact Me</Link></Button>
           {/* <MouseIcon/> */}
         </Col>
     </Row>
   </Container>
              </Col>
            </Row>
            <Row className="App-footer">
              <Col>
              <Footer />
              </Col>
              <Col>
              <SocialIcons />
              </Col>
            </Row>
        </Container>
        </Animate>
      </div>
    );
}

export default Home;
