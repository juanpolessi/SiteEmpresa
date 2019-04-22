import React, { Component } from 'react'
import './Information.css'

class Information extends Component {
    render(){
        return(
            <div className="info">
                <label className="lblTitle">{this.props.title}</label>
                <img className="imgInfo" src={this.props.image} />
                <label className="lblInfo">{this.props.information}</label>
            </div>
        );
    }
}

export default Information