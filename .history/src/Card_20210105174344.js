import React from 'react'
import './Card.css'
function Card(props){
    console.log(props)
        return(
        <div className="card">
            <div className="photo-card">
                <img className="photo-beer" src={props.item[0].image_url} alt="img"></img>
                <h2>{props.item[0].name}</h2>
            </div>
            <p className="text-card"><b>Tagline: </b> {props.item[0].tagline}</p>
            <p className="text-card"><b>Deskription: </b>{props.item[0].description}</p>
            <p className="text-card"><b>First brewed: </b>{props.item[0].first_brewed}</p>
            <p className="text-card"><b>ABV: </b>{props.item[0].abv}%</p>
        </div>
        )
}

export default Card;