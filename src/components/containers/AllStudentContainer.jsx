import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudents, deleteStudent, addStudent } from "../../thunks";
import { AllStudentsView } from "../views";
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
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addStudent(this.state);
    this.setState({
      studentFirstName: "",
      studentLastName: "",
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
            <br />
            First Name
            <input
              name="studentFirstName"
              type="text"
              value={this.state.studentFirstName}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Last Name
            <input
              name="studentLastName"
              type="text"
              value={this.state.studentLastName}
              onChange={this.handleChange}
              required
            />
          </label>
          <input class="button" type="submit" value="Add Student" />
        </form>
        <div>
          <AllStudentsView
            allStudent={this.props.allStudent}
            deleteStudent={this.props.deleteStudent}
            fetchAllStudents={this.props.fetchAllStudents}
          />
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
  };
};

// Type check props;
AllStudentContainer.propTypes = {
  addStudent: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentContainer);