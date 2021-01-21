import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllCampusesThunk } from '../../thunks';
import { AllCampusesView } from '../views';
import axios from 'axios'


// Smart container;
class AllCampusesContainer extends Component {
  // componentDidMount() {
  //   this.props.fetchAllPlayers();
  // }

  constructor(props){
    super(props);
    this.state = {
      campusName: "",
      campusAddress: ""
    }
  }
  

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:8080/api/', this.state.campus)
    this.setState({
      campusName: "",
      campusAddress: ""
    })
   
  }

  handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }
  
  render() {
    return (
      <div>
         <form onSubmit={this.handleSubmit} class="user-input">
        <label >
            Name: <input name="campusName" type="text" value={this.state.campusName} onChange={this.handleChange} required/>
            Address: <input name="campusAddress" type="text" value={this.state.campusAddress} onChange={this.handleChange} required/>
        </label>  
        <input class="button" type="submit" value="Add Campus" />
      </form>
        
        {/* <AllCampusesView allCampuses={this.props.allCampuses} /> */}
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
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
  }
}

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);
