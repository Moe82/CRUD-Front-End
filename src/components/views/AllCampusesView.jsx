import React from 'react';
import './styles/AllPlayersView.css';
import PropTypes from 'prop-types';
import './styles/allCampusesView.css';

import { withRouter } from "react-router";

const AllCampusesView = props => {
  console.log(props)
  return (
    <div className="all-players">
      {props.allCampuses.map(campus => (
        <div key={campus.id}>
          <img className="defualt-icon"src="https://image.flaticon.com/icons/png/512/904/904810.png"/>
          <h3 onClick={() => { props.history.push(`/campuses/${campus.id}`) }}>{campus.name}</h3>
          <button> edit </button>
          <button onClick={() => {props.deleteCampus(campus.id)}}> delete </button>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired
};

export default withRouter(AllCampusesView);