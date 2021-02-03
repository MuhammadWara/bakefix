import React, {Component, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import GetList from './display';



export class Orders extends Component {
    constructor(props) {
     super(props);
        this.state = {
            items: [],
            isloaded: false,
        }
    }

    componentDidMount() {

        fetch('http://localhost/bakefix/Dorders.php')
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
        {/*header start*/}
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
                <h3 className="page-header"><i class="fas fa-birthday-cake"></i> Bakefix Orders</h3>
                <ol className="breadcrumb">
                  <li><i className="fa fa-home" /><a ComponentClass={Link} href="/Home" to="/Home">Home</a></li>
                  <li><i class="fas fa-birthday-cake"></i>Orders</li>
                </ol></div>
            </div>
            <div className="container">
            <table  className="table table-bordered">
            <thead class="thead-dark">
                    <th>
                       Order_ID
                    </th>
                    <th>
                        Customer Name
                    </th>
                    <th>
                        Address
                    </th>
                    <th>
                        Order Name
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                       Payment
                    </th>
                    <th>
                       Contact
                    </th>
                    </thead>
                    {items.members.map(item =>(
                        <tr classs="table table-striped">
                            <td>{item.order_id} </td> 
                            <td>{item.cust_name} </td> 
                            <td>{item.address} </td> 
                            <td>{item.order_name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.total_amount}</td>
                            <td>{item.contact}</td>
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
}
}
  export default Orders;