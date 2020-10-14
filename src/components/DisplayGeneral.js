import React from 'react';
import { format } from 'date-fns';
import '../styles/DisplayGeneral.scss';

class DisplayGeneral extends React.Component {
  render() {
    return (
      <div className='display-general-wrapper'>
        <h2 className='title'>About</h2>
        <h3 className='name'>Name: {this.props.general.firstName} {this.props.general.lastName}</h3>
        <h3 className='birth'>Born: {this.props.general.birth ? format(new Date(this.props.general.birth), 'd MMMM yyyy') : ''}</h3>
        <h3 className='address'>Address: {this.props.general.address}</h3>
        <h3 className='email'>Contact: {this.props.general.email}</h3>
      </div>
    )
  }
}

export default DisplayGeneral;