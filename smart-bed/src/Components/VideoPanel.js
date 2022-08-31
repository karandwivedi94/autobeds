import React, { Component } from 'react'; // destructuring
import Home from './Home'


class VideoPanel extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
            <div className='container' id="video-section">

                <h1>Never Make your Bed Again</h1> 
                <h3>SmartBed offers you the latest innovation to  have you sleeping in perfect comfort every night without having to worry about making the bed in the morning
                <button>
                    Learn More
                </button>
                </h3>
                        
            </div>
            <img className= "bedGif" src="/bedGif.gif" alt="Image of a bed with EZ Bed branding"  />
            </div>
        )
    }
}

export default VideoPanel;