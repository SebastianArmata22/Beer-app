import React from 'react'
import './Card.css'
function Card(props){
    console.log(props)
        return(
        <div className="card">
            <div className="photo-card">
                <img className="photo-beer" src={props.item.image_url} alt="img"></img>
                <h2>{props.item.name}</h2>
            </div>
            <p className="text-card"><b>Tagline: </b> {props.item.tagline}</p>
            <p className="text-card"><b>Deskription: </b>{props.item.description}</p>
        </div>
        )
}

export default Card;