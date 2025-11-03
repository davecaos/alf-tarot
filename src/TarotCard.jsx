import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const PUBLIC_URL = process.env.PUBLIC_URL;
const frontSideImage = PUBLIC_URL + '/frontSideImage.jpg';

class TarotCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      backSideImage: PUBLIC_URL + '/' + this.props.backSideImage  + '.jpg',
      isZoomed: false,
      isMobile: window.innerWidth <= 768
    }

    this.handleResize = this.handleResize.bind(this);
    this.handleZoomClick = this.handleZoomClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ isMobile: window.innerWidth <= 768 });
  }

  handleZoomClick() {
    if (this.state.isMobile) {
      this.setState(prevState => ({ isZoomed: !prevState.isZoomed }));
    }
  }

  render() {
    const { isZoomed, isMobile } = this.state;
    const wrapperClass = 'tarot-card-wrapper' + (isZoomed ? ' zoomed' : '');

    const flippyStyle = isMobile
      ? { width: '100%', height: '100%' }
      : { width: '277px', height: '440px' };

    return (
      <div>
        {isZoomed && (
          <div className="zoom-overlay active" onClick={this.handleZoomClick} />
        )}
        <div className={wrapperClass} onClick={this.handleZoomClick}>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            ref={(r) => this.flippy = r}
            style={flippyStyle}
          >
            <FrontSide>
              <img src={frontSideImage} alt="front" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </FrontSide>
            <BackSide>
              <img src={this.state.backSideImage} alt="back" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </BackSide>
          </Flippy>
        </div>
      </div>
    );
  }
}

export default TarotCard;
