import React, { Component } from 'react';
import './card.css';

    /*
        todo: add pagination in algolia api
    */

class EmployeeCard extends Component {
    render(){
        return(
            <div className = 'card'>
                    <img src={this.props.img} alt={this.props.fname}/><br />
                    <label>Name:</label> {this.props.fname} {this.props.lname}<br />
                    <label>Date of Birth:</label> {this.props.dob}<br />
                    <label>Phone:</label> {this.props.phone}<br />
            </div>
        )
    }
}

export default EmployeeCard