import React, {Component} from 'react';

import { Link } from 'react-router-dom';


const Buttons =() =>{
  
  return(
<div>

<section id="container" className>
        {/*header start*/}
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
                  <span className="badge bg-important">5</span>
                </a>
                <ul className="dropdown-menu extended tasks-bar">
                  <div className="notify-arrow notify-arrow-blue" />
                  <li>
                    <p className="blue">You have 5 pending tasks</p>
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
                    <img alt="" src="img/avatar1_small.jpg" />
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
                  <li><a className ComponentClass={Link} href="/General" to="/General">Components</a></li>
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
                  <i className="fas fa-images" />
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
              <li className="sub-menu">
                <a href="javascript:;" className>
                  <i className="fas fa-mail-bulk" />
                  <span>Mail</span>
                  <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                  <li><a className ComponentClass={Link} href="/Mail" to="/Mail">Inbox</a></li>
                  <li><a className ComponentClass={Link} href="/Compose" to="/Compose"><span>Compose Mail</span></a></li>
                 
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
            <div className="row">
              <div className="col-lg-12">
                <h3 className="page-header"><i className="fa fa-th" />Button</h3>
                <ol className="breadcrumb">
                  <li><i className="fa fa-home" /><a ComponentClass={Link} href="/Home" to="/Home">Home</a></li>
                  <li><i className="fa fa-desktop" />UI Fitures</li>
                  <li><i className="fa fa-th" />button</li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <section className="panel">
                  <header className="panel-heading">
                    <h3>Buttons</h3>
                  </header>
                  <div className="panel-body">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Button</th>
                          <th>Large Button</th>
                          <th>Small Button</th>
                          <th>Disabled Button</th>
                          <th>Button with Icon</th>
                          <th>Split Button</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a className="btn btn-default" href title="Bootstrap 3 themes generator">Default</a></td>
                          <td><a className="btn btn-default btn-lg" href title="Bootstrap 3 themes generator">Default</a></td>
                          <td><a className="btn btn-default btn-sm" href title="Bootstrap 3 themes generator">Default</a></td>
                          <td><a className="btn btn-default disabled" href title="Bootstrap 3 themes generator">Default</a></td>
                          <td><a className="btn btn-default" href title="Bootstrap 3 themes generator">
                              <span className="icon_cloud-upload_alt" /> Default</a></td>
                          <td>
                            <div className="btn-group">
                              <a className="btn btn-default" href title="Bootstrap 3 themes generator">Default</a>
                              <a className="btn btn-default dropdown-toggle" data-toggle="dropdown" href title="Bootstrap 3 themes generator"><span className="caret" /></a>
                              <ul className="dropdown-menu">
                                <li><a href title="Bootstrap 3 themes generator">Action</a></li>
                                <li><a href title="Bootstrap 3 themes generator">Another action</a></li>
                                <li><a href title="Bootstrap 3 themes generator">Something else here</a></li>
                                <li className="divider" />
                                <li><a href title="Bootstrap 3 themes generator">Separated link</a></li>
                              </ul>
                            </div>
                            {/* /btn-group */}
                          </td>
                        </tr>
                        <tr>
                          <td><a className="btn btn-primary" href title="Bootstrap 3 themes generator">Primary</a></td>
                          <td><a className="btn btn-primary btn-lg" href title="Bootstrap 3 themes generator">Primary</a></td>
                          <td><a className="btn btn-primary btn-sm" href title="Bootstrap 3 themes generator">Primary</a></td>
                          <td><a className="btn btn-primary disabled" href title="Bootstrap 3 themes generator">Primary</a></td>
                          <td><a className="btn btn-primary" href title="Bootstrap 3 themes generator"><span className="icon_lightbulb_alt" /> Primary</a></td>
                          <td>
                            <div className="btn-group">
                              <a className="btn btn-primary" href title="Bootstrap 3 themes generator">Primary</a>
                              <a className="btn btn-primary dropdown-toggle" data-toggle="dropdown" href title="Bootstrap 3 themes generator"><span className="caret" /></a>
                              <ul className="dropdown-menu">
                                <li><a href title="Bootstrap 3 themes generator">Action</a></li>
                                <li><a href title="Bootstrap 3 themes generator">Another action</a></li>
                                <li><a href title="Bootstrap 3 themes generator">Something else here</a></li>
                                <li className="divider" />
                                <li><a href title="Bootstrap 3 themes generator">Separated link</a></li>
                              </ul>
                            </div>
                            {/* /btn-group */}
                          </td>
                        </tr>
                        <tr>
                          <td><a className="btn btn-info" href title="Bootstrap 3 themes generator">Info</a></td>
                          <td><a className="btn btn-info btn-lg" href title="Bootstrap 3 themes generator">Info</a></td>
                          <td><a className="btn btn-info btn-sm" href title="Bootstrap 3 themes generator">Info</a></td>
                          <td><a className="btn btn-info disabled" href title="Bootstrap 3 themes generator">Info</a></td>
                          <td><a className="btn btn-info" href title="Bootstrap 3 themes generator"><span className="icon_house_alt" /> Info</a></td>
                          <td>
                            <div className="btn-group">
                              <a className="btn btn-info" href title="Bootstrap 3 themes generator">Info</a>
                              <a className="btn btn-info dropdown-toggle" data-toggle="dropdown" href title="Bootstrap 3 themes generator"><span className="caret" /></a>
                              <ul className="dropdown-menu">
                                <li><a href title="Bootstrap 3 themes generator">Action</a></li>
                                <li><a href title="Bootstrap 3 themes generator">Another action</a></li>
                                <li><a href title="Bootstrap 3 themes generator">Something else here</a></li>
                                <li className="divider" />
                                <li><a href title="Bootstrap 3 themes generator">Separated link</a></li>
                              </ul>
                            </div>
                            {/* /btn-group */}
                          </td>
                        </tr>
                        <tr>
                          <td><a className="btn btn-success" href title="Bootstrap 3 themes generator">Success</a></td>
                          <td><a className="btn btn-success btn-lg" href title="Bootstrap 3 themes generator">Success</a></td>
                          <td><a className="btn btn-success btn-sm" href title="Bootstrap 3 themes generator">Success</a></td>
                          <td><a className="btn btn-success disabled" href title="Bootstrap 3 themes generator">Success</a></td>
                          <td><a className="btn btn-success" href title="Bootstrap 3 themes generator"><span className="icon_mic_alt" /> Success</a></td>
                          <td>
                            <div className="btn-group">
                              <a className="btn btn-success" href title="Bootstrap 3 themes generator">Success</a>
                              <a className="btn btn-success dropdown-toggle" data-toggle="dropdown" href title="Bootstrap 3 themes generator"><span className="caret" /></a>
                              <ul className="dropdown-menu">
                                <li><a href title="Bootstrap 3 themes generator">Action</a></li>
                                <li><a href title="Bootstrap 3 themes generator">Another action</a></li>
                                <li><a href title="Bootstrap 3 themes generator">Something else here</a></li>
                                <li className="divider" />
                                <li><a href title="Bootstrap 3 themes generator">Separated link</a></li>
                              </ul>
                            </div>
                            {/* /btn-group */}
                          </td>
                        </tr>
                        <tr>
                          <td><a className="btn btn-warning" href title="Bootstrap 3 themes generator">Warning</a></td>
                          <td><a className="btn btn-warning btn-lg" href title="Bootstrap 3 themes generator">Warning</a></td>
                          <td><a className="btn btn-warning btn-sm" href title="Bootstrap 3 themes generator">Warning</a></td>
                          <td><a className="btn btn-warning disabled" href title="Bootstrap 3 themes generator">Warning</a></td>
                          <td><a className="btn btn-warning" href title="Bootstrap 3 themes generator"><span className="icon_pin_alt" /> Warning</a></td>
                          <td>
                            <div className="btn-group">
                              <a className="btn btn-warning" href title="Bootstrap 3 themes generator">Warning</a>
                              <a className="btn btn-warning dropdown-toggle" data-toggle="dropdown" href title="Bootstrap 3 themes generator"><span className="caret" /></a>
                              <ul className="dropdown-menu">
                                <li><a href title="Bootstrap 3 themes generator">Action</a></li>
                                <li><a href title="Bootstrap 3 themes generator">Another action</a></li>
                                <li><a href title="Bootstrap 3 themes generator">Something else here</a></li>
                                <li className="divider" />
                                <li><a href title="Bootstrap 3 themes generator">Separated link</a></li>
                              </ul>
                            </div>
                            {/* /btn-group */}
                          </td>
                        </tr>
                        <tr>
                          <td><a className="btn btn-danger" href title="Bootstrap 3 themes generator">Danger</a></td>
                          <td><a className="btn btn-danger btn-lg" href title="Bootstrap 3 themes generator">Danger</a></td>
                          <td><a className="btn btn-danger btn-sm" href title="Bootstrap 3 themes generator">Danger</a></td>
                          <td><a className="btn btn-danger disabled" href title="Bootstrap 3 themes generator">Danger</a></td>
                          <td><a className="btn btn-danger" href title="Bootstrap 3 themes generator"><span className="icon_target" /> Danger</a></td>
                          <td>
                            <div className="btn-group">
                              <a className="btn btn-danger" href title="Bootstrap 3 themes generator">Danger</a>
                              <a className="btn btn-danger dropdown-toggle" data-toggle="dropdown" href title="Bootstrap 3 themes generator"><span className="caret" /></a>
                              <ul className="dropdown-menu">
                                <li><a href title="Bootstrap 3 themes generator">Action</a></li>
                                <li><a href title="Bootstrap 3 themes generator">Another action</a></li>
                                <li><a href title="Bootstrap 3 themes generator">Something else here</a></li>
                                <li className="divider" />
                                <li><a href title="Bootstrap 3 themes generator">Separated link</a></li>
                              </ul>
                            </div>
                            {/* /btn-group */}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </div>
            {/* page start*/}
            <div className="row">
              <div className="col-sm-6">
                <section className="panel">
                  <header className="panel-heading">
                    Group Checkbox
                  </header>
                  <div className="panel-body">
                    <div className="btn-row">
                      <div className="btn-group" data-toggle="buttons">
                        <label className="btn btn-primary">
                          <input type="checkbox" /> Option 1
                        </label>
                        <label className="btn btn-primary active">
                          <input type="checkbox" /> Option 2
                        </label>
                        <label className="btn btn-primary">
                          <input type="checkbox" /> Option 3
                        </label>
                      </div>
                    </div>
                    <div className="btn-row">
                      <div className="btn-group" data-toggle="buttons">
                        <label className="btn btn-danger active">
                          <input type="checkbox" /> Option 1
                        </label>
                        <label className="btn btn-danger">
                          <input type="checkbox" /> Option 2
                        </label>
                        <label className="btn btn-danger">
                          <input type="checkbox" /> Option 3
                        </label>
                      </div>
                    </div>
                    <div className="btn-row">
                      <div className="btn-group" data-toggle="buttons">
                        <label className="btn btn-info">
                          <input type="checkbox" /> Option 1
                        </label>
                        <label className="btn btn-info">
                          <input type="checkbox" /> Option 2
                        </label>
                        <label className="btn btn-info active">
                          <input type="checkbox" /> Option 3
                        </label>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="panel">
                  <header className="panel-heading">
                    Group Radio
                  </header>
                  <div className="panel-body">
                    <div className="btn-row">
                      <div className="btn-group" data-toggle="buttons">
                        <label className="btn btn-default active">
                          <input type="radio" name="options" id="option1" /> Option 1
                        </label>
                        <label className="btn btn-default">
                          <input type="radio" name="options" id="option2" /> Option 2
                        </label>
                        <label className="btn btn-default">
                          <input type="radio" name="options" id="option3" /> Option 3
                        </label>
                      </div>
                    </div>
                    <div className="btn-row">
                      <div className="btn-group" data-toggle="buttons">
                        <label className="btn btn-primary">
                          <input type="radio" name="options" id="option1" /> Option 1
                        </label>
                        <label className="btn btn-primary active">
                          <input type="radio" name="options" id="option2" /> Option 2
                        </label>
                        <label className="btn btn-primary">
                          <input type="radio" name="options" id="option3" /> Option 3
                        </label>
                      </div>
                    </div>
                    <div className="btn-row">
                      <div className="btn-group" data-toggle="buttons">
                        <label className="btn btn-danger">
                          <input type="radio" name="options" id="option1" /> Option 1
                        </label>
                        <label className="btn btn-danger">
                          <input type="radio" name="options" id="option2" /> Option 2
                        </label>
                        <label className="btn btn-danger active">
                          <input type="radio" name="options" id="option3" /> Option 3
                        </label>
                      </div>
                    </div>
                    <div className="btn-row">
                      <div className="btn-group" data-toggle="buttons">
                        <label className="btn btn-info">
                          <input type="radio" name="options" id="option1" /> Option 1
                        </label>
                        <label className="btn btn-info active">
                          <input type="radio" name="options" id="option2" /> Option 2
                        </label>
                        <label className="btn btn-info">
                          <input type="radio" name="options" id="option3" /> Option 3
                        </label>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="panel">
                  <header className="panel-heading">
                    Block level button
                  </header>
                  <div className="panel-body">
                    <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
                    <button type="button" className="btn btn-warning btn-block">Block level button</button>
                    <button type="button" className="btn btn-danger btn-xs btn-block">Block level button</button>
                  </div>
                </section>
                <section className="panel">
                  <header className="panel-heading">
                    Justified Button groups
                  </header>
                  <div className="panel-body">
                    <div className=" btn-group-justified">
                      <a className="btn btn-primary" href="#">Left</a>
                      <a className="btn btn-success" href="#">Left</a>
                      <a className="btn btn-info" href="#">Middle</a>
                      <a className="btn btn-warning" href="#">Middle</a>
                      <a className="btn btn-danger" href="#">Right</a>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-sm-6">
                <section className="panel">
                  <header className="panel-heading">
                    Group Buttons
                  </header>
                  <div className="panel-body">
                    <div className="btn-row">
                      <div className="btn-group">
                        <button type="button" className="btn btn-default">Left</button>
                        <button type="button" className="btn btn-default">Middle</button>
                        <button type="button" className="btn btn-default">Right</button>
                      </div>
                    </div>
                    <div className="btn-row">
                      <div className="btn-group">
                        <button type="button" className="btn btn-primary">Left</button>
                        <button type="button" className="btn btn-primary">Middle</button>
                        <button type="button" className="btn btn-primary">Right</button>
                      </div>
                    </div>
                    <div className="btn-row">
                      <div className="btn-group">
                        <button type="button" className="btn btn-danger">Left</button>
                        <button type="button" className="btn btn-danger">Middle</button>
                        <button type="button" className="btn btn-danger">Right</button>
                      </div>
                    </div>
                    <p className>Vertical button groups</p>
                    <div className="btn-row">
                      <div className="btn-group-vertical">
                        <button className="btn btn-default" type="button">Top</button>
                        <button className="btn btn-default" type="button">Middle</button>
                        <button className="btn btn-default" type="button">Bottom</button>
                      </div>
                    </div>
                    <div className="btn-row">
                      <div className="btn-group-vertical">
                        <button className="btn btn-primary" type="button">Top</button>
                        <button className="btn btn-primary" type="button">Middle</button>
                        <button className="btn btn-primary" type="button">Bottom</button>
                      </div>
                    </div>
                    <p className>Nested button groups</p>
                    <div className="btn-row">
                      <div className="btn-group">
                        <button className="btn btn-default" type="button">1</button>
                        <button className="btn btn-primary" type="button">2</button>
                        <button className="btn btn-default" type="button">3</button>
                        <button className="btn btn-default" type="button">4</button>
                        <div className="btn-group">
                          <button data-toggle="dropdown" className="btn btn-default dropdown-toggle" type="button"> Dropdown <span className="caret" /> </button>
                          <ul className="dropdown-menu">
                            <li><a href="#">Dropdown link 1</a></li>
                            <li><a href="#">Dropdown link 2</a></li>
                            <li><a href="#">Dropdown link 3</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p className>Vertical variation</p>
                    <div className="btn-group-vertical">
                      <button type="button" className="btn btn-default">Button</button>
                      <div className="btn-group">
                        <button id="btnGroupVerticalDrop1" type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                          Dropdown
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop1">
                          <li><a href="#">Dropdown link</a></li>
                          <li><a href="#">Dropdown link</a></li>
                        </ul>
                      </div>
                      <button type="button" className="btn btn-default">Button</button>
                      <div className="btn-group">
                        <button id="btnGroupVerticalDrop3" type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                          Dropdown
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop3">
                          <li><a href="#">Dropdown link</a></li>
                          <li><a href="#">Dropdown link</a></li>
                        </ul>
                      </div>
                      <div className="btn-group">
                        <button id="btnGroupVerticalDrop4" type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                          Dropdown
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop4">
                          <li><a href="#">Dropdown link</a></li>
                          <li><a href="#">Dropdown link</a></li>
                        </ul>
                      </div>
                    </div>
                    <p className>Multiple button groups</p>
                    <div className="btn-row">
                      <div className="btn-toolbar">
                        <div className="btn-group">
                          <button className="btn btn-info" type="button">1</button>
                          <button className="btn btn-info active" type="button">2</button>
                          <button className="btn btn-info" type="button">3</button>
                          <button className="btn btn-info" type="button">4</button>
                        </div>
                        <div className="btn-group">
                          <button className="btn btn-success" type="button">5</button>
                          <button className="btn btn-success" type="button">6</button>
                          <button className="btn btn-success" type="button">7</button>
                        </div>
                        <div className="btn-group">
                          <button className="btn btn-warning" type="button">8</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* page end*/}
          </section>
        </section>
      </section>
  </div>
          
    );
  }
  
  export default Buttons;