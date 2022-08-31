import React, { Component } from 'react'; // destructuring
import Home from './Home'
import {Link} from 'react-router-dom';


class Footer extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div id="footer-subscribe">
                <h1>Subscribe to our Newsletter</h1> 
                <h4>Get new product arrivals updates, latest offers delivered straight to your inbox</h4>
                
                <Link to="/Subscribe"> <button >
                    Subscribe
                </button> </Link>
            </div>
        )
    }
}

export default Footer;