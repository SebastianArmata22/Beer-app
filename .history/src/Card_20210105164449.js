import React from 'react'
import './Card.css'
function Card(props){
        return(
        <div className="card">
            <div className="photo-card">
                <img className="photo-beer" src={props.item[0].image_url} alt="img"></img>
                <h2>{props.item[0].name}</h2>
            </div>
            <p className="text-card"><b>Tagline: </b> {props.item[0].tagline}</p>
            <p className="text-card"><b>Deskription: </b>{props.item[0].description}</p>
        </div>
        )
}

export default Card;