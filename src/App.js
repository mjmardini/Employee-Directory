import React, { Component } from 'react';
import './App.css';

/*Component Imports*/
import EmployeeLogo from './employee.svg'
import Searchbar from './searchBar/Searchbar';
import EmployeeCard from './Employee Card/Employeecard'
import Header from './header/header'
import Footer from './footer/footer'

/*
    todo: add animation in css or api. *setTimeout for loading...*
*/

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <header className="App-header">
                    <img src = {EmployeeLogo} class = "App-logo"/>
                    <h1 className="App-title">Employee Directory</h1>
                </header>
                <Searchbar />
                <EmployeeCard img={EmployeeLogo}/>
                <EmployeeCard img={EmployeeLogo}/>
                <EmployeeCard img={EmployeeLogo}/>
                <EmployeeCard img={EmployeeLogo}/>
            </div>
        );
    }
}

export default App;
