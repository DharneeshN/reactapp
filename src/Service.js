/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Service(props) {
    

    return(
        <div className = "card" >
            <div >
               <img src={props.image} className="card-Image" />
            </div>
            <h1 className ="card-title">{props.title}</h1>
            <p className="card-desc">
                {props.desc}
            </p>
            <p className ="card-parent"> 
            <button  className="card-btn">
                Read more
            </button>
            </p>
        </div>
        
    )

}

export default Service;