import React from 'react';
import { Link } from "react-router-dom";
import studentIcon from '../../assets/student.png'

const studentView = props => {
  return (
    <div className="studentCard" >
        <img className="defualt-icon" src={props.student.img == "" ? studentIcon : ""}/>
          <p className="StudentInfo">{props.student.firstName} {props.student.lastName}</p>
          <p className="StudentInfo">Student ID: {props.student.id}</p>
        {/* <h3 onClick={() => { props.history.push(`/students/${student.id}`) }}>{student.firstName}{student.lastName}</h3>
        <button onClick={() => {props.deleteStudent(student.id)}}> delete </button>
        <button onClick={() => { props.history.push(`/student/${student.id}/edit`) }}>edit</button> */}
    </div>
  );
};

export default studentView;

