import React, { Component } from 'react';
//import 'bootstrap.min.css';

class Header extends Component {
    /*
        todo: add css, create links and router for pages
    */
  render() {
    return (
      <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Employees</a></li>
                <li><a href="#">Create</a></li>
                <li><a href="#">Update</a></li>
                <li><a href="#">Delete</a></li>
                <li><a href="#">Contact & contact</a></li>
            </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
