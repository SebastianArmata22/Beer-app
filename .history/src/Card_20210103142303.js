import React from 'react'

function Card(props){
    console.log(props.item)
        return(
        <div>
            <img src={props.item.image_url} alt="img"></img>
        </div>
        )
}

export default Card;