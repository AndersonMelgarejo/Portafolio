import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am passionate about software development and have learned a lot along the way.
              <br />
              <br />I have experience creating solutions with
              <i>
                <b className="purple"> Java. </b>
              </i>
              <br />
              <br />
              I implemented binary persistence in projects and used 
              <b className="purple"> AWS</b> in them. &nbsp;
              <i>
              Worked with  {" "}
                <b className="purple">
                APIs {" "}
                </b>
                 and designed web pages with {" "}
                <b className="purple">
                HTML, CSS and JavaScript.
                </b>
              </i>
              <br />
              <br />
              My main focus has been <b className="purple">Java, </b> 
              but I'm also learning <b className="purple">React </b>
              to improve my web development skills
              <i>
                In addition, I have intermediate knowledge in
                <b className="purple">
                  {" "}
                  office 
                </b>
              </i>
              &nbsp; 
              automation, which allows me to
              <i>
                <b className="purple"> manage projects</b>
                {" "}
                efficiently.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AndersonMelgarejo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/MelgarejoAnder"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ander-melgarejo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anderson7u7r"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
