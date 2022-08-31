import React, { Component } from 'react'; // destructuring
import Home from './Home'


class NewsletterIndex extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="footer">
             <div className="footerLeft">
             <h4> Shop</h4> 
             <h4> How it works</h4> 
             <h4> Contact </h4> 
             </div>
             <h4 className= "emailContact"> smartbed@gmail.com</h4> 
             <div className ="socialLogos">
             <img className="youtubeIcon" src="/youtube.png" alt="Image of a bed with EZ Bed branding" /> | <img src="/facebook.png" alt="Image of a bed with EZ Bed branding" /> | <img src="/instagram.png" alt="Image of a bed with EZ Bed branding" />
             </div>

             </div>
            
        )
    }
}

export default NewsletterIndex;