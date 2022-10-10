import { useEffect, useState } from 'react';
import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/images/headerImg.svg"

const Banner = () => {
  const [loopNum, setLoopNum]=useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300-Math.random()*100);

  return (
    <section className='banner' id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Peter`}<span className='wrap'>web developer</span></h1>
                    <p> Lorem Ipsum</p>
                    <button onClick={() => console.log("connect")}>Let's connect</button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                  <img src={headerImg} alt="Header Img"/>
                  </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Banner