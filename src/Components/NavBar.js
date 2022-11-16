import React from 'react'
import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';
import twitterIm from "../assets/images/twitter.png"
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
// import navIcon3 from "../assets/images/nav-icon3.svg";
// import logo from "../assets/images/logo.svg";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState("false")

    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY = 50){
                setScrolled(true)
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll)
    },[])

    const  onUpdatedActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
        <Navbar expand="lg" className ={scrolled ? "scrolled": ""} >
          <Container>
            <Navbar.Brand className="home" href="#home">
                {/* <img src={logo} alt="logo"/> */}
                <h1><strong>MBOGO</strong></h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar toggler icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={ activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdatedActiveLink("home")} >Home</Nav.Link>
                <Nav.Link href="#skills" className={ activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdatedActiveLink("skills")} >Skills</Nav.Link>
                <Nav.Link href="#projects" className={ activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdatedActiveLink("projects")} >Projects</Nav.Link>
                {/* <NavLink to="/" className="navbar-link" >Banner</NavLink>
                <NavLink   to="./skills" className="navbar-link" >Skills</NavLink>
                <NavLink to="./projects" className="navbar-link" >Projects</NavLink> */}
                
              </Nav>
              <span className='navbar-text'>
                <div className='social-icon'>
                    <a target={"_blank"} rel="noreferrer" href="https://github.com/mbuimbogo" alt="github">
                      <FontAwesomeIcon icon={faGithub} color="#fff"/>
                      </a> 
                      <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/mbuipeter" alt="linkedin">
                      <FontAwesomeIcon icon={faLinkedin} color="#fff"/>
                      </a> 
                      <a target={"_blank"} rel="noreferrer" href="https://twitter.com/mbogotech?t=ZyV92QJ8MI8TLPF2MJif2gs=09" alt="twitter">
                      <FontAwesomeIcon icon={faTwitter} color="#fff"/>
                      </a> 
                    
                    
                    {/* <a href="https://www.linkedin.com/in/mbuipeter" src={navIcon2} alt="linkedin" width="16" height="16" viewBox="0 0 16 16"  />
                    <a href="https://twitter.com/mbogotech?t=ZyV92QJ8MI8TLPF2MJif2gs=09" src={twitterIm} alt="twitter" width="16" height="16"  /> */}
                    {/* <a href="#" src={} alt="" /> */}
                </div>
                <button className='vvd' onClick={()=> console.log("contact")}><span>Let's connect</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    

export default NavBar