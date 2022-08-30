import React, { Component } from 'react'; // destructuring
import Home from './Home'


class BrandMarketing extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className = "brandMarketing">
             <h1> Bed Making Made Easy</h1> 
             <h2> Control & Comfort</h2> 
             <h3>Buy Now</h3>
             </div>
            
        )
    }
}

export default BrandMarketing;