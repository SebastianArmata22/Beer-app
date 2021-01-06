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
  }
  getDateFromApi(url){
    fetch(url)
    .then(response=>response.json())
    .then(dataApi=>this.setState({
      isLoaded: true,
      data: dataApi}))
  }
  componentDidMount(){
    getDateFromApi('https://api.punkapi.com/v2/beers/1');
  }
  render(){
    return( <div>
      {this.state.isLoaded ? <Card /> : <p>is Loading...</p>}
    </div>
    )
  }
}

export default App;