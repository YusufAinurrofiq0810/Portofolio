import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yusuf Ainurrofiq </span>
            from <span className="purple"> Salatiga, Indonesia.</span>
            <br />
            I am Fresh Graduate from D3 Teknik Informatika, Universitas Sebelas Maret.
            <br />
            besides a coding, i have a lot of hobbies and activities that i like to do in my free time.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Believe in yourself, even when no one else does."{" "}
          </p>
          <footer className="blockquote-footer">Yusuf Ainurrofiq</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
