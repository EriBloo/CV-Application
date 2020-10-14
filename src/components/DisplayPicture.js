import React from 'react';
import '../styles/DisplayPicture.scss';

class DisplayPicture extends React.Component {
  render() {
    return (
      <div className='picture-wrapper'>
        <img src={this.props.picture} alt='' className='picture'></img>
      </div>
    )
  }
}

export default DisplayPicture;