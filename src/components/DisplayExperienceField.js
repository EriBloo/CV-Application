import React from 'react';
import { format } from 'date-fns';
import '../styles/DisplayExperienceField.scss';

class DisplayExperienceField extends React.Component {
  render() {
    return (
      <div className='display-education-field-wrapper'>
        <h3>{this.props.data.position ? `Worked as ${this.props.data.position}` : ''} {this.props.data.company ? `at ${this.props.data.company}` : ''}</h3>
        <h3>{this.props.data.from ? `from ${format(new Date(this.props.data.from), 'd MMMM yyyy')}` : ''} {this.props.data.to ? `to ${format(new Date(this.props.data.to), 'd MMMM yyyy')}` : ''}</h3>
      </div>
    );
  }
}

export default DisplayExperienceField;