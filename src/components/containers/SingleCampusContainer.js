import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchAllCampusesThunk, deleteCampus, addCampus } from '../../thunks';
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
//   componentDidMount() {
//     this.props.fetchAllCampuses();
//   }

//   constructor(props){
//     super(props);
//     this.state = {
//       campusName: "",
//       campusAddress: ""
//     }
//   }
  
//   handleSubmit = (event) => {
//     event.preventDefault()
//     this.props.addCampus(this.state)
//     this.setState({
//       campusName: "",
//       campusAddress: ""
//     })
//   }

//   handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }
  
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit} class="user-input">
//         <label>
//           <br />
//           Campus: <input name="campusName" type="text" value={this.state.campusName} onChange={this.handleChange} required/> 
//         </label>
//         <label>
//           Address: <input name="campusAddress" type="text" value={this.state.campusAddress} onChange={this.handleChange} required/> 
//         </label>  
//         <input class="button" type="submit" value="Add Campus" />
//       </form>
//       <div >
//         <AllCampusesView allCampuses={this.props.allCampuses} deleteCampus={this.props.deleteCampus}/>
//       </div>
//       </div>
//     )
//   }
// }

// // Map state to props;
// const mapState = state => {
//   return {
//     allCampuses: state.allCampuses
//   }
// }

// // Map dispatch to props;
// const mapDispatch = dispatch => {
//   return {
//     fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
//     deleteCampus: (campusID) => dispatch(deleteCampus(campusID)),
//     addCampus:(campus) => dispatch(addCampus(campus))
//   }
// }

// // Type check props;
// AllCampusesContainer.propTypes = {
//   allCampuses: PropTypes.array.isRequired,
//   fetchAllCampuses: PropTypes.func.isRequired
// }

// // Export our store-connected container by default;
// export default connect(mapState, mapDispatch)(AllCampusesContainer);