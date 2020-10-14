import React from 'react';

class DisplayEducationField extends React.Component {
  render() {
    return (
      <div className='display-education-field-wrapper'>
        {this.props.data.school}
        {this.props.data.study}
      </div>
    );
  }
}

export default DisplayEducationField;