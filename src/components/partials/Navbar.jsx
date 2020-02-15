import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaSearch, FaPlusCircle, FaBell, FaEnvelope } from "react-icons/fa";
import logo from '../jboximage/logo-small.png';
import chanProfileImg5 from '../front/img/s5.png'
export default class Navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand navbar-light static-top osahan-nav sticky-top" style={{ background: '#000' }}>
            &nbsp;&nbsp; 
            <button className="btn btn-link btn-sm text-secondary order-1 order-sm-0" id="sidebarToggle">
            <i className="fas fa-bars"></i>
            </button> &nbsp;&nbsp;
            <Link className="navbar-brand mr-1" to="/home"><img className="img-fluid" alt="" src={logo}></img></Link>

            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for..."></input>
                  <div className="input-group-append">
                      <button className="btn btn-light" type="button">
                      <FaSearch className="fas fa-search" /> 
                      </button>
                  </div>
                </div>
            </form>

            <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
              <li className="nav-item mx-1">
                <Link className="nav-link" to="upload">
                <FaPlusCircle className="fas fa-plus-circle fa-fw mr-1" />
                Upload Video
                </Link>
              </li>
              <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FaBell className="fas fa-bell fa-fw" />
                <span className="badge badge-danger">9+</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-edit "></i> &nbsp; Action</a>
                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-headphones-alt "></i> &nbsp; Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star "></i> &nbsp; Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FaEnvelope className="fas fa-envelope fa-fw" />
                <span className="badge badge-success">7</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-edit "></i> &nbsp; Action</a>
                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-headphones-alt "></i> &nbsp; Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star "></i> &nbsp; Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown no-arrow osahan-right-navbar-user">
                <a className="nav-link dropdown-toggle user-dropdown-link" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img alt="Avatar" src={chanProfileImg5}></img>iloba israel</a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="account.html"><i className="fas fa-fw fa-user-circle"></i> &nbsp; My Account</a>
                    <a className="dropdown-item" href="subscriptions.html"><i className="fas fa-fw fa-video"></i> &nbsp; Subscriptions</a>
                    <a className="dropdown-item" href="settings.html"><i className="fas fa-fw fa-cog"></i> &nbsp; Settings</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal"><i className="fas fa-fw fa-sign-out-alt"></i> &nbsp; Logout</a>
                </div>
              </li>
          </ul>
        </nav>
        );
    }
}