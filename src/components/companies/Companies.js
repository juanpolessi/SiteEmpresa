import React, { Component } from "react";
import ImgCompany from './ImgCompany'
import Modal from '../Modal/Modal';
import "./Companies.css"; 

class Companies extends Component {

  constructor(props) {
    super(props);

    this.state = { isOpen: false, company: null };
  }

  toggleModal  = (companyId) => {
    this.setState({
      company: this.props.companyList.find(company => company.id === companyId),
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { company } = this.state

    return (
      <div className="boxContent">
        <div className="boxCompany">
          { this.props.companyList.map(company => (            
            <div key={company.id} className="company" onClick={() => { this.toggleModal(company.id)}}>
              <ImgCompany image={company.image}/>
              <h1>{company.nameCompany}</h1>             
            </div>            
          ))}
        </div>
          {
            !company
            ? ''
            : 
              <Modal show={this.state.isOpen}
                   onClose={this.toggleModal}
                   company={company}>                   
              </Modal>   
          }
      </div>
    );
  }
}

export default Companies;

