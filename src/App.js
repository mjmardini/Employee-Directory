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
    auto add employees? how to access employeeData from App component? so i can use .map function.
*/

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            results: []
        };
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/?results=40")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        results: result.results
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
    render() {
        return (
            <div className="App">
                    <header className="App-header">
                        <img src={EmployeeLogo} className="App-logo"/>
                        <h1 className="App-title">Employee Directory</h1>
                    </header>
                    <Searchbar />
                    {this.state.isLoaded ?
                        this.state.results.map((results) =>
                            <EmployeeCard fname={results.name.first}
                                lname={results.name.last}
                                dob={results.dob}
                                phone={results.phone}
                                img={results.picture.large}
                            />

                    ) : <h1>Loading...</h1>}
            </div>
        );
    }
}

export default App;
