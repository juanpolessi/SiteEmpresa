import React, { Component } from 'react'
import "./Search.css"

import autoPass from '../../img/auto.png'

class Search extends Component{

    handleInputChange = (event) => {
        const { onCompanyChange } = this.props;
        onCompanyChange(event.target.value);
    }
    
    render(){
        return(
            <div className="search">
                <div className="logo-autopass">
                    <img className="img-logo" src={autoPass}/>    
                </div>
                <div className="input-search">
                    <input type="text" onChange={this.handleInputChange}/>
                    <span className="fas fa-search"></span>
                </div>
            </div>
        )
    }
}

export default Search