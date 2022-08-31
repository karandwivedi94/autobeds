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

             <div className = "footerRight">

                Test
             </div>

             </div>
            
        )
    }
}

export default NewsletterIndex;