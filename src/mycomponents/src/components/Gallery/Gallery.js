import React, {Component} from 'react';
import { Link } from 'react-router-dom';



export class Gallery extends Component {
  constructor(props) {
   super(props);
      this.state = {
          items: [],
          isloaded: false,
      }
  }
  componentDidMount() {

    fetch('http://localhost/bakefix/my.php')
        .then(res => res.json())
       
        .then(json => {
            this.setState({
                isloaded: true,
                items: json,

            })
        });
        
    }     
  render() {
    var { isloaded, items } = this.state;
        if (!isloaded) {
            return (<div>Loading.....</div> );
        }
        else {
  return(
<div>

<section id="container" className>
<header className="header dark-bg">
          <div className="toggle-nav">
            <div className="icon-reorder tooltips" data-original-title="Toggle Navigation" data-placement="bottom"><i className="icon_menu" /></div>
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
                <a className ComponentClass={Link} href="/Orders" to="/Orders">
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
                <a className ComponentClass={Link} href="/COrders" to="/COrders">
                <i class="fas fa-clipboard-list"></i>
                  <span>Complain</span>
                </a>
              </li>
              <li>
                <a className ComponentClass={Link} href="/COrders" to="/COrders">
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
            <div className="row">
              <div className="col-lg-12">
                <h3 className="page-header"><i class="fas fa-user-check"></i> Registered Members</h3>
                <ol className="breadcrumb">
                  <li><i className="fa fa-home" /><a ComponentClass={Link} href="/Home" to="/Home">Home</a></li>
                  <li><i class="fas fa-user-check"></i>members</li>
                </ol></div>
            </div>
            <div className="container">
            <table  className="table table-bordered">
            <thead class="thead-dark">
                    <th>
                        member_ID
                    </th>
                    <th>
                       Member name
                    </th>
                    <th>
                       Email
                    </th>
                    <th>
                      Password
                    </th>
                    <th>
                      Contact
                    </th>
                    </thead>
                    {items.members.map(item =>(
                        <tr classs="table table-striped">
                            <td>{item.mem_id} </td> 
                            <td>{item.mem_name} </td> 
                            <td>{item.mem_email} </td> 
                            <td>{item.password}</td>
                            <td>{item.mem_contact}</td>
                        </tr> 
                    ))}
                </table>
                </div>
            
          </section>
        </section>
      </section>
  </div>
          
    );
  }
}}
  export default Gallery;