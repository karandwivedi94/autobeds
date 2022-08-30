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
            <div className = "videoPanel">
                <VideoPanel/>
            </div>
            <div className = "customerReviews">
                <CustomerReviews/>
            </div>
            <div className = "newsletterIndex">
                <NewsletterIndex/>
            </div>
            <div className = "footer">
                <Footer/>
            </div>
            </div>
            
            </div>

        )
    }
}

export default Home;