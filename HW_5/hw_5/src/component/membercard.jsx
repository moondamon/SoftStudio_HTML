import { useState } from 'react';
import './style.css';
import Vote from "./vote";

function Membercard(props){
    return(
      <div className="card-container">
        <div className="card-flex">
          <div className="card-detail">
            <h1>{props.firstname} {props.lastname}</h1>
            <h2>{props.id}</h2>
            <div dangerouslySetInnerHTML={{ __html: props.des }}>
            </div>
          </div>
          <div className="card-image">
            <img src={props.image} alt={props.firstname}/>
          </div>
          </div>
          <div className="card-button">
            <Vote />
          </div>
      </div>
      
       
    );
}

export default Membercard