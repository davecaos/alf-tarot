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

const tarotBuilder = () => {
  return function tarotFactory(props) {
    return <Tarot />;
  }
}
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      play: true,
      carta: null,

    }

    let audio = new Audio(process.env.PUBLIC_URL +'/alf-series-tv.mp3');
    audio.play();
  }

  handleButtonClick(event) {
    let flippy = tarotBuilder();
    this.setState({ flippy: flippy});
  }

  componentWillMount() {
    let defaultFlippy = tarotBuilder();
    this.setState({ flippy: defaultFlippy});
  }

  render() {
    let TarotCards = this.state.flippy
    return (
      <div class="container">
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
