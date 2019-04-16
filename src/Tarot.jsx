import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const backSideImage = '34.jpg';
const cardStyle ={
  backgroundColor: '#4B0082',
  borderStyle: 'solid'
};

class Tarot extends Component {

  constructor(props){
    super(props);

    this.state = {
      firstCard : 0, 
      secondCard : 0,
      thirdCard : 0,
      play: true,
      carta: null
    }

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
    let secondCard = chooseCard(cardArray);
    cardArray = removeElement(cardArray, this.state.secondCard);
    let thirdCard = chooseCard(cardArray);
    this.setState({ firstCard: firstCard, secondCard: secondCard , thirdCard: thirdCard});
  }

  componentWillMount(){
    this.shuffle()
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
        <img src={process.env.PUBLIC_URL + '/' + backSideImage} style={{ maxWidth: '100%', maxHeight: '100%' }}/>
      </FrontSide>

      <BackSide style={{cardStyle}}>
        <img src={ process.env.PUBLIC_URL +'/' + frontSideImage + '.jpg'} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </BackSide>

    </Flippy>);

  }


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
      </div>
    );
  }
}

export default Tarot;
