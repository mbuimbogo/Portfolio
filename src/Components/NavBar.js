import React from 'react'
import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";
import logo from "../assets/images/logo.svg";

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
            <Navbar.Brand href="#home">
                <img src={logo} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar toggler icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={ activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdatedActiveLink("home")} >Home</Nav.Link>
                <Nav.Link href="#skills" className={ activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdatedActiveLink("skills")} >Skills</Nav.Link>
                <Nav.Link href="#projects" className={ activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdatedActiveLink("projects")} >Projects</Nav.Link>
         
              </Nav>
              <span className='navbar-text'>
                <div className='social-icon'>
                    <a href="#" src={navIcon1} alt="" />
                    <a href="#" src={navIcon2} alt="" />
                    <a href="#" src={navIcon3} alt="" />
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