import React, {Component} from 'react';
import { Link } from 'react-router-dom';



const Loginform =() =>{
  
  return(
<div>

<div className="container">
        <form className="login-form" action="/Home">
          <div className="login-wrap">
            <p className="login-img"><i className="icon_lock_alt" /></p>
            <div className="input-group">
              <span className="input-group-addon"><i className="icon_profile" /></span>
              <input type="text" className="form-control" placeholder="Username" autofocus />
            </div>
            <div className="input-group">
              <span className="input-group-addon"><i className="icon_key_alt" /></span>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <label className="checkbox">
              <input type="checkbox" defaultValue="remember-me" /> Remember me
              <span className="pull-right"> <a href="#"> Forgot Password?</a></span>
            </label>
            <div className="clearfix" />
            <a ComponentClass={Link} href="/Home" to="/Home">
            <button className="btn btn-primary btn-lg btn-block" type="submit">LOGIN</button></a>
            <br/>
            <p className=" text-success">Have an account?.
            <a ComponentClass={Link} href="/Registrationform" to="/Registrationform" ><u className="text-primary">SIGNUP</u></a></p><br/></div>
        </form>
      </div>
  </div>
          
    );
  }
  
  export default Loginform;