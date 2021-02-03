import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home =() =>{
  
  return(
<div>
<section id="container" className>
<header className="header dark-bg">
          <div className="toggle-nav">
            <div className="icon-reorder tooltips" data-original-title="Toggle Navigation" data-placement="bottom"></div>
          </div>
          {/*logo start*/}
          <a ComponentClass={Link} href="/Home" to="/Home" className="logo">BAKEFIX <span className="lite">Admin</span></a>
          {/*logo end*/}
         
          <div className="top-nav notification-row">
            <ul>
              {/* user login dropdown start*/}
              <li className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  
                </a>
                <ul className="dropdown-menu extended logout">
                  <div className="log-arrow-up" />
                 
                  <li>
                    <a href="login.html"><i className="icon_key_alt" /> Log Out</a>
                  </li>
                 
                </ul>
              </li>
              {/* user login dropdown end */}
            </ul>
            {/* notificatoin dropdown end*/}
          </div>
        </header>
        {/*header end*/}
        {/*sidebar start*/}
        <aside>
          <div id="sidebar" className="nav-collapse ">
            {/* sidebar menu start*/}
            <ul className="sidebar-menu">
              <li className="active">
                <a className ComponentClass={Link} href="/Home" to="/Home">
                  <i className="icon_house_alt" />
                  <span>Dashboard</span>
                </a>
              </li>
      
             
              <li>
                <a className ComponentClass={Link} href="/Widgets" to="/Widgets">
                <i class="fas fa-birthday-cake"></i>
                  <span>Orders</span>
                </a>
              </li>
              <li>
                <a className ComponentClass={Link} href="/Gallery" to="/Gallery">
                <i class="fas fa-user-check"></i>
                  <span>Members</span>
                </a>
              </li>
              <li>
                <a className ComponentClass={Link} href="/Chartjs" to="/Chartjs">
                <i class="fas fa-clipboard-list"></i>
                  <span>Complain</span>
                </a>
              </li>
              <li>
                <a className ComponentClass={Link} href="/Chartjs" to="/Chartjs">
                <i class="fas fa-birthday-cake"></i>
                  <span>Custom Orders</span>
                </a>
              </li>
             
             
            </ul>
            {/* sidebar menu end*/}
          </div>
        </aside>
        {/*sidebar end*/}
        {/*main content start*/}
        <section id="main-content">
          <section className="wrapper">
            {/*overview start*/}
            <div className="row">
              <div className="col-lg-12">
                <h3 className="page-header"><i className="fa fa-laptop" /> Dashboard</h3>
                <ol className="breadcrumb">
                  <li><i className="fa fa-home" /><a ComponentClass={Link} href="/Home" to="/Home">Home</a></li>
                  <li><i className="fa fa-laptop" />Dashboard</li>
                </ol>
              </div>
            </div>
 {/* ------------------------------------------------------------------  */}
            
          </section>
          
        </section>
        {/*main content end*/}
      </section>

  </div>
          
    );
  }
  
  export default Home;