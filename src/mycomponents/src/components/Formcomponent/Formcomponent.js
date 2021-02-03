import React, {Component} from 'react';

import { Link } from 'react-router-dom';


const Formcomponent =() =>{
  
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
                <h3 className="page-header"><i className="fa fa-file-text-o" /> Form elements</h3>
                <ol className="breadcrumb">
                  <li><i className="fa fa-home" /><a ComponentClass={Link} href="/Home" to="/Home">Home</a></li>
                  <li><i className="icon_document_alt" />Forms</li>
                  <li><i className="fa fa-file-text-o" />Form elements</li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <section className="panel">
                  <header className="panel-heading">
                    Form Elements
                  </header>
                  <div className="panel-body">
                    <form className="form-horizontal " method="get">
                      <div className="form-group">
                        <label className="col-sm-2 control-label">Default</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">Help text</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" />
                          <span className="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">Rounder</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control round-input" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">Input focus</label>
                        <div className="col-sm-10">
                          <input className="form-control" id="focusedInput" type="text" defaultValue="This is focused..." />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">Disabled</label>
                        <div className="col-sm-10">
                          <input className="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">Placeholder</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" placeholder="placeholder" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                          <input type="password" className="form-control" placeholder />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-lg-2 control-label">Static control</label>
                        <div className="col-lg-10">
                          <p className="form-control-static">email@example.com</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
                <section className="panel">
                  <div className="panel-body">
                    <form className="form-horizontal " method="get">
                      <div className="form-group has-success">
                        <label className="control-label col-lg-2" htmlFor="inputSuccess">Input with success</label>
                        <div className="col-lg-10">
                          <input type="text" className="form-control" id="inputSuccess" />
                        </div>
                      </div>
                      <div className="form-group has-warning">
                        <label className="control-label col-lg-2" htmlFor="inputWarning">Input with warning</label>
                        <div className="col-lg-10">
                          <input type="text" className="form-control" id="inputWarning" />
                        </div>
                      </div>
                      <div className="form-group has-error">
                        <label className="control-label col-lg-2" htmlFor="inputError">Input with error</label>
                        <div className="col-lg-10">
                          <input type="text" className="form-control" id="inputError" />
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
                <section className="panel">
                  <div className="panel-body">
                    <form className="form-horizontal " method="get">
                      <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="inputSuccess">Control sizing</label>
                        <div className="col-lg-10">
                          <input className="form-control input-lg m-bot15" type="text" placeholder=".input-lg" />
                          <input className="form-control m-bot15" type="text" placeholder="Default input" />
                          <input className="form-control input-sm m-bot15" type="text" placeholder=".input-sm" />
                          <select className="form-control input-lg m-bot15">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </select>
                          <select className="form-control m-bot15">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </select>
                          <select className="form-control input-sm m-bot15">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
                <section className="panel">
                  <div className="panel-body">
                    <form className="form-horizontal " method="get">
                      <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="inputSuccess">Checkboxes and radios</label>
                        <div className="col-lg-10">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" defaultValue />
                              Option one is this and that—be sure to include why it's great
                            </label>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" defaultValue />
                              Option one is this and that—be sure to include why it's great option one
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />
                              Option one is this and that—be sure to include why it's great
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                              Option two can be something else and selecting it will deselect option one
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="inputSuccess">Inline checkboxes</label>
                        <div className="col-lg-10">
                          <label className="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox1" defaultValue="option1" /> 1
                          </label>
                          <label className="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox2" defaultValue="option2" /> 2
                          </label>
                          <label className="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox3" defaultValue="option3" /> 3
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="inputSuccess">Selects</label>
                        <div className="col-lg-10">
                          <select className="form-control m-bot15">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                          <select multiple className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="inputSuccess">Column sizing</label>
                        <div className="col-lg-10">
                          <div className="row">
                            <div className="col-lg-2">
                              <input type="text" className="form-control" placeholder=".col-lg-2" />
                            </div>
                            <div className="col-lg-3">
                              <input type="text" className="form-control" placeholder=".col-lg-3" />
                            </div>
                            <div className="col-lg-4">
                              <input type="text" className="form-control" placeholder=".col-lg-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
            {/* Basic Forms & Horizontal Forms*/}
            <div className="row">
              <div className="col-lg-6">
                <section className="panel">
                  <header className="panel-heading">
                    Basic Forms
                  </header>
                  <div className="panel-body">
                    <form role="form">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputFile">File input</label>
                        <input type="file" id="exampleInputFile" />
                        <p className="help-block">Example block-level help text here.</p>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" /> Check me out
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  </div>
                </section>
              </div>
              <div className="col-lg-6">
                <section className="panel">
                  <header className="panel-heading">
                    Horizontal Forms
                  </header>
                  <div className="panel-body">
                    <form className="form-horizontal" role="form">
                      <div className="form-group">
                        <label htmlFor="inputEmail1" className="col-lg-2 control-label">Email</label>
                        <div className="col-lg-10">
                          <input type="email" className="form-control" id="inputEmail1" placeholder="Email" />
                          <p className="help-block">Example block-level help text here.</p>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputPassword1" className="col-lg-2 control-label">Password</label>
                        <div className="col-lg-10">
                          <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-lg-offset-2 col-lg-10">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> Remember me
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-lg-offset-2 col-lg-10">
                          <button type="submit" className="btn btn-danger">Sign in</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
                <section className="panel">
                  <div className="panel-body">
                    <a href="#myModal" data-toggle="modal" className="btn btn-primary">
                      Form in Modal
                    </a>
                    <a href="#myModal-1" data-toggle="modal" className="btn  btn-warning">
                      Form in Modal 2
                    </a>
                    <a href="#myModal-2" data-toggle="modal" className="btn  btn-danger">
                      Form in Modal 3
                    </a>
                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1} id="myModal" className="modal fade">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                            <h4 className="modal-title">Form Tittle</h4>
                          </div>
                          <div className="modal-body">
                            <form role="form">
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Enter email" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputFile">File input</label>
                                <input type="file" id="exampleInputFile3" />
                                <p className="help-block">Example block-level help text here.</p>
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" /> Check me out
                                </label>
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1} id="myModal-1" className="modal fade">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                            <h4 className="modal-title">Form Tittle</h4>
                          </div>
                          <div className="modal-body">
                            <form className="form-horizontal" role="form">
                              <div className="form-group">
                                <label htmlFor="inputEmail1" className="col-lg-2 control-label">Email</label>
                                <div className="col-lg-10">
                                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="inputPassword1" className="col-lg-2 control-label">Password</label>
                                <div className="col-lg-10">
                                  <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="col-lg-offset-2 col-lg-10">
                                  <div className="checkbox">
                                    <label>
                                      <input type="checkbox" /> Remember me
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="col-lg-offset-2 col-lg-10">
                                  <button type="submit" className="btn btn-info">Sign in</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1} id="myModal-2" className="modal fade">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                            <h4 className="modal-title">Form Tittle</h4>
                          </div>
                          <div className="modal-body">
                            <form className="form-inline" role="form">
                              <div className="form-group">
                                <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                                <input type="email" className="form-control sm-input" id="exampleInputEmail5" placeholder="Enter email" />
                              </div>
                              <div className="form-group">
                                <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                                <input type="password" className="form-control sm-input" id="exampleInputPassword5" placeholder="Password" />
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" /> Remember me
                                </label>
                              </div>
                              <button type="submit" className="btn btn-success">Sign in</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* Inline form*/}
            <div className="row">
              <div className="col-lg-12">
                <section className="panel">
                  <header className="panel-heading">
                    Inline form
                  </header>
                  <div className="panel-body">
                    <form className="form-inline" role="form">
                      <div className="form-group">
                        <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                        <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" /> Remember me
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                  </div>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6">
                    <section className="panel">
                      <header className="panel-heading">
                        Color Pickers &amp; Date Pickers
                      </header>
                      <div className="panel-body">
                        <form className="form-horizontal " action="#">
                          {/*date picker start*/}
                          <div className="form-group">
                            <label className="control-label col-sm-4">Default Datepicker</label>
                            <div className="col-sm-6">
                              <input id="dp1" type="text" defaultValue="28-10-2013" size={16} className="form-control" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-sm-4">Starts with years view</label>
                            <div className="col-sm-6">
                              <div className="input-append date" id="dpYears" data-date="18-06-2013" data-date-format="dd-mm-yyyy" data-date-viewmode="years">
                                <input className="form-control" size={16} type="text" defaultValue="28-06-2013" readOnly />
                                <span className="add-on"><i className="icon-calendar" /></span>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-sm-4"> Date Ranges</label>
                            <div className="col-sm-6">
                              <div className="input-prepend">
                                <input id="reservation" type="text" className=" form-control" />
                              </div>
                            </div>
                          </div>
                          {/*date picker end*/}
                          {/*color picker start*/}
                          <div className="form-group">
                            <label className="control-label col-sm-4">Default</label>
                            <div className="col-sm-5">
                              <input type="text" defaultValue="#CCCCCC" className="cp1 form-control" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-sm-4">RGBA</label>
                            <div className="col-sm-5">
                              <input type="text" data-color-format="rgba" defaultValue="rgb(255,255,255,1)" className="cp2 form-control" />
                            </div>
                          </div>
                          {/*color picker end*/}
                        </form>
                      </div>
                    </section>
                    <section className="panel">
                      <header className="panel-heading">
                        Tags Input
                      </header>
                      <div className="panel-body">
                        <input name="tagsinput" id="tagsinput" className="tagsinput" defaultValue="Creative, Dashboard, Admin, Template, Theme, Bootstrap, Responsive, Retina, Minimal" />
                      </div>
                    </section>
                  </div>
                  <div className="col-lg-6">
                    <section className="panel">
                      <header className="panel-heading">
                        Custom Checkbox &amp; Radio
                      </header>
                      <div className="panel-body">
                        <form action="#" method="get" acceptCharset="utf-8">
                          <div className="checkboxes">
                            <label className="label_check" htmlFor="checkbox-01">
                              <input name="sample-checkbox-01" id="checkbox-01" defaultValue={1} type="checkbox" defaultChecked /> I agree to the terms &amp; conditions.
                            </label>
                            <label className="label_check" htmlFor="checkbox-02">
                              <input name="sample-checkbox-02" id="checkbox-02" defaultValue={1} type="checkbox" /> Please send me regular updates. </label>
                            <label className="label_check" htmlFor="checkbox-03">
                              <input name="sample-checkbox-02" id="checkbox-03" defaultValue={1} type="checkbox" /> This is nice checkbox.</label>
                          </div>
                          <div className="radios">
                            <label className="label_radio" htmlFor="radio-01">
                              <input name="sample-radio" id="radio-01" defaultValue={1} type="radio" defaultChecked /> This is option A...
                            </label>
                            <label className="label_radio" htmlFor="radio-02">
                              <input name="sample-radio" id="radio-02" defaultValue={1} type="radio" /> and this is option B...
                            </label>
                            <label className="label_radio" htmlFor="radio-03">
                              <input name="sample-radio" id="radio-03" defaultValue={1} type="radio" /> or simply choose option C
                            </label>
                          </div>
                        </form>
                      </div>
                    </section>
                    <section className="panel">
                      <header className="panel-heading">
                        Switch
                      </header>
                      <div className="panel-body">
                        <div className="row m-bot15">
                          <div className="col-sm-6 text-center">
                            <input type="checkbox" defaultChecked data-toggle="switch" />
                          </div>
                          <div className="col-sm-6 text-center">
                            <input type="checkbox" data-toggle="switch" />
                          </div>
                        </div>
                        <div className="row m-bot15">
                          <div className="col-sm-6 text-center">
                            <div className="switch switch-square" data-on-label="<i class=' icon-ok'></i>" data-off-label="<i class='icon-remove'></i>">
                              <input type="checkbox" />
                            </div>
                          </div>
                          <div className="col-sm-6 text-center">
                            <div className="switch switch-square" data-on-label="<i class=' icon-ok'></i>" data-off-label="<i class='icon-remove'></i>">
                              <input type="checkbox" defaultChecked />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 text-center">
                            <input type="checkbox" disabled data-toggle="switch" />
                          </div>
                          <div className="col-sm-6 text-center">
                            <input type="checkbox" defaultChecked disabled data-toggle="switch" />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="row">
                  {/* Bootsrep Editor */}
                  <div className="col-lg-12">
                    <section className="panel">
                      <header className="panel-heading">
                        Bootsrep Editor
                      </header>
                      <div className="panel-body">
                        <div id="editor" className="btn-toolbar" data-role="editor-toolbar" data-target="#editor" />
                      </div>
                    </section>
                  </div>
                  {/* CKEditor */}
                  <div className="col-lg-12">
                    <section className="panel">
                      <header className="panel-heading">
                        CKEditor
                      </header>
                      <div className="panel-body">
                        <div className="form">
                          <form action="#" className="form-horizontal">
                            <div className="form-group">
                              <label className="control-label col-sm-2">CKEditor</label>
                              <div className="col-sm-10">
                                <textarea className="form-control ckeditor" name="editor1" rows={6} defaultValue={""} />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            {/* page end*/}
          </section>
        </section>
      </section>

  </div>
          
    );
  }
  
  export default Formcomponent;