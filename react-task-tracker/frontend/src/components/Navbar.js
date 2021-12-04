import React, { Component } from 'react';
import logo from '../images/food-icon.png';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };
    render() {
        return (
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">FOODIE
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>

                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="/reserve">Reserve Table</a>
                        <a class="nav-item nav-link" href="/register">Register</a>
                        <a class="nav-item nav-link disabled" href="#">Login</a>
                    </div>
                </div>
            </nav>
            
            /*
            <nav className = "navbar">
                <div className = "nav-center1">
                    <div className = "nav-header1">
                        <Link to= "/">
                        <img src={logo} alt = "Beach Resort" />
                        </Link>
                        <button 
                        type="button" 
                        className="nav-btn"
                        onClick={this.handleToggle}
                        >
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav": "nav-links"} >
                        <li>
                            <Link to ="/">Home</Link>
                        </li>
                        <li>
                            <Link to ="/reserve">Reserve Table</Link>
                        </li>
                        <li>
                            <Link to ="/register">Register</Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
            */
        )
    }
}
