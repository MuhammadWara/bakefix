import React, {Component} from 'react';

import { Link } from 'react-router-dom';


const Compose =() =>{
  
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
                  <span className="icon-task-l">
                    <span className="badge bg-important">5</span>
                  </span></a>
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
              <li className="sub-menu ">
                <a href="javascript:;">
                  <i className="fas fa-mail-bulk"/>
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
                <h3 className="page-header"><i className="fas fa-mail-bulk" /> Mail</h3>
                <ol className="breadcrumb">
                  <li><i className="fa fa-home" /><a ComponentClass={Link} href="/Home" to="/Home">Home</a></li>
                  <li><i class="fas fa-envelope-open" />Compose Mail</li>
                </ol></div>
            </div>
            </section>
        </section>
        <section id="main-content">
        <section className="wrapper">
          {/* page start*/}
          <div className="mail-w3agile">
            <div className="row">
              <div className="col-sm-3 com-w3ls">
                <section className="panel">
                  <div className="panel-body">
                    <a ComponentClass={Link} href="/Compose" to="/Compose" className="btn btn-compose">
                      Compose Mail
                    </a>
                    <ul className="nav nav-pills nav-stacked mail-nav">
                      <li className="active"><a ComponentClass={Link} href="/Mail" to="/Mail"> <i className="fa fa-inbox" /> Inbox  <span className="label label-danger pull-right inbox-notification">9</span></a></li>
                      <li><a href="#"> <i className="fa fa-envelope-o" /> Send Mail</a></li>
                      <li><a href="#"> <i className="fa fa-certificate" /> Important</a></li>
                      <li><a href="#"> <i className="fa fa-file-text-o" /> Drafts <span className="label label-info pull-right inbox-notification">123</span></a></li>
                      <li><a href="#"> <i className="fa fa-trash-o" /> Trash</a></li>
                    </ul>
                  </div>
                </section>
                <section className="panel">
                  <div className="panel-body">
                    <ul className="nav nav-pills nav-stacked labels-info ">
                      <li> <h4>Buddy online</h4> </li>
                      <li> <a href="#"> <i className="fa fa-comments-o text-success" /> Jonathan Smith <p>I do not think</p></a></li>
                      <li> <a href="#"> <i className="fa fa-comments-o text-danger" /> iRon <p>Busy with coding</p></a> </li>
                      <li> <a href="#"> <i className="fa fa-comments-o text-muted " /> Anjelina Joli <p>I out of control</p></a></li>
                      <li> <a href="#"> <i className="fa fa-comments-o text-muted " /> Samual Daren <p>I am not here</p></a></li>
                      <li> <a href="#"> <i className="fa fa-comments-o text-muted " /> Tis man <p>I do not think</p></a></li>
                    </ul>
                    <a href="#"> + Add More</a>
                    <div className="inbox-body text-center inbox-action">
                      <div className="btn-group">
                        <a className="btn mini btn-default" href="javascript:;">
                          <i className="fa fa-power-off" />
                        </a>
                      </div>
                      <div className="btn-group">
                        <a className="btn mini btn-default" href="javascript:;">
                          <i className="fa fa-cog" />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-sm-9 mail-w3agile">
                <section className="panel">
                  <header className="panel-heading wht-bg">
                    <h4 className="gen-case"> Compose Mail
                      <form action="#" className="pull-right mail-src-position">
                        <div className="input-append">
                          <input type="text" className="form-control " placeholder="Search Mail" />
                        </div>
                      </form>
                    </h4>
                  </header>
                  <div className="panel-body">
                    <div className="compose-btn pull-right">
                      <button className="btn btn-primary btn-sm"><i className="fa fa-check" /> Send</button>
                      <button className="btn btn-sm"><i className="fa fa-times" /> Discard</button>
                      <button className="btn btn-sm">Draft</button>
                    </div>
                    <div className="compose-mail">
                      <form role="form-horizontal" method="post">
                        <div className="form-group">
                          <label htmlFor="to" className>To:</label>
                          <input type="text" tabIndex={1} id="to" className="form-control" />
                          <div className="compose-options">
                            <a onclick="$(this).hide(); $('#cc').parent().removeClass('hidden'); $('#cc').focus();" href="javascript:;">Cc</a>
                            <a onclick="$(this).hide(); $('#bcc').parent().removeClass('hidden'); $('#bcc').focus();" href="javascript:;">Bcc</a>
                          </div>
                        </div>
                        <div className="form-group hidden">
                          <label htmlFor="cc" className>Cc:</label>
                          <input type="text" tabIndex={2} id="cc" className="form-control" />
                        </div>
                        <div className="form-group hidden">
                          <label htmlFor="bcc" className>Bcc:</label>
                          <input type="text" tabIndex={2} id="bcc" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="subject" className>Subject:</label>
                          <input type="text" tabIndex={1} id="subject" className="form-control" />
                        </div>
                        <div className="compose-editor">
                          <textarea className="wysihtml5 form-control" rows={9} defaultValue={""} />
                          <input type="file" className="default" />
                        </div>
                        <div className="compose-btn">
                          <button className="btn btn-primary btn-sm"><i className="fa fa-check" /> Send</button>
                          <button className="btn btn-sm"><i className="fa fa-times" /> Discard</button>
                          <button className="btn btn-sm">Draft</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* page end*/}
          </div>
        </section>
      </section>
      </section>

  </div>
          
    );
  }
  
  export default Compose;