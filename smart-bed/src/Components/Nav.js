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
                <img src="/LogoIcon.png" alt="Image of a bed with EZ Bed branding" />

                </div>
                <div className = "navRight">
            <a href="#">Shop</a>|
            <a href="#"> How it Works</a>|<a href="#"> Contact</a>
            </div>
            <div className = "user">
            <img src="/UserIcon.png" alt="Image of a bed with EZ Bed branding" />

            </div>
        </nav>
            
        )
    }
}

export default Nav;