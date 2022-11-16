import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from "../assets/images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className='footer mt-5'>
    <Container>
    <Row className="align-item-center">
    <Col sm = {6} className="logo">
        <img src={logo} alt="Logo" />
    </Col>
    <Col sm={6} className= "text-center text-sm-end">
        <div className='social-icon'>
        {/* <a href="#" src={navIcon1} alt="" /> */}
        <a target={"_blank"} rel="noreferrer" href="https://github.com/mbuimbogo" alt="github">
                      <FontAwesomeIcon icon={faGithub} color="#fff"/>
                      </a> 
                      <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/mbuipeter" alt="linkedin">
                      <FontAwesomeIcon icon={faLinkedin} color="#fff"/>
                      </a> 
                      <a target={"_blank"} rel="noreferrer" href="https://twitter.com/mbogotech?t=ZyV92QJ8MI8TLPF2MJif2gs=09" alt="twitter">
                      <FontAwesomeIcon icon={faTwitter} color="#fff"/>
                      </a> 
        </div>
        <p>CopyRight 2022. All Rights Reserved by mbogombui<span>	&#128512;</span></p>
    </Col>
    </Row>
    </Container>
    </footer>
  )
}

export default Footer