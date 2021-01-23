import React from 'react';
import PropTypes from 'prop-types';
import './styles/allCampusesView.css';
import { withRouter } from "react-router";

const AllCampusesView = props => {
  console.log(props)
  return (
    <div className="grid">
      {props.fetchAllCampuses}
      {props.allCampuses.map(campus => (
        <div key={campus.id}>
          <img className="defualt-icon"src="https://image.flaticon.com/icons/png/512/904/904810.png"/>
          <h3 onClick={() => { props.history.push(`/campuses/${campus.id}`) }}>{campus.name}</h3>
          <button onClick={() => {props.deleteCampus(campus.id)}}> delete </button>
          <button onClick={() => { props.history.push(`/campuses/${campus.id}/edit`) }}>edit</button>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired
};

export default withRouter(AllCampusesView);