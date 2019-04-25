import React, { Component } from "react";
import Information from './Information'
import './CompanyInformations.css'
import onibus from '../../img/onibus.png'
import localizacao from '../../img/localização.png'
import catraca from '../../img/catraca.png'

class CompanyInformation extends Component{

    render(){
        return(
            <div className="divInformations">
                <Information 
                    title="Frotas"
                    image={onibus} 
                    information={this.props.company.frota} />
                <Information 
                    title="Garagem"
                    image={localizacao}
                    information={this.props.company.garagem}/>
                <Information 
                    title="Total Catracadas"
                    image={catraca}
                    information={this.props.company.totalCatracadas} />
            </div>
        );
    }

}

export default CompanyInformation