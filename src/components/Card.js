import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Card.css";

class Cards extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "20rem" }}>
          <Card.Img
            className="card-image"
            variant="top"
            src={this.props.image}
          />
          <Card.Body>
            <Card.Title className="card-main-text">
              {this.props.title}
            </Card.Title>
            <Card.Text className="card-sub-text">
              {this.props.subtext}
            </Card.Text>
            <div className="btnLinks">
              <a
                href={this.props.deploy}
                className="button btn"
                target="_blank"
              >
                Deployed Site
              </a>
              <a href={this.props.repo} className="button btn" target="_blank">
                Github Repo
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Cards;
