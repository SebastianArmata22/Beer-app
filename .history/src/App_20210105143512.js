import './App.css';
import Card from './Card.js'
import React from 'react'
import rigtArrow from'./right-arrow.svg'
import leftArrow from'./left-arrow.svg'
import ReactSwipe from 'react-swipe';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoaded:false,
      data:[],
    }
    this.counter=1
    this.reactSwipeEl=null;
    this.nextBeer=this.nextBeer.bind(this)
    this.previousBeer=this.previousBeer.bind(this)
  }
  getUrl(){
   return `https://api.punkapi.com/v2/beers/`
  }
  getDateFromApi(url){
    fetch(url)
    .then(response=>response.json())
    .then(dataApi=>this.setState({
      isLoaded: true,
      data: dataApi}))
  }
  nextBeer(){
    this.setState({isLoaded: false})
    this.counter<325 && this.counter++
    this.getDateFromApi(this.getUrl());
  }
 previousBeer(){
    this.setState({isLoaded: false})
    this.counter>1 && this.counter--
    this.getDateFromApi(this.getUrl());
  }
  componentDidMount(){
    this.getDateFromApi(this.getUrl());
  }
  render(){
    return(
      
    <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (this.reactSwipeEl = el)}
      >
        {this.state.data.map(card => <Card item={card} key={card.id}/>)}
      </ReactSwipe>
       
    )
  }
}

export default App;
