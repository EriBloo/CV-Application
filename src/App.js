import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import DisplayGeneral from './components/DisplayGeneral';
import DisplayPicture from './components/DisplayPicture';
import pictureTemplate from '../src/img/portrait-solid-gray.png';
import DisplayEducation from './components/DisplayEducation';
import DisplayExperience from './components/DisplayExperience';
import './styles/App.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {
        firstName: '',
        lastName: '',
        birth:'',
        address: '',
        email: '',
        picture: pictureTemplate,
      },
      education: [
        {
          school: '',
          study: '',
          from: '',
          to: '',
        },
      ],
      experience: [
        {
          company: '',
          position: '',
          from: '',
          to: '',
        },
      ],
    }

    this.updateGeneral = this.updateGeneral.bind(this);
    this.updatePicture = this.updatePicture.bind(this);
    this.addEducationField = this.addEducationField.bind(this);
    this.removeEducationField = this.removeEducationField.bind(this);
    this.addExperienceField = this.addExperienceField.bind(this);
    this.removeExperienceField = this.removeExperienceField.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
  }

  updateGeneral({target}) {
    this.setState({
      general: {
        ...this.state.general,
        [target.name]: target.value,
      },
    });
  }

  updatePicture({target}) {
    this.setState({
      general: {
        ...this.state.general,
        picture: URL.createObjectURL(target.files[0]),
      }
    });
  }

  addEducationField() {
    const educationTemplate = {
      school: '',
      study: '',
      from: '',
      to: '',
    }
    this.setState({
      education: [
        ...this.state.education,
        educationTemplate,
      ],
    });
  }

  removeEducationField() {
    const educationCopy = [...this.state.education];
    educationCopy.pop();
    this.setState({
      education: educationCopy,
    })
  }

  updateEducation({target}) {
    const id = target.parentNode.parentNode.getAttribute('id');
    this.setState((state) => {
      const education = [...state.education];
      education[id] = {
        ...education[id],
        [target.name]: target.value,
      }
      return {
        education,
      }
    });
  }

  addExperienceField() {
    const experienceTemplate = {
      company: '',
      position: '',
      from: '',
      to: '',
    }
    this.setState({
      experience: [
        ...this.state.experience,
        experienceTemplate,
      ],
    });
  }

  removeExperienceField() {
    const experienceCopy = [...this.state.experience];
    experienceCopy.pop();
    this.setState({
      experience: experienceCopy,
    })
  }

  updateExperience({target}) {
    const id = target.parentNode.parentNode.getAttribute('id');
    this.setState((state) => {
      const experience = [...state.experience];
      experience[id] = {
        ...experience[id],
        [target.name]: target.value,
      }
      return {
        experience,
      }
    });
  }


  render() {
    return (
      <div id='container' className='container'>
        <div id='inputSection' className='input-section'>
          <General updateGeneral={this.updateGeneral} updatePicture={this.updatePicture} />
          <Education education={this.state.education} addEducationField={this.addEducationField} removeEducationField={this.removeEducationField} updateEducation={this.updateEducation} />
          <Experience experience={this.state.experience} addExperienceField={this.addExperienceField} removeExperienceField={this.removeExperienceField} updateExperience={this.updateExperience} />
        </div>
        <div id='displaySection' className='display-section'>
          <DisplayGeneral general={this.state.general} />
          <DisplayPicture picture={this.state.general.picture} />
          <DisplayEducation education={this.state.education} />
          <DisplayExperience experience={this.state.experience} />
        </div>
      </div>
    )
  }
}

export default App;
