import React, { Component } from 'react';
import TarotCard from './TarotCard';

const removeElement = (array, element) => {
  return array.filter((value, index, arr) => {
    return value !== element;
  });
}
const style= { 
  display: 'flex',
  flexDirection: 'row',
  width: '60%',
  margin: 'auto'
 }

 const deckSize = 32;

const chooseCard = (array) => {
  return array[Math.floor((Math.random() * array.length) + 1)];
}

class Tarot extends Component {

  constructor(props) {
    super(props);
    
    let cardArray =  Array.from(new Array(deckSize),(val,index)=>index+1);

    let firstCard = chooseCard(cardArray);
    cardArray = removeElement(cardArray, firstCard);

    let secondCard = chooseCard(cardArray);
    cardArray = removeElement(cardArray, secondCard);

    let thirdCard = chooseCard(cardArray);

    this.state = {
      firstCard,
      secondCard,
      thirdCard
    }
  }



  render() {

    const { firstCard, secondCard, thirdCard } = this.state;

    return (
        <div class="row" style={{style}}>
          <div class="col order-last" >
            <TarotCard backSideImage={firstCard}/>
          </div>
          <div class="col">
            <TarotCard backSideImage={secondCard}/>
          </div>
          <div class="col order-first">
            <TarotCard backSideImage={thirdCard}/>
          </div>
        </div>
    );
  }
}

export default Tarot;
