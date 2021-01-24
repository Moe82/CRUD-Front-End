import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import './styles/allCampusesView.css';
import studentIcon from '../../assets/student.png'
const AllStudentsView = props => {
  return (
    <div className="grid">
      {props.allStudents.map(student => (
        <div >
          <img className="defualt-icon" src={student.img == "" ? studentIcon : ""}/>
          <h3 onClick={() => { props.history.push(`/students/${student.id}`) }}>{student.firstName}{student.lastName}</h3>
          <button onClick={() => {props.deleteStudent(student.id)}}> delete </button>
          <button onClick={() => { props.history.push(`/student/${student.id}/edit`) }}>edit</button>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired
};

export default withRouter(AllStudentsView);
