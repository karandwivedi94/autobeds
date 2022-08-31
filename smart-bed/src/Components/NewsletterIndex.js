import React, { Component } from 'react'; // destructuring
import Home from './Home'


class NewsletterIndex extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
             <div className="footerLeft">
             <h4> Shop</h4> 
             <h4> How it works</h4> 
             </div>

             <div id = "footerRight">

            <h4>Contact</h4>   
            <h4>smartbed@gmail.com</h4>  
             </div>

             </div>
            
        )
    }
}

export default NewsletterIndex;