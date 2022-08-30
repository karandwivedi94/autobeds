import React, { Component } from 'react'; // destructuring
import Home from './Home';

import {Link} from 'react-router-dom';


class Banner extends Component{
    constructor(){
        super();
    }

    render(){
        return(

            <header> 
                   <div className="subscribeButton"><h2> <Link to="/Subscribe"> Subscribe Now </Link>and get a free 3 week trial! </h2>
                   </div> 
                   </header>


            
            
        )
    }
}

export default Banner;