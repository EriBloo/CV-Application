import React from 'react';
import { format } from 'date-fns';
import '../styles/DisplayEducationField.scss';

class DisplayEducationField extends React.Component {
  render() {
    return (
      <div className='display-education-field-wrapper'>
        <h3>{this.props.data.study ? `Studied ${this.props.data.study}` : ''} {this.props.data.school ? `at ${this.props.data.school}` : ''}</h3>
        <h3>{this.props.data.from ? `from ${format(new Date(this.props.data.from), 'd MMMM yyyy')}` : ''} {this.props.data.to ? `to ${format(new Date(this.props.data.to), 'd MMMM yyyy')}` : ''}</h3>
      </div>
    );
  }
}

export default DisplayEducationField;