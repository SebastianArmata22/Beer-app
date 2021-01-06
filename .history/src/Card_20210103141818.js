import React from 'react'

function Card(props){
    console.log(props.image_url)
        return(
        <div>
            <img src={props.image_url} alt="img"></img>
        </div>
        )
}

export default Card;