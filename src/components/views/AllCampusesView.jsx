import React from 'react';
import PropTypes from 'prop-types';
import './styles/allCampusesView.css';
import { withRouter } from "react-router";

const AllCampusesView = props => {
  return (
    <div className="grid">
      {props.fetchAllCampuses}
      {props.allCampuses.map(campus => (
        <div key={campus.id}>
          <img className="defualt-icon" src={campus.img} onClick={() => { props.history.push(`/campuses/${campus.id}`) }} />
          <h3 onClick={() => { props.history.push(`/campuses/${campus.id}`) }}>{campus.name}</h3>
          Students enrolled: {campus.hasOwnProperty("students") === false ? 0 : campus.students.length } <br />
          <br/>
          <button className="btn" id="deleteBtn" onClick={() => {props.deleteCampus(campus.id)}}> delete </button>
          <span/>
          <button className="btn" id="editBtn" onClick={() => { props.history.push(`/campuses/${campus.id}/edit`) }}>edit</button>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired
};

export default withRouter(AllCampusesView);