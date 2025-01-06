import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anderson Melgarejo </span>
            from <span className="purple"> Lima, Peru.</span>
            <br />
            I am currently a Systems Engineering student and I am developing software as a personal project in Java.
            <br />
            I have completed courses on development through YouTube and Alura.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only way to do great work is to love what you do!"{" "}
          </p>
          <footer className="blockquote-footer">Anderson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
