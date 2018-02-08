import React, { Component } from 'react';
import './card.css';
import EmployeeLogo from '../employee.svg';

    /*
        todo: add pagination in algolia api
    */

class EmployeeCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname: "J",
            lname: "Doe",
            dob: "24/11/2018",
            phone: "(515)-213-2213",
            isLoaded: false,
            img: {EmployeeLogo}
        };
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        fname: result.results[0].name.first,
                        lname: result.results[0].name.last,
                        dob: result.results[0].dob,
                        phone: result.results[0].phone,
                        img: result.results[0].picture.large
                    });
            },
            (error) => {
                this.setState({
                    isLoaded: false,
                    error
                });
            }
        )
    }
    render(){
        return(
            <div className = 'card'>
                <img src={this.state.img} alt={this.state.fname}/><br />
                <label>Name:</label> {this.state.fname} {this.state.lname}<br />
                <label>Age:</label> {this.state.dob}<br />
                <label>Phone:</label> {this.state.phone}<br />
                **isLoaded**: {this.state.isLoaded? "true" : "false"}
            </div>
        )
    }
}

export default EmployeeCard