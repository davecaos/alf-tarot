import React, { Component } from 'react';
import Emoji from './Emoji'


import './App.css';

import Flippy, { FrontSide, BackSide } from 'react-flippy';
const backSideImage = '34.jpg';



const cardStyle ={
  backgroundColor: '#4B0082',
  borderStyle: 'solid'
};

const buttonStyle ={
  backgroundColor: '#4B0082',
  borderStyle: 'solid',
  color: 'white',
  display: 'table',
   margin:  'auto',
   padding:20
};


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      firstCard : 0, 
      secondCard : 0,
      thirdCard : 0,
      play: true,
      carta: null
    }
    let audio = new Audio('/alf-series-tv.mp3');

    this.shuffle()

    audio.play();
  }

  shuffle(){
    let cardArray = [];

    let chooseCard = ( array) =>{
      let ramdonCard = Math.floor((Math.random() * array.length) + 1);
      return ramdonCard;
    }

    var removeElement = ( array, element) => {
        return array.filter((value, index, arr) => {
          return value !== element;
        });
    }

    for(let i = 1; i <= 32; i++){
      cardArray.push(i);
    }
  
    let firstCard = chooseCard(cardArray);
    cardArray = removeElement(cardArray, this.state.firstCard);
    this.state.secondCard = chooseCard(cardArray);
    cardArray = removeElement(cardArray, this.state.secondCard);
    this.state.thirdCard = chooseCard(cardArray);
    this.setState({ firstCard: firstCard });
  }


  renderCard(frontSideImage) {
    return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={(r) => this.flippy = r} 
      style={{ width: '277px', height: '440px' }} 
    >

      <FrontSide style={{cardStyle}}>
        <img src={'/' + backSideImage} style={{ maxWidth: '100%', maxHeight: '100%' }}/>
      </FrontSide>

      <BackSide style={{cardStyle}}>
        <img src={ '/' + frontSideImage + '.jpg'} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </BackSide>

    </Flippy>);

  }

  handleButtonClick(event) {
    event.preventDefault();
      this.shuffle();
    };

  render() {
    

    return (
      <div class="container">
        <div class="row">
          <div class="col order-last">
          {this.renderCard(this.state.firstCard)}
          </div>
          <div class="col">
          {this.renderCard(this.state.secondCard)}
          </div>
          <div class="col order-first">
          {this.renderCard(this.state.thirdCard)}
          </div>
          
        </div>
        <button style={buttonStyle} className={"btn btn-secondary btn-lg"} onClick={this.handleButtonClick.bind(this)}> Shuffle <Emoji symbol="🔁"/></button>
      </div>
       

    );
  }
}

export default App;
