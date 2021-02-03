import React, {Component} from 'react';

import { Link } from 'react-router-dom';


const General =() =>{
  
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
                <h3 className="page-header"><i className="fa fa-list-alt" /> Components</h3>
                <ol className="breadcrumb">
                  <li><i className="fa fa-home" /><a ComponentClass={Link} href="/Home" to="/Home">Home</a></li>
                  <li><i className="fa fa-desktop" />UI Fitures</li>
                  <li><i className="fa fa-list-alt" />Components</li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                {/*notification start*/}
                <section className="panel">
                  <header className="panel-heading">
                    Alerts
                  </header>
                  <div className="panel-body">
                    <div className="alert alert-success fade in">
                      <button data-dismiss="alert" className="close close-sm" type="button">
                        <i className="icon-remove" />
                      </button>
                      <strong>Well done!</strong> You successfully read this important alert message.
                    </div>
                    <div className="alert alert-block alert-danger fade in">
                      <button data-dismiss="alert" className="close close-sm" type="button">
                        <i className="icon-remove" />
                      </button>
                      <strong>Oh snap!</strong> Change a few things up and try submitting again.
                    </div>
                    <div className="alert alert-info fade in">
                      <button data-dismiss="alert" className="close close-sm" type="button">
                        <i className="icon-remove" />
                      </button>
                      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                    </div>
                    <div className="alert alert-warning fade in">
                      <button data-dismiss="alert" className="close close-sm" type="button">
                        <i className="icon-remove" />
                      </button>
                      <strong>Warning!</strong> Best check yo self, you're not looking too good.
                    </div>
                  </div>
                </section>
                {/*notification end*/}
                {/*tab nav start*/}
                <section className="panel">
                  <header className="panel-heading tab-bg-primary ">
                    <ul className="nav nav-tabs">
                      <li className="active">
                        <a data-toggle="tab" href="#home">Home</a>
                      </li>
                      <li className>
                        <a data-toggle="tab" href="#about">About</a>
                      </li>
                      <li className>
                        <a data-toggle="tab" href="#profile">Profile</a>
                      </li>
                      <li className>
                        <a data-toggle="tab" href="#contact">Contact</a>
                      </li>
                    </ul>
                  </header>
                  <div className="panel-body">
                    <div className="tab-content">
                      <div id="home" className="tab-pane active">
                        Home
                      </div>
                      <div id="about" className="tab-pane">About</div>
                      <div id="profile" className="tab-pane">Profile</div>
                      <div id="contact" className="tab-pane">Contact</div>
                    </div>
                  </div>
                </section>
                {/*tab nav start*/}
                {/*tab nav start*/}
                <section className="panel">
                  <header className="panel-heading tab-bg-primary">
                    <ul className="nav nav-tabs">
                      <li>
                        <a data-toggle="tab" href="#home-2">
                          <i className="icon-home" />
                        </a>
                      </li>
                      <li className="active">
                        <a data-toggle="tab" href="#about-2">
                          <i className="icon-user" />
                          About
                        </a>
                      </li>
                      <li className>
                        <a data-toggle="tab" href="#contact-2">
                          <i className="icon-envelope" />
                          Contact
                        </a>
                      </li>
                    </ul>
                  </header>
                  <div className="panel-body">
                    <div className="tab-content">
                      <div id="home-2" className="tab-pane ">
                        Home
                      </div>
                      <div id="about-2" className="tab-pane active">About</div>
                      <div id="contact-2" className="tab-pane ">Contact</div>
                    </div>
                  </div>
                </section>
                {/*tab nav start*/}
                {/*tab nav start*/}
                <section className="panel">
                  <header className="panel-heading tab-bg-primary tab-right ">
                    <ul className="nav nav-tabs pull-right">
                      <li className="active">
                        <a data-toggle="tab" href="#home-3">
                          <i className="icon-home" />
                        </a>
                      </li>
                      <li className>
                        <a data-toggle="tab" href="#about-3">
                          <i className="icon-user" />
                          About
                        </a>
                      </li>
                      <li className>
                        <a data-toggle="tab" href="#contact-3">
                          <i className="icon-envelope" />
                          Contact
                        </a>
                      </li>
                    </ul>
                    <span className="hidden-sm wht-color">Right tab</span>
                  </header>
                  <div className="panel-body">
                    <div className="tab-content">
                      <div id="home-3" className="tab-pane active">
                        Home
                      </div>
                      <div id="about-3" className="tab-pane">About</div>
                      <div id="contact-3" className="tab-pane">Contact</div>
                    </div>
                  </div>
                </section>
                {/*tab nav start*/}
                {/*navigation start*/}
                <nav className="navbar navbar-default" role="navigation">
                  {/* Brand and toggle get grouped for better mobile display */}
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="#">Brand</a>
                  </div>
                  {/* Collect the nav links, forms, and other content for toggling */}
                  <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="#">Link</a></li>
                      <li><a href="javascript:;">Link</a></li>
                      <li className="dropdown">
                        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret" /></a>
                        <ul className="dropdown-menu">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li><a href="#">Separated link</a></li>
                          <li><a href="#">One more separated link</a></li>
                        </ul>
                      </li>
                    </ul>
                    {/*<form class="navbar-form navbar-left" role="search">*/}
                    {/*<div class="form-group">*/}
                    {/*<input type="text" class="form-control" placeholder="Search">*/}
                    {/*</div>*/}
                    {/*<button type="submit" class="btn btn-default">Submit</button>*/}
                    {/*</form>*/}
                    <ul className="nav navbar-nav navbar-right">
                      <li><a href="javascript:;">Link</a></li>
                      <li className="dropdown">
                        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret" /></a>
                        <ul className="dropdown-menu">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li><a href="#">Separated link</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* /.navbar-collapse */}
                </nav>
                {/*navigation end*/}
                {/*tooltips start*/}
                <section className="panel">
                  <div className="panel-body">
                    <button title data-placement="top" data-toggle="tooltip" className="btn btn-default tooltips" type="button" data-original-title="Tooltip on top">Tooltip on top</button>
                    <button title data-placement="left" data-toggle="tooltip" className="btn btn-default tooltips" type="button" data-original-title="Tooltip on left"> left</button>
                    <button title="Tooltip on bottom" data-placement="bottom" data-toggle="tooltip " className="btn btn-default tooltips" type="button"> bottom</button>
                    <button title="Tooltip on right" data-placement="right" data-toggle="tooltip" className="btn btn-default tooltips" type="button"> right</button>
                  </div>
                </section>
                {/*tooltips start*/}
                {/*popover start*/}
                <section className="panel">
                  <div className="panel-body">
                    <button data-original-title="Popovers in top" data-content="And here's some amazing content. It's very engaging. right?" data-placement="top" data-trigger="hover" className="btn btn-info popovers">Popover on Top</button>
                    <button data-original-title="Popovers in bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-placement="bottom" data-trigger="hover" className="btn btn-info popovers">Bottom</button>
                    <button data-original-title="Popovers in right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-placement="right" data-trigger="hover" className="btn btn-info popovers">Right</button>
                    <button data-original-title="Popovers in left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-placement="left" data-trigger="hover" className="btn btn-info popovers">Left</button>
                  </div>
                </section>
                {/*popover start*/}
                {/*modal start*/}
                <section className="panel">
                  <header className="panel-heading">
                    Modal Dialogs
                  </header>
                  <div className="panel-body">
                    <a className="btn btn-success" data-toggle="modal" href="#myModal">
                      Dialog
                    </a>
                    <a className="btn btn-warning" data-toggle="modal" href="#myModal2">
                      Confirm
                    </a>
                    <a className="btn btn-danger" data-toggle="modal" href="#myModal3">
                      Alert !
                    </a>
                    {/* Modal */}
                    <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title">Modal Tittle</h4>
                          </div>
                          <div className="modal-body">
                            Body goes here...
                          </div>
                          <div className="modal-footer">
                            <button data-dismiss="modal" className="btn btn-default" type="button">Close</button>
                            <button className="btn btn-success" type="button">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* modal */}
                    {/* Modal */}
                    <div className="modal fade" id="myModal2" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title">Modal Tittle</h4>
                          </div>
                          <div className="modal-body">
                            Body goes here...
                          </div>
                          <div className="modal-footer">
                            <button data-dismiss="modal" className="btn btn-default" type="button">Close</button>
                            <button className="btn btn-warning" type="button"> Confirm</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* modal */}
                    {/* Modal */}
                    <div className="modal fade" id="myModal3" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title">Modal Tittle</h4>
                          </div>
                          <div className="modal-body">
                            Body goes here...
                          </div>
                          <div className="modal-footer">
                            <button className="btn btn-danger" type="button"> Ok</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* modal */}
                  </div>
                </section>
                {/*modal start*/}
                {/*carousel start*/}
                <section className="panel">
                  <div id="c-slide" className="carousel slide auto panel-body">
                    <ol className="carousel-indicators out">
                      <li className="active" data-slide-to={0} data-target="#c-slide" />
                      <li className data-slide-to={1} data-target="#c-slide" />
                      <li className data-slide-to={2} data-target="#c-slide" />
                    </ol>
                    <div className="carousel-inner">
                      <div className="item text-center active">
                        <h3>Creative is new model of Admin</h3>
                        <small className>Based on Bootstrap 3</small>
                      </div>
                      <div className="item text-center">
                        <h3>Massive UI Elements</h3>
                        <small className>Fully Responsive</small>
                      </div>
                      <div className="item text-center">
                        <h3>Well Documentation</h3>
                        <small className>Easy to Use</small>
                      </div>
                    </div>
                    <a data-slide="prev" href="#c-slide" className="left carousel-control">
                      <i className="arrow_carrot-left_alt2" />
                    </a>
                    <a data-slide="next" href="#c-slide" className="right carousel-control">
                      <i className="arrow_carrot-right_alt2" />
                    </a>
                  </div>
                </section>
                {/*carousel end*/}
                {/*gritter notification start*/}
                <section className="panel">
                  <header className="panel-heading">
                    Gritter Notifications
                  </header>
                  <div className="panel-body">
                    <p className>Click on below buttons to check it out.</p>
                    <a id="add-regular" className="btn btn-default btn-sm" href="javascript:;">Regular</a>
                    <a id="add-sticky" className="btn btn-success  btn-sm" href="javascript:;">Sticky</a>
                    <a id="add-without-image" className="btn btn-info  btn-sm" href="javascript:;">Imageless</a>
                    <a id="add-gritter-light" className="btn btn-warning  btn-sm" href="javascript:;">Light</a>
                    <a id="add-max" className="btn btn-primary  btn-sm" href="javascript:;">Max of 3</a>
                    <a id="remove-all" className="btn btn-danger  btn-sm" href="#">Remove all</a>
                  </div>
                </section>
                {/*gritter notification end*/}
              </div>
              <div className="col-lg-6">
                <section className="panel">
                  <header className="panel-heading">
                    Panels
                  </header>
                  <div className="panel-body">
                    <div className="panel panel-primary">
                      <div className="panel-heading">Panel heading</div>
                      <div className="panel-content">Panel content</div>
                    </div>
                    <div className="panel panel-success">
                      <div className="panel-heading">Panel heading</div>
                      <div className="panel-content">Panel content</div>
                    </div>
                    <div className="panel panel-warning">
                      <div className="panel-heading">Panel heading</div>
                      <div className="panel-content">Panel content</div>
                    </div>
                    <div className="panel panel-danger">
                      <div className="panel-heading">Panel heading</div>
                      <div className="panel-content">Panel content</div>
                    </div>
                    <div className="panel panel-info">
                      <div className="panel-heading">Panel heading</div>
                      <div className="panel-content">Panel content</div>
                    </div>
                  </div>
                </section>
                {/*progress bar start*/}
                <section className="panel">
                  <header className="panel-heading">
                    Basic Progress Bars
                  </header>
                  <div className="panel-body">
                    <div className="progress progress-xs">
                      <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    <div className="progress progress-xs">
                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                        <span className="sr-only">40% Complete (success)</span>
                      </div>
                    </div>
                    <div className="progress progress-xs">
                      <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                        <span className="sr-only">20% Complete</span>
                      </div>
                    </div>
                    <div className="progress progress-xs">
                      <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span className="sr-only">60% Complete (warning)</span>
                      </div>
                    </div>
                    <div className="progress progress-xs">
                      <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span className="sr-only">80% Complete</span>
                      </div>
                    </div>
                    <p className>
                      Stacked Progress Bars
                    </p>
                    <div className="progress progress-sm">
                      <div className="progress-bar progress-bar-success" style={{width: '35%'}}>
                        <span className="sr-only">35% Complete (success)</span>
                      </div>
                      <div className="progress-bar progress-bar-warning" style={{width: '20%'}}>
                        <span className="sr-only">20% Complete (warning)</span>
                      </div>
                      <div className="progress-bar progress-bar-danger" style={{width: '10%'}}>
                        <span className="sr-only">10% Complete (danger)</span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="panel">
                  <header className="panel-heading">
                    Striped Progress Bars
                  </header>
                  <div className="panel-body">
                    <div className="progress progress-striped progress-sm">
                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                        <span className="sr-only">40% Complete (success)</span>
                      </div>
                    </div>
                    <div className="progress progress-striped progress-sm">
                      <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                        <span className="sr-only">20% Complete</span>
                      </div>
                    </div>
                    <div className="progress progress-striped progress-sm">
                      <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span className="sr-only">60% Complete (warning)</span>
                      </div>
                    </div>
                    <div className="progress progress-striped progress-sm">
                      <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span className="sr-only">80% Complete (danger)</span>
                      </div>
                    </div>
                    <p className>
                      Animated Progress Bars
                    </p>
                    <div className="progress progress-striped active progress-sm">
                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{width: '45%'}}>
                        <span className="sr-only">45% Complete</span>
                      </div>
                    </div>
                  </div>
                </section>
                {/*progress bar end*/}
                {/*collapse start*/}
                <div className="panel-group m-bot20" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                          Collapsible Group Item #1
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                          Collapsible Group Item #2
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                          Collapsible Group Item #3
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
                {/*collapse end*/}
                {/*label and badge start*/}
                <section className="panel">
                  <div className="panel-body">
                    <p className=" text-center">Labels</p>
                    <p className="text-center">
                      <span className="label label-default">label</span>
                      <span className="label label-primary">Primary</span>
                      <span className="label label-success">Success</span>
                      <span className="label label-info">Info</span>
                      <span className="label label-inverse">Inverse</span>
                      <span className="label label-warning">Warning</span>
                      <span className="label label-danger">Danger</span>
                    </p>
                    <p className=" text-center">Badges</p>
                    <p className="m-bot-none text-center">
                      <span className="badge">5</span>
                      <span className="badge bg-primary">10</span>
                      <span className="badge bg-success">15</span>
                      <span className="badge bg-info">20</span>
                      <span className="badge bg-inverse">25</span>
                      <span className="badge bg-warning">30</span>
                      <span className="badge bg-important">35</span>
                    </p>
                  </div>
                </section>
                {/*label and badge end*/}
                {/*pagination start*/}
                <section className="panel">
                  <div className="panel-body">
                    <div>
                      <ul className="pagination pagination-lg">
                        <li><a href="#">«</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">»</a></li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <ul className="pagination">
                        <li><a href="#">«</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">»</a></li>
                      </ul>
                    </div>
                    <div>
                      <ul className="pagination pagination-sm pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">»</a></li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/*pagination end*/}
              </div>
            </div>
          </section>
        </section>
      </section>

  </div>
          
    );
  }
  
  export default General;