import React, { Component } from 'react';
import { AllCampusesView } from '../views';

class SingleCampusContainer extends Component {
  render(){
    console.log(this.props)
    return (
      <div>
        <button onClick={() => { this.props.history.push(`/campuses/${this.props.match.params.id}/edit`)} }>Edit</button>
      </div>
    )
  }
}
export default SingleCampusContainer