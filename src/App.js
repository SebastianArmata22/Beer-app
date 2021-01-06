import './App.css';
import Card from './Card.js'
import React from 'react'
import rigtArrow from'./right-arrow.svg'
import leftArrow from'./left-arrow.svg'


class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoaded:false,
      data:[],
      isNext:true
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
    this.getDateFromApi(this.getUrl())
    this.setState({isNext:true})
  }
 previousBeer(){
    this.setState({isLoaded: false})
    this.counter>1 && this.counter--
    this.getDateFromApi(this.getUrl());
    this.setState({isNext:false})
  }
  componentDidMount(){
    this.getDateFromApi(this.getUrl());
  }
  render(){
    return(
        <div className="app-container">
        <img className="svg-button" onClick={this.previousBeer} src={leftArrow} alt="previous" height='100px'/>
        {this.state.isLoaded ? <Card item={this.state.data} isNext={this.state.isNext} /> : <div className="card load-div">is Loading...</div>}
        <img className="svg-button" onClick={this.nextBeer} src={rigtArrow} alt="next" height='100px' />
        </div>

    )
  }
}

export default App;
