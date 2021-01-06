import './App.css';
import Card from './Card.js'
import React from 'react'
import {rigtArrow as rigtArrows} from'./right-arrow.svg'
import leftArrow from'./left-arrow.svg'


class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoaded:false,
      data:[],
    }
    this.counter=1
    this.nextBeer=this.nextBeer.bind(this)
    this.previousBeer=this.previousBeer.bind(this)
  }
  getUrl(){
   return `https://api.punkapi.com/v2/beers/${this.counter}`
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
    <div className="app-container">
      <img className="svg-button" onClick={this.previousBeer} src={leftArrow} alt="previous" height='100px'/>
      {this.state.isLoaded ? <Card item={this.state.data}/> : <p>is Loading...</p>}
      <rigtArrows onClick={this.nextBeer} />
    </div>
    )
  }
}

export default App;
