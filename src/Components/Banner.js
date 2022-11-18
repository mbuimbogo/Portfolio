import { useEffect, useState } from 'react';
import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

// import PeterResume from "../assets/Peter-Resume.pdf"
// import headerImg from "../assets/images/header-img.svg";
import imgg from "../assets/images/imgg.jpg"
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Banner = () => {
  const [loopNum, setLoopNum]=useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Proffessional Coder", "Front-end Developer","UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random()*100);
  const period = 2000;
  
  const onButtonClick = () => {
    fetch("Peter-Resume.pdf").then(response => {
      response.blob().then(blob => {

        const fireURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fireURL;
        alink.download = 'Peter-Resume.pdf';
        alink.click();
      })
    })
  }
  
  const onButtonBlogClick = () => {
  <a target={"_blank"} rel="noreferrer" href="https://mbogo.tech" alt="blogsite"/>
  
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    },delta)
    return () => {clearInterval(ticker)};
  },[text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length +1)
    setText(updatedText); 

    if(isDeleting){
      setDelta(prevDelta => prevDelta/2)
    };

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }else if (isDeleting && updatedText === ""){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
        
    }
  }

  return (
    <section className='banner' id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                  <TrackVisibility>
                  {({isVisible}) => 
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Peter `}<span className='wrap'>{text}</span></h1>
                    <p>Front-end Developer with a demonstrated history of working in the internet industry. Building Web applications with React js and some other cool libraries and frameworks.</p>
                    {/* <button onClick={() => console.log("connect")}>Let's connect<ArrowRightCircle size={25}/></button> */}
                   
                    <button className="btn btn-primary" onClick={onButtonClick}>RESUME<ArrowRightCircle size={25}/></button>
                    <button className="btn btn-primary" onClick={onButtonBlogClick}>BlogSite<ArrowRightCircle size={25}/></button>
                                          
                  </div> 
                    
                    }
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                  { <img src={imgg} alt="Header Img"/> }
                  </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Banner