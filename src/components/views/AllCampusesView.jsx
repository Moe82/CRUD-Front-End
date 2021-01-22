import React from 'react';
import './styles/AllPlayersView.css';
import PropTypes from 'prop-types';
import './styles/allCampusesView.css';

const AllCampusesView = props => {
  return (
    <div className="wrapper">
      {props.allCampuses.map(campus => (
        <div key={campus.id}>
          <img className="defualt-icon"src="https://image.flaticon.com/icons/png/512/904/904810.png"/>
          <h3>{campus.name}</h3>
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

export default AllCampusesView;