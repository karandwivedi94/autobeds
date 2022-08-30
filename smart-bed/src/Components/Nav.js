import React, { Component } from 'react'; // destructuring
import Home from './Home'


class Nav extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <nav>
                <div className ="navLeft">
                <img src="/Logo.png" alt="Image of a bed with EZ Bed branding" />

                </div>
                <div className = "navRight">
            <a href="#">Shop</a>|
            <a href="#"> How it Works</a>|<a href="#"> Contact</a>
            </div>
            <div className = "user">
                <h1>User</h1>

            </div>
        </nav>
            
        )
    }
}

export default Nav;