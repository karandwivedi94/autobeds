import React, { Component } from 'react'; // destructuring
import Home from './Home'


class CustomerReviews extends Component{
    constructor(){
        super();
    }

    render(){
        return(<div>

             <h2>Customer Reviews</h2> 

             <span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>

<h3> "Thank you! Everything has been operating smoothly and we love the product." </h3>
< br/
 >
<h3>James</h3>
<hr></hr>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>

<h3> “The quality is second to none. I just want to say thanks to all of the men and women at SmartBed. I know how much work goes into a project like this. Many thanks again!" </h3>
<h3 className="author" >Andre S</h3>

</div>            
        )
    }
}

export default CustomerReviews;