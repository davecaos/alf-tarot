import React, { Component } from 'react';


import './App.css';

import Flippy, { FrontSide, BackSide } from 'react-flippy';
const backSideImage = '38.jpg';

class App extends Component {

  renderCard(frontSideImage) {
    return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
      style={{ width: '252px', height: '400px' }} /// these are optional style, it is not necessary
    >
      <FrontSide
        style={{
          //backgroundColor: '#41669d',
          borderStyle: 'solid'
        }}
      >

        <img src={process.env.PUBLIC_URL + backSideImage} style={{ maxWidth: '100%', maxHeight: '100%' }}/>

      </FrontSide>
      <BackSide
        style={{
          borderStyle: 'solid'
        }}>

        <img src={process.env.PUBLIC_URL + frontSideImage } style={{ maxWidth: '100%', maxHeight: '100%' }}/>

      </BackSide>

      </Flippy>);
  }

  render() {
    return (
      //<audio src={{mp3_file}} controls autoPlay/>
 
        <div  class="container4" >
          <p>
            <div style={{ display : 'flex'}}>
              {this.renderCard('02.jpg')}
              {this.renderCard('03.jpg')}
              {this.renderCard('04.jpg')}
            </div>
          </p>
        </div>

    );
  }
}

export default App;
