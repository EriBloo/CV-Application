import React from 'react';
import '../styles/EducationField.scss';

class EducationField extends React.Component {
  render() {
    return (
      <div id={this.props.id} className='education-field-wrapper'>
        <form className='education-form'>
          <label htmlFor='school'>School:</label>
          <input type='text' id='school' name='school' onChange={this.props.updateEducation} ></input>
          <label htmlFor='study'>Title of study:</label>
          <input type='text' id='title' name='study' onChange={this.props.updateEducation} ></input>
          <label htmlFor='from'>From:</label>
          <input type='date' id='from' name='from' onChange={this.props.updateEducation} ></input>
          <label htmlFor='to'>To:</label>
          <input type='date' id='to' name='to' onChange={this.props.updateEducation} ></input>
        </form>
      </div>
    )
  }
}

export default EducationField;