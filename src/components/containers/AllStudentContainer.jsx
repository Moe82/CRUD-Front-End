import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudents, addStudent, deleteStudent } from "../../thunks";
import AllStudentsView from "../views/AllStudentsView";
import { NavBarContainer } from "../containers";

class AllStudentContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  constructor(props) {
    super(props);
    this.state = {
      studentFirstName: "",
      studentLastName: "",
      studentGpa: "",
      studentEmail: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addStudent(this.state);
    this.setState({
      studentFirstName: "",
      studentLastName: "",
      studentGpa: "",
      studentEmail: ""
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <NavBarContainer />
        <form onSubmit={this.handleSubmit} class="user-input">
          <label>
            First Name: <input name="studentFirstName" type="text" value={this.state.studentFirstName} onChange={this.handleChange} required/>
          </label>
          <label> 
            Last Name: <input name="studentLastName" type="text" value={this.state.studentLastName} onChange={this.handleChange} required/>
          </label> <br/> <br/>
          <label> 
            Emai: <input name="studentEmail" type="email" value={this.state.studentEmail} onChange={this.handleChange} required/>
          </label> 
          <label> 
            GPA: <input name="studentGpa" type="number" value={this.state.studentGpa} onChange={this.handleChange} required/>
          </label><br/><br /> 
          <input class="button" type="submit" value="Add Student" />
        </form>
        <div>
          {this.props.allStudents.length != 0 &&  <AllStudentsView allStudents={this.props.allStudents} 
          fetchAllStudents={this.props.fetchAllStudents}
          deleteStudent={this.props.deleteStudent}/> }
        </div>
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudents()),
    deleteStudent: (studentID) => dispatch(deleteStudent(studentID)),
    addStudent: (student) => dispatch(addStudent(student)),
  };
};

// Type check props;
AllStudentContainer.propTypes = {
  // addStudent: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState,mapDispatch)(AllStudentContainer);
