import React, { Component } from 'react'; // destructuring
import Home from './Home'



class Banner extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <header> 
                   <div className="subscribeButton"><h2> <a href='#'>Subscribe Now </a> and get a free 3 week trial! </h2></div> 
            </header>
            
        )
    }
}

export default Banner;