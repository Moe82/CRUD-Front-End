import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { fetchAllCampuses, updateCampus } from '../../thunks';
import { number } from 'prop-types';
// import { AllCampusesView } from '../views';


class SingleCampusContainerEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      campusName: props.campusName,
      campusAddress: props.campusAddress,
      campusImgURL: props.campusImgURL,
      campusInfo: props.campusInfo,
    }
  }

  render(){
    {console.log("HERE_________", this.state.campusInfo.students)}
    {console.log("test test ")}
    
    return (
      <div>
        <form onSubmit={this.handleSubmit} class="user-input">
          <label> 
            Campus Name: <input name="campusName" type="text" value={this.state.campusName} onChange={this.handleChange} required/> 
          </label>
            <br />
          <label>
            Campus Address: <input name="campusAddress" type="text" value={this.state.campusAddress} onChange={this.handleChange} required/> 
          </label> 
            <br />
          <label>
            Campus Image URL: <input name="campusImgURL" type="text" value={this.state.campusImgURL} onChange={this.handleChange} required/> 
          </label>
          <br />
          <label>
            Campus Description: <input name="campusInfo" type="text" value={this.state.campusInfo} onChange={this.handleChange} /> 
          </label>
            <br />
          <input class="button" type="submit" value="Save changes" />
        </form>
        <div>Students on Campus</div>
        <button>Add to Campus</button>
        {(this.state.numberOfStudents === 0)? <div>There's no student in this campus</div> :
        <div>there are ${this.state.numberOfStudents} in this campus</div>}
      </div>
    )
  }
}

// Map state to props;
const mapState = state => {
  return {
    allCampuses: state.allCampuses
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampuses()),
    updateCampus: (campus) => dispatch(updateCampus(campus))
  }
}

export default connect(mapState, mapDispatch)(SingleCampusContainerEdit);
