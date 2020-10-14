import React from 'react';
import ExperienceField from './ExperienceField';
import '../styles/Experience.scss';

class Experience extends React.Component {
  render() {
    return (
      <div className='experience-wrapper'>
        <div className='title-wrapper'>
          <h2 className='title'>Experience</h2>
          <i className="fas fa-plus add-experience" onClick={this.props.addExperienceField} ></i>
          <i className="fas fa-minus remove-experience" onClick={this.props.removeExperienceField} ></i>
        </div>
        {this.props.experience.map((_, idx) => {
          return (
            <ExperienceField key={idx} id={idx}/>
          );
        })}
      </div>
    )
  }
}

export default Experience;
