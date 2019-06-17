import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const PUBLIC_URL = process.env.PUBLIC_URL;
const frontSideImage = PUBLIC_URL + '/frontSideImage.jpg';

class TarotCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      backSideImage: PUBLIC_URL + '/' + this.props.backSideImage  + '.jpg'
    }
  }

  render() {
    return (
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => this.flippy = r}
        style={{ width: '277px', height: '440px' }} 
      >

        <FrontSide >
          <img src={ frontSideImage} alt="front" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </FrontSide>

        <BackSide >
          <img src={this.state.backSideImage} alt="back" style={{ maxWidth: '100%', maxHeight: '100%' }}  />
        </BackSide>

      </Flippy>
    );
  }
}

export default TarotCard;
