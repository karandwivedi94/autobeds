import React, { Component } from 'react'; // destructuring
import Home from './Home'


class Banner extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <header> <h1> Get 3 weeks free if you trial SmartSleep!</h1> 
                   <div className="subscribeButton"><h2> <a href='#'>Subscribe Now </a>  </h2></div> 
            </header>
            
        )
    }
}

export default Banner;