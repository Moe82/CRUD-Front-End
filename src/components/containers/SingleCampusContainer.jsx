import React, { Component } from 'react';
import {  NavBarView } from '../views';
import AllStudentsView from "../views/AllStudentsView";
import { StudentView } from "../views";
import { connect } from 'react-redux';
import { fetchAllCampuses, deleteCampus, addCampus } from '../../thunks';

class SingleCampusContainer extends Component {
 
  componentDidMount = () => {
    console.log("SingleCampusContainer did mount")  
    fetchAllCampuses();
      this.waitForUpdate();
  }

  // Does not seem like good practice. just a temporary solution until issue #1 (on GH) is fixed. 
  waitForUpdate = () => { if (this.props.campus == []) setTimeout(this.waitForUpdate(), 50) }
 
  render(){
    return (
      <div>
        <NavBarView />
        <h1>{this.props.campus.name}</h1>
        <img src={this.props.campus.img} />
        {console.log("___________", this.props.campus)}
        {this.props.campus.info}
        {this.props.campus.address}
        {this.props.campus.students.map( student => {
          return (<StudentView student={student} />)
        })}
      </div>
    )}
}


const mapState = (state, ownprops) => {
  return {
    campus: state.allCampuses.find(campus => campus.id == ownprops.match.params.id),
  }
}
const mapDispatch = dispatch => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampuses()),
  }
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(SingleCampusContainer);