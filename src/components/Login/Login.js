import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () =>{
  
    return (<div>
    
    
    
    
    <div className="banner2-w3ls">
        </div>
        <div class="banner-text-agile text-center">
    <div class="container">
      <h3 className="rf">Login Form</h3></div></div>
        
        <div className="breadcrumb-agile">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Login</li>
            </ol>
          </nav>
        </div>
        <div className="login-contect py-5">
        <div className="container py-xl-5 py-3">
          <div className="login-body">
            <div className="login p-4 mx-auto">
              <h5 className="text-center me">Members Login</h5>
              <br/>
              <form action="#" method="post">
                <div className="form-group">
                  <label className="pa">Your Name</label>
                  <input type="text" className="in" name="name" placeholder="" required =""/>
                </div>
                <div className="form-group">
                  <label className="pa">Password</label>
                  <input type="password" className="in" name="password" placeholder="" required="" />
                </div>
                <button type="submit" className="lo">Login</button><br/><br/><br/>
                
                
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
        );
      }
      export default Login;