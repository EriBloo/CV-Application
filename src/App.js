import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import DisplayGeneral from './components/DisplayGeneral';
import DisplayPicture from './components/DisplayPicture';
import pictureTemplate from '../src/img/portrait-solid.svg';
import './App.scss';

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
      education: {

      },
      exprience: {
        
      }
    }

    this.updateGeneral = this.updateGeneral.bind(this);
  }

  updateGeneral({target}) {
    this.setState({
      general: {
        ...this.state.general,
        [target.name]: target.value,
      }
    });
  }


  render() {
    return (
      <div id='container' className='container'>
        <div id='inputSection' className='input-section'>
          <General updateGeneral={this.updateGeneral}/>
          <Education />
          <Experience />
        </div>
        <div id='displaySection' className='display-section'>
          <DisplayGeneral general={this.state.general} />
          <DisplayPicture picture={this.state.general.picture} />
        </div>
      </div>
    )
  }
}

export default App;
