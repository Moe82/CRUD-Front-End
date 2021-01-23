import React from 'react';
import { Link } from "react-router-dom";


const HomePageView = props => {
  return (
    <div>
      <Link to="/campuses">Campuses</Link> 
      <br/>
      <Link to="/students">Students</Link>
    </div>
  );
};

export default HomePageView;

