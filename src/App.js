import React, { Component } from 'react';
import Emoji from './Emoji'
import Tarot from './Tarot'
import './App.css';

const buttonStyle ={
  backgroundColor: '#4B0082',
  borderStyle: 'solid',
  color: 'white',
  display: 'table',
  margin: 'auto',
  padding: 20
};


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      flippy: null,
    }
  }

  handleButtonClick(event) {
    let flippy = () =>{return Tarot()};
    this.setState({ flippy: flippy});
  }

  componentWillMount() {
    let defaultFlippy = () =>{return Tarot()};
    this.setState({ flippy: defaultFlippy});
  }

  render() {
    let TarotCards = this.state.flippy
    return (
      <div className="container">
        <TarotCards/>
        <button 
          style={buttonStyle} 
          className={"btn btn-secondary btn-lg"} 
          onClick={this.handleButtonClick.bind(this)}> 
          Shuffle
          <Emoji symbol="🔁"/>
        </button>
      </div>
       
    );
  }
}

export default App;
