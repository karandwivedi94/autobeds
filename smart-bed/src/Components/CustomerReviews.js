import React, { Component } from 'react'; // destructuring
import Home from './Home'


class CustomerReviews extends Component{
    constructor(){
        super();
    }

    render(){
        return(<div>
             <h1> Customer Reviews </h1> 
             <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>

<h3> "Thank you! Everything has been operating smoothly and we love the product." </h3>
<h3>James</h3>
<hr></hr>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>

<h3> “The quality is second to none. I just want to say thanks to all of the men and women at SmartBed. I know how much work goes into a project like this. Many thanks again!" </h3>
<h3>Andre S</h3>

</div>            
        )
    }
}

export default CustomerReviews;