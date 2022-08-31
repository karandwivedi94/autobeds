import React, { Component } from 'react'; // destructuring
import Home from './Home'


class Footer extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div id="footer-subscribe">
                <h1>Subscribe to our Newsletter</h1> 
                <h4>Get new product arrivals updates, latest offers delivered straight to your inbox</h4>
                <button>
                    Subscribe
                </button>
            </div>
        )
    }
}

export default Footer;