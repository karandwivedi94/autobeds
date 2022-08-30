import React, { Component } from 'react'; // destructuring
import Home from './Home'


class BrandMarketing extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className = "brandMarketing">
                <img src="/BannerImage1.jpg" alt="Image of blue bed" />
             <div className="bannerHeading">Bed Making Made Easy</div> 
            <div className="bannerSubHeading">Control & Comfort at your finger tips </div>  
        <div className="actualButton"> <button> Buy Now  </button> </div>  
             </div>
            
        )
    }
}

export default BrandMarketing;

