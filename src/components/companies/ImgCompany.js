import React, { Component } from "react";
import "./ImgCompany.css";

class ImgCompany extends Component {
  
  render() {
    return (
      <div className="image">
        <img className="img-company" src={this.props.image} alt="Company"/>
      </div>
    )
  }
}

export default ImgCompany;
