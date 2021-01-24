import React, { Component } from 'react';
import { AllCampusesView } from '../views';
import { NavBarContainer } from "../containers";
class SingleCampusContainer extends Component {
  render(){
    console.log(this.props)
    return (
      <div>
        <NavBarContainer/>
        <button onClick={() => { this.props.history.push(`/campuses/${this.props.match.params.id}/edit`)} }>Edit</button>
      </div>
    )
  }
}
export default SingleCampusContainer