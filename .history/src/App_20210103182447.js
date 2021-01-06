import './App.css';
import Card from './Card.js'
import React from 'react'


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
       <button onClick={this.previousBeer}>Previous</button>
      {this.state.isLoaded ? <Card item={this.state.data}/> : <p>is Loading...</p>}
      <button onClick={this.nextBeer}>Next</button>
      <img src='./right-arrow.svg' alt="next/>
    </div>
    )
  }
}

export default App;
