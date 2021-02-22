import React from 'react'
import './Card.css'
import { bounceInRight } from 'react-animations';
import { bounceInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


function Card(props){
    
    let way= props.isNext===true ? bounceInRight : bounceInLeft
    let styles = {
        bounce: {
          animation: 'x 1s',
          animationName: Radium.keyframes(way, 'bounce')
        }
      }
    console.log(props)
        return(
        <StyleRoot>
        <div className="card" style={styles.bounce}>
            <div className="photo-card">
                <img className="photo-beer" src={props.item[0].image_url} alt="img"></img>
                <h2>{props.item[0].name}</h2>
            </div>
            <p className="text-card"><b>Tagline: </b> {props.item[0].tagline}</p>
            <p className="text-card"><b>Description: </b>{props.item[0].description}</p>
            <p className="text-card"><b>First brewed: </b>{props.item[0].first_brewed}</p>
            <p className="text-card"><b>ABV: </b>{props.item[0].abv}%</p>
        </div>
        </StyleRoot>
        )
}

export default Card;