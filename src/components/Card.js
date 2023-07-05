import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Card.css";
import ModalApp from "./Modal";
import Modal from "./Modal";
class Cards extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "20rem" }}>
          <ModalApp
            image={`${process.env.PUBLIC_URL}${this.props.image}`}
            site={this.props.site}
            repo={this.props.repo}
            title={this.props.title}
            description={this.props.description}
            tutorial={this.props.tutorial}
          />

          <Card.Body>
            <Card.Title className="card-main-text">
              {this.props.title}
            </Card.Title>
            <Card.Text className="card-sub-text">
              {this.props.subtext}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Cards;
