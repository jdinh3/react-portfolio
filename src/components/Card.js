import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div class="row">
        <div class="column">
          <div class="card">
            <a className="gallery-card" href={this.props.href}>
              <div className="gallery-label">
                <h4 className="gallery-main-text">{this.props.title}</h4>
                <p className="gallery-sub-text">{this.props.subtext}</p>
              </div>
              <img
                className="gallery-image"
                alt="stars"
                src={this.props.image}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
