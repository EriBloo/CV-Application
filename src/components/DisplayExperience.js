import React from 'react';
import DisplayExperienceField from './DisplayExperienceField';
import '../styles/DisplayExperience.scss';

class DisplayExperience extends React.Component {
  render() {
    return (
      <div className='display-experience-wrapper'>
        <h2 className='title'>Experience:</h2>
        {this.props.experience.map((data, idx) => {
          return (
            <DisplayExperienceField key={idx} id={idx} data={data} />
          )
        })}
      </div>
    );
  }
}

export default DisplayExperience;