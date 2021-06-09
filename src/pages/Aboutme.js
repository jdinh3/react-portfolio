import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "../components/About.css";

function AboutMe() {
  return (
    <div className="about-section">
      <div className="about-container">
        <Row>
          <Col xs={12} sm={12} md={4}>
            <div className="my-image">
              <Image
                src={process.env.PUBLIC_URL + "/my-image.jpeg"}
                width="300"
                roundedCircle
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <div className="about-me">
              <h4 className="about-header">Hello, I'm Jennifer Dinh!</h4>
              <p>
                A Full Stack Developer based in the Chicagoland area who is
                eager to learn, and currently open to new opportunities. At
                Georgia Tech, I have collaborated with my classmates on
                full-stack applications where reliability and communication were
                key components to achieving successful applications. I enjoy
                working with others and using creativity to problem-solve while
                coding.
              </p>
              <p>
                In my free time, you can find me playing the guitar,
                songwriting, and crocheting. I am excited for the opportunity to
                continue to grow in this field, and to see what my individuality
                can bring to it!
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutMe;
