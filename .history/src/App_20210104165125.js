import './App.css';
import React from 'react'
import rigtArrow from'./right-arrow.svg'
import leftArrow from'./left-arrow.svg'
import CardStack, { Card } from 'react-native-card-stack-swiper';

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
    <div className="app-container">
    <CardStack style={styles.content} ref={swiper => { this.swiper = swiper }}>
    {this.state.data.map(beer=><Card style={[styles.card, styles.card2]}><Text style={styles.label}>{beer}</Text></Card>)}
    </CardStack>
  </div>
    )
  }
}

export default App;