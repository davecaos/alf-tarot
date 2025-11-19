import React, { Component } from 'react';
import Tarot from './Tarot'
import './App.css';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      flippy: null,
      iconRotation: 0,
    }
  }

  handleButtonClick(event) {
    let flippy = () =>{return Tarot()};
    this.setState((prevState) => ({
      flippy: flippy,
      iconRotation: prevState.iconRotation + 180,
    }));
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
          className="shuffle-btn"
          onClick={this.handleButtonClick.bind(this)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${this.state.iconRotation}deg)`, transition: 'transform 0.4s ease' }}>
            <polyline points="16 3 21 3 21 8"></polyline>
            <line x1="4" y1="20" x2="21" y2="3"></line>
            <polyline points="21 16 21 21 16 21"></polyline>
            <line x1="15" y1="15" x2="21" y2="21"></line>
            <line x1="4" y1="4" x2="9" y2="9"></line>
          </svg>
          Shuffle the Deck
        </button>
      </div>
       
    );
  }
}

export default App;
