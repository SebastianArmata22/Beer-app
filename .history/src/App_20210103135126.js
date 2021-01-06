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
  render(){
    return( <div>
      {this.state.isLoaded ? <Card /> : <p>is Loading...</p>}
    </div>
    )
  }
}

export default App;
