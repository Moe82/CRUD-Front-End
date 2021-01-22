import React from 'react';
import './styles/AllPlayersView.css';
import PropTypes from 'prop-types';

const AllCampusesView = props => {
  console.log("HERE", props.allCampuses)
  return (
    <div className="all-players">
      {props.allCampuses.map(campus => (
        <div key={campus.id}>
          <h1>{campus.name}</h1>
          <h2>{campus.address}</h2>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired
};

export default AllCampusesView;