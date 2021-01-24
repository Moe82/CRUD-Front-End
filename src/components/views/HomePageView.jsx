import React from 'react';
import { Link } from "react-router-dom";
import { NavBarView } from '../views'

const HomePageView = props => {
  return (
    <div>
      <NavBarView/>
      <img className="college-banner"src="https://edsurge.imgix.net/uploads/post/image/13610/diverse_students_for_workforce-1597255295.jpg?auto=compress%2Cformat&w=640&h=259&fit=crop"/>
      <h1 className="title">College Database</h1>
    </div>
  );
};

export default HomePageView;

