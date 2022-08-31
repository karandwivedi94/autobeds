import React, { Component } from 'react'; // destructuring
import Banner from './Banner'
import Nav from './Nav'
import BrandMarketing from './BrandMarketing'
import VideoPanel from './VideoPanel'
import CustomerReviews from './CustomerReviews'
import NewsletterIndex from './NewsletterIndex'
import Footer from './Footer'
import './home.css';

class Home extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className = "body">
            <div className = "banner">
                <Banner />
            </div>
            <div className ="nav">
                <Nav />
            </div>
            <div className = "container">
            <div className = "brandMarketing">
                <BrandMarketing/>
            </div>
            <hr></hr>
            <div className = "videoPanel">
                <VideoPanel/>
            </div>
            <div className = "customerReviews">
                <CustomerReviews/>
            </div>
          <hr></hr>
            <div className = "footer">
                <Footer/>
            </div>
            <hr></hr>
            <div className = "newsletterIndex">
                <NewsletterIndex/>
            </div>
           
            </div>
            
            </div>

        )
    }
}

export default Home;
