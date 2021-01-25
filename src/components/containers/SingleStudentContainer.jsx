import React, { Component } from 'react';
import {  NavBarView } from '../views';
import { StudentView } from "../views";
import { connect } from 'react-redux';

class SingleStudentContainer extends Component {
 
  componentDidMount = () => {
    console.log("SingleStudentContainer did mount")  
/*     fetchAllCampuses();
      this.waitForUpdate(); */
  }

/*   // Does not seem like good practice. just a temporary solution until issue #1 (on GH) is fixed. 
  waitForUpdate = () => { if (this.props.campus == []) setTimeout(this.waitForUpdate(), 50) } */
 
  render(){
    return (
      <div>
        <NavBarView />
        <h1>Hello</h1>
      </div>
    )}
}


const mapState = (state, ownprops) => {
  return {
    campus: state.allStudent.find(student => student.id == ownprops.match.params.id),
  }
}
const mapDispatch = dispatch => {
  return {
      
    /* fetchAllStudents: () => dispatch(fetchAllStudents()) */
  }
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(SingleStudentContainer); 