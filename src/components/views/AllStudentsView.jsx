import React from "react";
import PropTypes from "prop-types";
/* import './styles/allCampusesView.css'; */
import { withRouter } from "react-router";

const AllStudentsView = (props) => {
  return (
    <div className="grid">
      {props.fetchAllStudents}
      {props.allStudents.map((student) => (
        <div key={student.id}>
          <img
            className="defualt-icon"
            src="https://image.flaticon.com/icons/png/512/904/904810.png"
          />
          <h3
            onClick={() => {
              props.history.push(`/student/${student.id}`);
            }}
          >
            {student.firstName} {student.lastName}
          </h3>
          <button
            onClick={() => {
              props.deleteStudent(student.id);
            }}
          >
            delete
          </button>
          <button
            onClick={() => {
              props.history.push(`/students/${student.id}/edit`);
            }}
          >
            edit
          </button>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default withRouter(AllStudentsView);
