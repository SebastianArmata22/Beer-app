import React from 'react'
import './Card.css'
function Card(props){
        return(
        <div className="card">
            <img className="photo-beer" src={props.item[0].image_url} alt="img"></img>
            <h2>{props.card.name}</h2>
            <p>{props.card.tagline}</p>
            <p>{props.card.description}</p>
        </div>
        )
}

export default Card;