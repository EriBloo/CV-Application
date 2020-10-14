import React from 'react';
import '../styles/ExperienceField.scss';

class ExperienceField extends React.Component {
  render() {
    return (
      <div id={this.props.id} className='experience-field-wrapper'>
      <form className='experience-form'>
        <label htmlFor='company'>Company:</label>
        <input type='text' id='company' name='company'></input>
        <label htmlFor='position'>Position:</label>
        <input type='text' id='title' name='position'></input>
        <label htmlFor='from'>From:</label>
        <input type='date' id='from' name='from'></input>
        <label htmlFor='to'>To:</label>
        <input type='date' id='to' name='to'></input>
      </form>
    </div>
    )
  }
}

export default ExperienceField;
