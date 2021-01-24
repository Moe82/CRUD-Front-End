import React from 'react';
import { Link } from "react-router-dom";
import studentIcon from '../../assets/student.png'

const studentView = props => {
  return (
    <div >
      <img className="defualt-icon" src={props.student.img == "" ? studentIcon : ""}/>
      {props.student.firstName}
      Student ID: {props.student.id}
      {/* <h3 onClick={() => { props.history.push(`/students/${student.id}`) }}>{student.firstName}{student.lastName}</h3>
      <button onClick={() => {props.deleteStudent(student.id)}}> delete </button>
      <button onClick={() => { props.history.push(`/student/${student.id}/edit`) }}>edit</button> */}
    </div>
  );
};

export default studentView;

