import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "../components/About.css";
import "../components/Header.css";

function Home() {
  return (
    <div className="about-section">
      <div className="about-container">
        <Row>
          <Col xs={12} sm={12} md={6} >
            <Image
              className="about-me-img"
              src={process.env.PUBLIC_URL + "/my-image.jpeg"}
            />
          </Col>
          <Col xs={12} sm={12} md={6} >
            <div className="about-me-text-container">
              <h1 className="about-me-header">Jennifer Dinh</h1>
              <p className="about-me-text">
                A front-end developer based in the Chicagoland area with
                experience in web development within BigCommerce and Shopify.
                Passionate about creating great user experiences with a strong
                understanding of accessibility standards.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
