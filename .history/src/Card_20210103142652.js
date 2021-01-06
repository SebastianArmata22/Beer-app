import React from 'react'

function Card(props){
    console.log(props.item[0].image_url)
        return(
        <div>
            <img src={props.item[0].image_url} alt="img"></img>
            <h2>{props.item[0].name}</h2>
            <p>{props.item[0].tagline}</p>
            <p>{props.item[0].description}</p>
        </div>
        )
}

export default Card;