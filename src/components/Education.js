import React from 'react';
import EducationField from './EducationField';
import '../styles/Education.scss';

class Education extends React.Component {
  render() {
    return (
      <div className='education-wrapper'>
        <div className='title-wrapper'>
          <h2 className='title'>Education</h2>
          <i className="fas fa-plus add-education" onClick={this.props.addEducationField} ></i>
          <i className="fas fa-minus remove-education" onClick={this.props.removeEducationField} ></i>
        </div>
        {this.props.education.map((_, idx) => {
          return (
            <EducationField key={idx} id={idx} updateEducation={this.props.updateEducation} />
          );
        })}
      </div>
    )
  }
}

export default Education;
