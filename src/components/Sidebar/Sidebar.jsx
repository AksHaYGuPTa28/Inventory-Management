import React, { Component } from 'react';
import './Sidebar.css';
import 'font-awesome/css/font-awesome.min.css';
import avatar from '../../images/avatar.svg';



export default class Login extends React.Component {
  render() {

    return (
      <div>
        <div className="page-wrapper chiller-theme toggled">
          <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i className="fas fa-bars"></i>
          </a>
          <nav id="sidebar" class="sidebar-wrapper">
            <div className="sidebar-content">
              <div className="sidebar-brand">
                <a href="#">Admin Bar</a>
               
              </div>
              <div className="sidebar-header">
                <div className="user-pic">
                  <img className="img-responsive img-rounded" src={avatar} alt="User picture" />
                </div>
                <div className="user-info">
                  <span className="user-name">Administrator
            
                  </span>
                  <span className="user-status">
                    <i className="fa fa-circle"></i>
                    <span>Online</span>
                  </span>
                </div>
              </div>
              
              <div className="sidebar-menu">
                
              </div>
            </div>
            <div className="sidebar-footer">
              
              
              <a href="#">
                <i className="fa fa-power-off"></i>
              </a>
            </div>
          </nav>

        </div>
      </div>
    )
  }
}