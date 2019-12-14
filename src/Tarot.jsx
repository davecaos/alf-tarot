import React, { Component } from 'react';
import TarotCard from './TarotCard';

const style= { 
  display: 'flex',
  flexDirection: 'row',
  width: '60%',
  margin: 'auto'
 }

 function Tarot()  {

    let cardArray =  [ 
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
    ];

    const chooseCardFromDeck = (array) => {
      return array[Math.floor((Math.random() * array.length))];
    }
    
    const removeElement = (array, element) => {
      return array.filter((value, index, arr) => {
        return value !== element;
      });
    }
  
    let firstCard = chooseCardFromDeck(cardArray);
    let secondArray = removeElement(cardArray, firstCard);

    let secondCard = chooseCardFromDeck(secondArray);
    let thirdArray = removeElement(cardArray, secondCard);

    let thirdCard = chooseCardFromDeck(thirdArray);



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

export default Tarot;
