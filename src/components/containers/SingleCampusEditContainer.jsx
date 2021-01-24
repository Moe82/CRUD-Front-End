import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { fetchAllCampuses, updateCampus } from '../../thunks';
import { NavBarContainer } from "../containers";
/* import {SingleCampusEditView }from '../views' */


class SingleCampusContainerEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      campusName: "",
      campusAddress: "",
      campusImgURL: "",
      campusInfo: "",
      numberOfStudents:0
    }
  }

  // ask Bashir about the setTimeout method. 
  componentDidMount = () => {
    this.props.fetchAllCampuses()
    setTimeout( () => {
      let thisCampus = this.props.allCampuses.find(campus => campus.id == this.props.match.params.id)
      console.log("Here", thisCampus)
      this.setState({
        campusName: thisCampus.name,
        campusAddress: thisCampus.address,
        campusImgURL: thisCampus.img,
        campusInfo: thisCampus.info
      })
    }, 1000)
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateCampus({
      name: this.state.campusName,
      address: this.state.campusAddress,
      img: this.state.campusImgURL,
      info: this.state.campusInfo,
      id: parseInt(this.props.match.params.id)
    })
  } 

  handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

  render(){
    return (
      <div>
        <h1>Edit Campus</h1>
        <NavBarContainer/>
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
            Campus Description: <input name="campusInfo" type="text" value={this.state.campusInfo} onChange={this.handleChange} required/> 
          </label>
            <br />
          <input class="button" type="submit" value="Save changes" />
        </form>
        <br/>
        <br/>
        <div>Students on Campus</div>
        <div>
        <button>Select Student...</button>
        <button>Add to Campus</button>
        </div>
        
        <br/>
        {(this.state.numberOfStudents === 0)? <div>There are no student currently registered to this campus.</div> :
        <div>There are {this.state.numberOfStudents} in this campus.</div>}
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

// Type check props;
// AllCampusesContainer.propTypes = {
//   allCampuses: PropTypes.array.isRequired,
//   fetchAllCampuses: PropTypes.func.isRequired
// }

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(SingleCampusContainerEdit);
