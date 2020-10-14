import React from 'react';
import DisplayEducationField from './DisplayEducationField';
import '../styles/DisplayEducation.scss';

class DisplayEducation extends React.Component {
  render() {
    return (
      <div className='display-education-wrapper'>
        <h2 className='title'>Education:</h2>
        {this.props.education.map((data, idx) => {
          return (
            <DisplayEducationField key={idx} id={idx} data={data} />
          )
        })}
      </div>
    );
  }
}

export default DisplayEducation;