import React from 'react'
import './Card.css'
function Card(props){
    console.log(props)
        return(
        <div className="card">
            <img className="photo-beer" src={props.item[0].image_url} alt="img"></img>
            <h2>{props.name}</h2>
            <p>{props.tagline}</p>
            <p>{props.description}</p>
        </div>
        )
}

export default Card;