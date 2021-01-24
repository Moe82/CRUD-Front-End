import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './styles/NavBarView.css';

const navBarView = () => {
    return (
      <div>
        <div className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/campuses">Campuses</Link></li>
            <li><Link to="/students">Students</Link></li>
          </ul>
        </div>
      </div>
    )
  }

export default navBarView;