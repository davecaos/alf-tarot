import React, { Component } from 'react';


import './App.css';

import Flippy, { FrontSide, BackSide } from 'react-flippy';
const backSideImage = '34.jpg';

let  cardArray = [];

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      firstCard : 0, 
      secondCard : 0,
      thirdCard : 0,
      play: true
    }
    let audio = new Audio('/alf-series-tv.mp3');

    this.ramdom()

    audio.play();
  }

  ramdom(){

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
  
    this.state.firstCard = chooseCard(cardArray);
    cardArray = removeElement(cardArray, this.state.firstCard);
    this.state.secondCard = chooseCard(cardArray);
    cardArray = removeElement(cardArray, this.state.secondCard);
    this.state.thirdCard = chooseCard(cardArray);
  }


  renderCard(frontSideImage) {
    return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
      style={{ width: '277px', height: '440px' }} /// these are optional style, it is not necessary
    >
      <FrontSide
        style={{
          backgroundColor: '#4B0082',
          borderStyle: 'solid'
        }}
      >

        <img src={'/' + backSideImage} style={{ maxWidth: '100%', maxHeight: '100%' }}/>

      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#4B0082',
          borderStyle: 'solid'
        }}>

        <img src={ '/' + frontSideImage + '.jpg'} style={{ maxWidth: '100%', maxHeight: '100%' }} />

      </BackSide>
    </Flippy>);
  }

  render() {

    return (
      //<audio src={{mp3_file}} controls autoPlay/>
 
 

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
      </div>
       

    );
  }
}

export default App;
