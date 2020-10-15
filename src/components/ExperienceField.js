import React from 'react';
import '../styles/ExperienceField.scss';

class ExperienceField extends React.Component {
  render() {
    return (
      <div id={this.props.id} className='experience-field-wrapper'>
      <form className='experience-form'>
        <label htmlFor='position'>Position:</label>
        <input type='text' id='title' name='position' onChange={this.props.updateExperience} ></input>
        <label htmlFor='company'>Company:</label>
        <input type='text' id='company' name='company' onChange={this.props.updateExperience} ></input>
        <label htmlFor='from'>From:</label>
        <input type='date' id='from' name='from' onChange={this.props.updateExperience} ></input>
        <label htmlFor='to'>To:</label>
        <input type='date' id='to' name='to' onChange={this.props.updateExperience} ></input>
      </form>
    </div>
    )
  }
}

export default ExperienceField;
