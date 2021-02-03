import React, {Component} from 'react';

import { Link } from 'react-router-dom';


const Formelement =() =>{
  
  return(
<div>
<section id="container" className>
        <header className="header dark-bg">
          <div className="toggle-nav">
            <div className="icon-reorder tooltips" data-original-title="Toggle Navigation" data-placement="bottom"><i className="icon_menu" /></div>
          </div>
          {/*logo start*/}
          <a ComponentClass={Link} href="/Home" to="/Home" className="logo">Nice <span className="lite">Admin</span></a>
          {/*logo end*/}
          <div className="nav search-row" id="top_menu">
            {/*  search form start */}
            <ul className="nav top-menu">
              <li>
                <form className="navbar-form">
                  <input className="form-control" placeholder="Search" type="text" />
                </form>
              </li>
            </ul>
            {/*  search form end */}
          </div>
          <div className="top-nav notification-row">
            {/* notificatoin dropdown start*/}
            <ul className="nav pull-right top-menu">
              {/* task notificatoin start */}
              <li id="task_notificatoin_bar" className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <i className="icon-task-l" />
                  <span className="badge bg-important">6</span>
                </a>
                <ul className="dropdown-menu extended tasks-bar">
                  <div className="notify-arrow notify-arrow-blue" />
                  <li>
                    <p className="blue">You have 6 pending letter</p>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Design PSD </div>
                        <div className="percent">90%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                          <span className="sr-only">90% Complete (success)</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">
                          Project 1
                        </div>
                        <div className="percent">30%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{width: '30%'}}>
                          <span className="sr-only">30% Complete (warning)</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Digital Marketing</div>
                        <div className="percent">80%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                          <span className="sr-only">80% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Logo Designing</div>
                        <div className="percent">78%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100} style={{width: '78%'}}>
                          <span className="sr-only">78% Complete (danger)</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Mobile App</div>
                        <div className="percent">50%</div>
                      </div>
                      <div className="progress progress-striped active">
                        <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                          <span className="sr-only">50% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="external">
                    <a href="#">See All Tasks</a>
                  </li>
                </ul>
              </li>
              {/* task notificatoin end */}
              {/* inbox notificatoin start*/}
              <li id="mail_notificatoin_bar" className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <i className="icon-envelope-l" />
                  <span className="badge bg-important">5</span>
                </a>
                <ul className="dropdown-menu extended inbox">
                  <div className="notify-arrow notify-arrow-blue" />
                  <li>
                    <p className="blue">You have 5 new messages</p>
                  </li>
                  <li>
                    <a href="#">
                      <span className="photo"><img alt="avatar" src="./img/avatar-mini.jpg" /></span>
                      <span className="subject">
                        <span className="from">Greg  Martin</span>
                        <span className="time">1 min</span>
                      </span>
                      <span className="message">
                        I really like this admin panel.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="photo"><img alt="avatar" src="./img/avatar-mini2.jpg" /></span>
                      <span className="subject">
                        <span className="from">Bob   Mckenzie</span>
                        <span className="time">5 mins</span>
                      </span>
                      <span className="message">
                        Hi, What is next project plan?
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="photo"><img alt="avatar" src="./img/avatar-mini3.jpg" /></span>
                      <span className="subject">
                        <span className="from">Phillip   Park</span>
                        <span className="time">2 hrs</span>
                      </span>
                      <span className="message">
                        I am like to buy this Admin Template.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="photo"><img alt="avatar" src="./img/avatar-mini4.jpg" /></span>
                      <span className="subject">
                        <span className="from">Ray   Munoz</span>
                        <span className="time">1 day</span>
                      </span>
                      <span className="message">
                        Icon fonts are great.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">See all messages</a>
                  </li>
                </ul>
              </li>
              {/* inbox notificatoin end */}
              {/* alert notification start*/}
              <li id="alert_notificatoin_bar" className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <i className="icon-bell-l" />
                  <span className="badge bg-important">7</span>
                </a>
                <ul className="dropdown-menu extended notification">
                  <div className="notify-arrow notify-arrow-blue" />
                  <li>
                    <p className="blue">You have 4 new notifications</p>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-primary"><i className="icon_profile" /></span>
                      Friend Request
                      <span className="small italic pull-right">5 mins</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-warning"><i className="icon_pin" /></span>
                      John location.
                      <span className="small italic pull-right">50 mins</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-danger"><i className="icon_book_alt" /></span>
                      Project 3 Completed.
                      <span className="small italic pull-right">1 hr</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-success"><i className="icon_like" /></span>
                      Mick appreciated your work.
                      <span className="small italic pull-right"> Today</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">See all notifications</a>
                  </li>
                </ul>
              </li>
              {/* alert notification end*/}
              {/* user login dropdown start*/}
              <li className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <span className="profile-ava">
                    <img alt="" src="./img/avatar1_small.jpg" />
                  </span>
                  <span className="username">Jenifer Smith</span>
                  <b className="caret" />
                </a>
                <ul className="dropdown-menu extended logout">
                  <div className="log-arrow-up" />
                  <li className="eborder-top">
                    <a href="#"><i className="icon_profile" /> My Profile</a>
                  </li>
                  <li>
                    <a href="#"><i className="icon_mail_alt" /> My Inbox</a>
                  </li>
                  <li>
                    <a href="#"><i className="icon_clock_alt" /> Timeline</a>
                  </li>
                  <li>
                    <a href="#"><i className="icon_chat_alt" /> Chats</a>
                  </li>
                  <li>
                    <a ComponentClass={Link} href="/Loginform" to="/Loginform"><i className="icon_key_alt" /> Log Out</a>
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
              <li className="sub-menu">
                <a href="javascript:;" className>
                  <i className="icon_document_alt" />
                  <span>Forms</span>
                  <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                <li><a className ComponentClass={Link} href="/Formelement" to="/Formelement">Form Elements</a></li>
                  <li><a className ComponentClass={Link} href="/Formcomponent" to="/Formcomponent">Form Component</a></li>
                  <li><a className ComponentClass={Link} href="/Formvalidation" to="/Formvalidation">Form Validation</a></li>
                </ul>
              </li>
              <li className="sub-menu">
                <a href="javascript:;" className>
                  <i className="icon_desktop" />
                  <span>UI Fitures</span>
                  <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                  <li><a className ComponentClass={Link} href="/General" to="/General">Elements</a></li>
                  <li><a className ComponentClass={Link} href="/Buttons" to="/Buttons">Buttons</a></li>
                  <li><a className ComponentClass={Link} href="/Grids" to="/Grids">Grids</a></li>
                </ul>
              </li>
              <li>
                <a className ComponentClass={Link} href="/Widgets" to="/Widgets">
                  <i className="icon_genius" />
                  <span>Widgets</span>
                </a>
              </li>
              <li>
                <a className ComponentClass={Link} href="/Gallery" to="/Gallery">
                  <i className="fas fa-images"  />
                  <span>Gallery</span>
                </a>
              </li>
              <li>
                <a className ComponentClass={Link} href="/Chartjs" to="/Chartjs">
                  <i className="icon_piechart" />
                  <span>Charts</span>
                </a>
              </li>
              <li className="sub-menu">
                <a href="javascript:;" className>
                  <i className="icon_table" />
                  <span>Tables</span>
                  <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                  <li><a className ComponentClass={Link} href="/Basictable" to="/Basictable">Basic Table</a></li>
                  <li><a className ComponentClass={Link} href="/Responsivetable" to="/Responsivetable">Responsive Table</a></li>
                </ul>
              </li>
              <li className="sub-menu">
                <a href="javascript:;" className>
                  <i className="icon_documents_alt" />
                  <span>Pages</span>
                  <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                  <li><a className ComponentClass={Link} href="/Profile" to="/Profile">Profile</a></li>
                  <li><a className ComponentClass={Link} href="/Loginform" to="/Loginform"><span>Login Page</span></a></li>
                  <li><a className ComponentClass={Link} href="/Contactform" to="/Contactform"><span>Contact Page</span></a></li>
                  <li><a className ComponentClass={Link} href="/Blank" to="/Blank">Blank Page</a></li>
                  <li><a className ComponentClass={Link} href="/Errorfound" to="/Errorfound">404 Error</a></li>
                </ul>
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
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box blue-bg">
                  <i className="fa fa-download" />
                  <div className="count">6.674</div>
                  <div className="title">Download</div>
                </div>
                {/*/.info-box*/}
              </div>
              {/*/.col*/}
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box brown-bg">
                  <i className="fa fa-shopping-cart" />
                  <div className="count">7.538</div>
                  <div className="title">Purchased</div>
                </div>
                {/*/.info-box*/}
              </div>
              {/*/.col*/}
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box dark-bg">
                  <i className="fa fa-thumbs-o-up" />
                  <div className="count">4.362</div>
                  <div className="title">Order</div>
                </div>
                {/*/.info-box*/}
              </div>
              {/*/.col*/}
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box green-bg">
                  <i className="fa fa-cubes" />
                  <div className="count">1.426</div>
                  <div className="title">Stock</div>
                </div>
                {/*/.info-box*/}
              </div>
              {/*/.col*/}
            </div>
            {/*/.row*/}
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h2><i className="fa fa-map-marker" aria-hidden="true" /><strong>Countries</strong></h2>
                    <div className="panel-actions">
                      <a href="" className="btn-setting"><i className="fa fa-rotate-right" /></a>
                      <a href="" className="btn-minimize"><i className="fa fa-chevron-up" /></a>
                      <a href="" className="btn-close"><i className="fa fa-times" /></a>
                    </div>
                  </div>
                  <div className="panel-body-map">
                    <div style={{height: '380px'}} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                {/* List starts */}
                <ul className="today-datas">
                  {/* List #1 */}
                  <li>
                    {/* Graph */}
                    <div><span id="todayspark1" className="spark" /></div>
                    {/* Text */}
                    <div className="datas-text">11,500 visitors/day</div>
                  </li>
                  <li>
                    <div><span id="todayspark2" className="spark" /></div>
                    <div className="datas-text">15,000 Pageviews</div>
                  </li>
                  <li>
                    <div><span id="todayspark3" className="spark" /></div>
                    <div className="datas-text">30.55% Bounce Rate</div>
                  </li>
                  <li>
                    <div><span id="todayspark4" className="spark" /></div>
                    <div className="datas-text">$16,00 Revenue/Day</div>
                  </li>
                  <li>
                    <div><span id="todayspark5" className="spark" /></div>
                    <div className="datas-text">12,000000 visitors every Month</div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Today status end */}
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h2><i className="fa fa-flag-o red" /><strong>Registered Users</strong></h2>
                    <div className="panel-actions">
                      <a ComponentClass={Link} href="/Home#" to="/Home#" className="btn-setting"><i className="fa fa-rotate-right" /></a>
                      <a ComponentClass={Link} href="/Home#" to="/Home#" className="btn-minimize"><i className="fa fa-chevron-up" /></a>
                      <a ComponentClass={Link} href="/Home#" to="/Home#" className="btn-close"><i className="fa fa-times" /></a>
                    </div>
                  </div>
                  <div className="panel-body">
                    <table className="table bootstrap-datatable countries">
                      <thead>
                        <tr>
                          <th />
                          <th>Country</th>
                          <th>Users</th>
                          <th>Online</th>
                          <th>Performance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><img src="img/Germany.png" style={{height: '18px', marginTop: '-2px'}} /></td>
                          <td>Germany</td>
                          <td>2563</td>
                          <td>1025</td>
                          <td>
                            <div className="progress thin">
                              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={73} aria-valuemin={0} aria-valuemax={100} style={{width: '73%'}}>
                              </div>
                              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={27} aria-valuemin={0} aria-valuemax={100} style={{width: '27%'}}>
                              </div>
                            </div>
                            <span className="sr-only">73%</span>
                          </td>
                        </tr>
                        <tr>
                          <td><img src="img/India.png" style={{height: '18px', marginTop: '-2px'}} /></td>
                          <td>India</td>
                          <td>3652</td>
                          <td>2563</td>
                          <td>
                            <div className="progress thin">
                              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} style={{width: '57%'}}>
                              </div>
                              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={43} aria-valuemin={0} aria-valuemax={100} style={{width: '43%'}}>
                              </div>
                            </div>
                            <span className="sr-only">57%</span>
                          </td>
                        </tr>
                        <tr>
                          <td><img src="img/Spain.png" style={{height: '18px', marginTop: '-2px'}} /></td>
                          <td>Spain</td>
                          <td>562</td>
                          <td>452</td>
                          <td>
                            <div className="progress thin">
                              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={93} aria-valuemin={0} aria-valuemax={100} style={{width: '93%'}}>
                              </div>
                              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={7} aria-valuemin={0} aria-valuemax={100} style={{width: '7%'}}>
                              </div>
                            </div>
                            <span className="sr-only">93%</span>
                          </td>
                        </tr>
                        <tr>
                          <td><img src="img/India.png" style={{height: '18px', marginTop: '-2px'}} /></td>
                          <td>Russia</td>
                          <td>1258</td>
                          <td>958</td>
                          <td>
                            <div className="progress thin">
                              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                              </div>
                              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                              </div>
                            </div>
                            <span className="sr-only">20%</span>
                          </td>
                        </tr>
                        <tr>
                          <td><img src="img/Spain.png" style={{height: '18px', marginTop: '-2px'}} /></td>
                          <td>USA</td>
                          <td>4856</td>
                          <td>3621</td>
                          <td>
                            <div className="progress thin">
                              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                              </div>
                              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                              </div>
                            </div>
                            <span className="sr-only">20%</span>
                          </td>
                        </tr>
                        <tr>
                          <td><img src="img/Germany.png" style={{height: '18px', marginTop: '-2px'}} /></td>
                          <td>Brazil</td>
                          <td>265</td>
                          <td>102</td>
                          <td>
                            <div className="progress thin">
                              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                              </div>
                              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                              </div>
                            </div>
                            <span className="sr-only">20%</span>
                          </td>
                        </tr>
                        <tr>
                          <td><img src="img/Germany.png" style={{height: '18px', marginTop: '-2px'}} /></td>
                          <td>Coloumbia</td>
                          <td>265</td>
                          <td>102</td>
                          <td>
                            <div className="progress thin">
                              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                              </div>
                              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                              </div>
                            </div>
                            <span className="sr-only">20%</span>
                          </td>
                        </tr>
                        <tr>
                          <td><img src="img/Germany.png" style={{height: '18px', marginTop: '-2px'}} /></td>
                          <td>France</td>
                          <td>265</td>
                          <td>102</td>
                          <td>
                            <div className="progress thin">
                              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                              </div>
                              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                              </div>
                            </div>
                            <span className="sr-only">20%</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/*/col*/}
              <div className="col-md-3">
                <div className="social-box facebook">
                  <i className="fa fa-facebook" />
                  <ul>
                    <li>
                      <strong>256k</strong>
                      <span>friends</span>
                    </li>
                    <li>
                      <strong>359</strong>
                      <span>feeds</span>
                    </li>
                  </ul>
                </div>
                {/*/social-box*/}
              </div>
              <div className="col-md-3">
                <div className="social-box google-plus">
                  <i className="fa fa-google-plus" />
                  <ul>
                    <li>
                      <strong>962</strong>
                      <span>followers</span>
                    </li>
                    <li>
                      <strong>256</strong>
                      <span>circles</span>
                    </li>
                  </ul>
                </div>
                {/*/social-box*/}
              </div>
              {/*/col*/}
              <div className="col-md-3">
                <div className="social-box twitter">
                  <i className="fa fa-twitter" />
                  <ul>
                    <li>
                      <strong>1562k</strong>
                      <span>followers</span>
                    </li>
                    <li>
                      <strong>2562</strong>
                      <span>tweets</span>
                    </li>
                  </ul>
                </div>
            
              </div>
           
            </div>
            {/* statics end */}
            {/* project team & activity start */}
            <div className="row">
              <div className="col-md-4 portlets">
                {/* Widget */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="pull-left">Message</div>
                    <div className="widget-icons pull-right">
                      <a href="#" className="wminimize"><i className="fa fa-chevron-up" /></a>
                      <a href="#" className="wclose"><i className="fa fa-times" /></a>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="panel-body">
                    {/* Widget content */}
                    <div className="padd sscroll">
                      <ul className="chats">
                        {/* Chat by us. Use the class "by-me". */}
                        <li className="by-me">
                          {/* Use the class "pull-left" in avatar */}
                          <div className="avatar pull-left">
                            <img src="img/user.jpg" alt="" />
                          </div>
                          <div className="chat-content">
                            {/* In meta area, first include "name" and then "time" */}
                            <div className="chat-meta">John Smith <span className="pull-right">3 hours ago</span></div>
                            Vivamus diam elit diam, consectetur dapibus adipiscing elit.
                            <div className="clearfix" />
                          </div>
                        </li>
                        {/* Chat by other. Use the class "by-other". */}
                        <li className="by-other">
                          {/* Use the class "pull-right" in avatar */}
                          <div className="avatar pull-right">
                            <img src="../img/user22.png" alt="" />
                          </div>
                          <div className="chat-content">
                            {/* In the chat meta, first include "time" then "name" */}
                            <div className="chat-meta">3 hours ago <span className="pull-right">Jenifer Smith</span></div>
                            Vivamus diam elit diam, consectetur fconsectetur dapibus adipiscing elit.
                            <div className="clearfix" />
                          </div>
                        </li>
                        <li className="by-me">
                          <div className="avatar pull-left">
                            <img src="img/user.jpg" alt="" />
                          </div>
                          <div className="chat-content">
                            <div className="chat-meta">John Smith <span className="pull-right">4 hours ago</span></div>
                            Vivamus diam elit diam, consectetur fermentum sed dapibus eget, Vivamus consectetur dapibus adipiscing elit.
                            <div className="clearfix" />
                          </div>
                        </li>
                        <li className="by-other">
                          {/* Use the class "pull-right" in avatar */}
                          <div className="avatar pull-right">
                            <img src="img/user22.png" alt="" />
                          </div>
                          <div className="chat-content">
                            {/* In the chat meta, first include "time" then "name" */}
                            <div className="chat-meta">3 hours ago <span className="pull-right">Jenifer Smith</span></div>
                            Vivamus diam elit diam, consectetur fermentum sed dapibus eget, Vivamus consectetur dapibus adipiscing elit.
                            <div className="clearfix" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* Widget footer */}
                    <div className="widget-foot">
                      <form className="form-inline">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Type your message here..." />
                        </div>
                        <button type="submit" className="btn btn-info">Send</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                {/*Project Activity start*/}
                <section className="panel">
                  <div className="panel-body progress-panel">
                    <div className="row">
                      <div className="col-lg-8 task-progress pull-left">
                        <h1>To Do Everyday</h1>
                      </div>
                      <div className="col-lg-4">
                        <span className="profile-ava pull-right">
                          <img alt="" className="simple" src="img/avatar1_small.jpg" />
                          Jenifer smith
                        </span>
                      </div>
                    </div>
                  </div>
                  <table className="table table-hover personal-task">
                    <tbody>
                      <tr>
                        <td>Today</td>
                        <td>
                          web design
                        </td>
                        <td>
                          <span className="badge bg-important">Upload</span>
                        </td>
                        <td>
                          <span className="profile-ava">
                            <img alt="" className="simple" src="img/avatar1_small.jpg" />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Yesterday</td>
                        <td>
                          Project Design Task
                        </td>
                        <td>
                          <span className="badge bg-success">Task</span>
                        </td>
                        <td>
                          <div id="work-progress2" />
                        </td>
                      </tr>
                      <tr>
                        <td>21-10-14</td>
                        <td>
                          Generate Invoice
                        </td>
                        <td>
                          <span className="badge bg-success">Task</span>
                        </td>
                        <td>
                          <div id="work-progress3" />
                        </td>
                      </tr>
                      <tr>
                        <td>22-10-14</td>
                        <td>
                          Project Testing
                        </td>
                        <td>
                          <span className="badge bg-primary">To-Do</span>
                        </td>
                        <td>
                          <span className="profile-ava">
                            <img alt="" className="simple" src="img/avatar1_small.jpg" />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>24-10-14</td>
                        <td>
                          Project Release Date
                        </td>
                        <td>
                          <span className="badge bg-info">Milestone</span>
                        </td>
                        <td>
                          <div id="work-progress4" />
                        </td>
                      </tr>
                      <tr>
                        <td>28-10-14</td>
                        <td>
                          Project Release Date
                        </td>
                        <td>
                          <span className="badge bg-primary">To-Do</span>
                        </td>
                        <td>
                          <div id="work-progress5" />
                        </td>
                      </tr>
                      <tr>
                        <td>Last week</td>
                        <td>
                          Project Release Date
                        </td>
                        <td>
                          <span className="badge bg-primary">To-Do</span>
                        </td>
                        <td>
                          <div id="work-progress1" />
                        </td>
                      </tr>
                      <tr>
                        <td>last month</td>
                        <td>
                          Project Release Date
                        </td>
                        <td>
                          <span className="badge bg-success">To-Do</span>
                        </td>
                        <td>
                          <span className="profile-ava">
                            <img alt="" className="simple" src="img/avatar1_small.jpg" />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>
                {/*Project Activity end*/}
              </div>
            </div><br /><br />
            <div className="row">
              <div className="col-md-6 portlets">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h2><strong>Calendar</strong></h2>
                    <div className="panel-actions">
                      <a href="#" className="wminimize"><i className="fa fa-chevron-up" /></a>
                      <a href="#" className="wclose"><i className="fa fa-times" /></a>
                    </div>
                  </div><br /><br /><br />
                  <div className="panel-body">
                    {/* Widget content */}
                    {/* Below line produces calendar. I am using FullCalendar plugin. */}
                    <div id="calendar" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 portlets">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="pull-left">Quick Post</div>
                    <div className="widget-icons pull-right">
                      <a href="#" className="wminimize"><i className="fa fa-chevron-up" /></a>
                      <a href="#" className="wclose"><i className="fa fa-times" /></a>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="panel-body">
                    <div className="padd">
                      <div className="form quick-post">
                        {/* Edit profile form (not working)*/}
                        <form className="form-horizontal">
                          {/* Title */}
                          <div className="form-group">
                            <label className="control-label col-lg-2" htmlFor="title">Title</label>
                            <div className="col-lg-10">
                              <input type="text" className="form-control" id="title" />
                            </div>
                          </div>
                          {/* Content */}
                          <div className="form-group">
                            <label className="control-label col-lg-2" htmlFor="content">Content</label>
                            <div className="col-lg-10">
                              <textarea className="form-control" id="content" defaultValue={""} />
                            </div>
                          </div>
                          {/* Cateogry */}
                          <div className="form-group">
                            <label className="control-label col-lg-2">Category</label>
                            <div className="col-lg-10">
                              <select className="form-control">
                                <option value>- Choose Cateogry -</option>
                                <option value={1}>General</option>
                                <option value={2}>News</option>
                                <option value={3}>Media</option>
                                <option value={4}>Funny</option>
                              </select>
                            </div>
                          </div>
                          {/* Tags */}
                          <div className="form-group">
                            <label className="control-label col-lg-2" htmlFor="tags">Tags</label>
                            <div className="col-lg-10">
                              <input type="text" className="form-control" id="tags" />
                            </div>
                          </div>
                          {/* Buttons */}
                          <div className="form-group">
                            {/* Buttons */}
                            <div className="col-lg-offset-2 col-lg-9">
                              <button type="submit" className="btn btn-primary">Publish</button>
                              <button type="submit" className="btn btn-danger">Save Draft</button>
                              <button type="reset" className="btn btn-default">Reset</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="widget-foot">
                      {/* Footer goes here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* project team & activity end */}
          </section>
          
        </section>
        {/*main content end*/}
      </section>

  </div>
          
    );
  }
  
  export default Formelement;