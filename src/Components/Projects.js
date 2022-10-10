import React from 'react'
import { Nav } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import {Col, Container, Row} from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import colorSharp2 from "../assets/images/colorSharp2.png"

const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: 'Design & Development',
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: 'Design & Development',
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: 'Design & Development',
            imgUrl: projImg1,
        }
    ]
  return (
    <section className='project' id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Lorem Ipsum</p>
                <Tab.Container id="projects-tabs" defaultActiveKey={first}>
                <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="third">
                    Tab Three
                </Nav.Link>
                </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Row>
                    {projects.map((project,index) => {
                        return(
                            <ProjectCard key={index} {...project}/>
                        )
                    })}
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Loreen Ipsun</Tab.Pane>
                    <Tab.Pane eventKey="third">Loreen Ipsun</Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}></img>
    </section>
  )
}

export default Projects