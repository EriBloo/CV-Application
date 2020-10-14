import React from 'react';
import './General.scss';

class General extends React.Component {
  render() {
    return (
      <div className='general-wrapper'>
        <h2 className='title'>General information</h2>
        <form className='general-form'>
          <label htmlFor='fname'>First name:</label>
          <input type='text' id='fname' name='firstName' onChange={this.props.updateGeneral}></input>
          <label htmlFor='lname'>Last name:</label>
          <input type='text' id='lname' name='lastName' onChange={this.props.updateGeneral}></input>
          <label htmlFor='birth'>Date of birth:</label>
          <input type='date' id='birth' name='birth' onChange={this.props.updateGeneral}></input>
          <label htmlFor='address'>Address:</label>
          <input type='text' id='address' name='address' onChange={this.props.updateGeneral}></input>
          <label htmlFor='email'>E-mail:</label>
          <input type='email' id='email' name='email' onChange={this.props.updateGeneral}></input>
          <label htmlFor='picture'>Upload picture:</label>
          <input type='file' accept='image/*' id='picture' name='picture'></input>
        </form>
      </div>
    )
  }
}

export default General;