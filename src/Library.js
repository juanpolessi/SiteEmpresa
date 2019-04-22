import React, { Component } from "react";
import Companies from "./components/companies/Companies";
import Search from  "./components/search/Search"
import company from "./helpers/companies"

import './Library.css'

class Library extends Component {

  state = {
    nameCompany: ''
  }

  handleOncompaniesChange = nameCompany => this.setState({ nameCompany })
  
  render() {
    const { nameCompany } = this.state
    const companies = company

    const showingCompanies = nameCompany.length === 0
                              ? companies
                              : companies.filter(company => company.nameCompany.toUpperCase().indexOf(nameCompany.toUpperCase()) !== -1)
    
    return (
      <div className="library">
        <Search 
          companyList={showingCompanies} 
          onCompanyChange={this.handleOncompaniesChange}/>
        <Companies companyList={showingCompanies}/>
      </div>
    );
  }
}

export default Library;
