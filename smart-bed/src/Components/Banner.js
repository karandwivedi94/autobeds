import React, { Component } from 'react'; // destructuring
import Home from './Home'
import { Link } from 'react-router-dom';



class Banner extends Component{
    constructor(){
        super();
    }

    render(){
        return(

            <header> <h1> Get 3 weeks free if you trial SmartSleep!</h1> 
                   <div className="subscribeButton"> 
                   <Link to="/Subscribe">Subscribe Now</Link>and get a free 3 week trial!</div>
            </header>
            
        )
    }
}

export default Banner;