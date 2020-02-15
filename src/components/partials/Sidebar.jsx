import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaMicrosoft, FaRegWindowRestore, FaRegUser, FaVideo, FaFileVideo } from "react-icons/fa";
export default class Sidebar extends Component {
    render() {
        return (
            <ul className="sidebar navbar-nav">
              <li className="nav-item active">
                  <Link className="nav-link" to="/home">
                  <FaMicrosoft className="fas fa-fw fa-home" />
                  <span>Home</span>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/channels">
                  <FaRegWindowRestore className="fas fa-fw fa-users"/>
                  <span>Channels</span>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="channel">
                  <FaRegUser className="fas fa-fw fa-user-alt" />
                  <span>My Channel</span>
                  </Link>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="{{ route('watch')}}">
                  <FaVideo className="fas fa-fw fa-video"/>
                  <span>Video Page</span>
                  </a>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="upload">
                  <FaFileVideo className="fas fa-fw fa-cloud-upload-alt"/>
                  <span>Upload Video</span>
                  </Link>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-fw fa-folder"></i>
                  <span>Pages</span>
                  </a>
                  <div className="dropdown-menu">
                      <h6 className="dropdown-header">Login Screens:</h6>
                      <a className="dropdown-item" href="login.html">Login</a>
                      <a className="dropdown-item" href="register.html">Register</a>
                      <a className="dropdown-item" href="forgot-password.html">Forgot Password</a>
                      <div className="dropdown-divider"></div>
                      <h6 className="dropdown-header">Other Pages:</h6>
                      <a className="dropdown-item" href="404.html">404 Page</a>
                      <a className="dropdown-item" href="blank.html">Blank Page</a>
                  </div>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="history-page.html">
                  <i className="fas fa-fw fa-history"></i>
                  <span>History Page</span>
                  </a>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="categories.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-fw fa-list-alt"></i>
                  <span>Categories</span>
                  </a>
                  <div className="dropdown-menu">
                      <a className="dropdown-item" href="categories.html">Movie</a>
                      <a className="dropdown-item" href="categories.html">Music</a>
                      <a className="dropdown-item" href="categories.html">Television</a>
                  </div>
              </li>
              <li className="nav-item channel-sidebar-list">
                  <h6>SUBSCRIPTIONS</h6>
                  <ul>
                      <li>
                          <a href="subscriptions.html">
                          <img className="img-fluid" alt="" src="{{asset('front/img/s1.png')}}"></img> Your Life 
                          </a>
                      </li>
                      <li>
                          <a href="subscriptions.html">
                          <img className="img-fluid" alt="" src="{{asset('front/img/s2.png')}}"></img> Unboxing  <span className="badge badge-warning">2</span>
                          </a>
                      </li>
                      <li>
                          <a href="subscriptions.html">
                          <img className="img-fluid" alt="" src="{{asset('front/img/s3.png')}}"></img> Product / Service  
                          </a>
                      </li>
                      <li>
                          <a href="subscriptions.html">
                          <img className="img-fluid" alt="" src="{{asset('front/img/s4.png')}}"></img>  Gaming 
                          </a>
                      </li>
                  </ul>
              </li>
          </ul>
        );
    }
}