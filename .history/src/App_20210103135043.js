import './App.css';
import Card from './Card.js'
import React from 'react'
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoaded:true,
      data:[],
    }
  }
  render(){
    return( <div>
      {this.state.isLoaded ? <p>is Loading...</p> : <Card />}
    </div>
    )
  }
}

export default App;
