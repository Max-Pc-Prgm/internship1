import React, { Component } from 'react'
import "./Header.css";
export default class Header extends Component {
    render() {
        return (
           <div>
  <nav className="main-header navbar navbar-expand navbar-white navbar-light fixing">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href=""><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">Home</a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="contact" className="nav-link">Contact</a>
      </li>
    </ul>
    {/* SEARCH FORM */}
   
    {/* Right navbar links */}
    
  </nav>
</div>

        )
    }
}
