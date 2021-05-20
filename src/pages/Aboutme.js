import React from "react";
import { Col, Image } from "react-bootstrap";
import "../components/About.css";

function AboutMe() {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="my-image">
          <Col xs={6} md={4}>
            <Image
              src={process.env.PUBLIC_URL + "/my-image.jpeg"}
              width="300"
              roundedCircle
            />
          </Col>
        </div>
        <div className="about-me">
          <h4 className="about-header">Hello, I'm Jennifer Dinh!</h4>
          <p>
            A Full Stack Developer based in the Chicagoland area who is eager to
            learn, and currently open to new opportunities. At Georgia Tech, I
            have collaborated with my classmates on full-stack applications
            where reliability and communication were key components to achieving
            successful applications. I enjoy working with others and using
            creativity to problem-solve while coding.
          </p>
          <p>
            In my free time, you can find me playing the guitar, songwriting,
            and crocheting. I am excited for the opportunity to continue to grow
            in this field, and to see what my individuality can bring to it!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
