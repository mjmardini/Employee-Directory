import React, { Component } from 'react';
import './card.css'

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
            items: []
        };
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
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
                <img src={this.props.img} alt={this.state.name}/><br />
                <label>Name:</label> {this.state.fname} {this.state.lname}<br />
                <label>Age:</label> {this.state.dob}<br />
                <label>Phone:</label> {this.state.phone}<br />
                **isLoaded**: {this.state.isLoaded? "true" : "false"}
            </div>
        )
    }
}

export default EmployeeCard