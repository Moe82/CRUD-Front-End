import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './styles/NavBarView.css';

const navBarView = () => {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/campuses">Campuses</Link></li>
        <li><Link to="/students">Students</Link></li>
      </ul>
    )
  }

export default navBarView;