import React, { Component } from 'react';
import './App.css';

/*Component Imports*/
import Searchbar from './searchBar/Searchbar';
import EmployeeLogo from './employee.svg';
import EmployeeCard from './Employee Card/Employeecard'
import Header from './header/header'
import Footer from './footer/footer'

/*
    todo: add animation in css or api. *setTimeout for loading...*
    auto add employees?
*/

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src = {EmployeeLogo} class = "App-logo"/>
                    <h1 className="App-title">Employee Directory</h1>
                </header>
                <Searchbar />
                <EmployeeCard/>
                <EmployeeCard/>
                <EmployeeCard/>
                <EmployeeCard/>
            </div>
        );
    }
}

export default App;
