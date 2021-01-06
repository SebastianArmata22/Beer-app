import React from 'react'

function Card(props){
    console.log(props.item[0])
        return(
        <div>
            <img src={props.item.image_url} alt="img"></img>
        </div>
        )
}

export default Card;