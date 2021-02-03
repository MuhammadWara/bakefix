import React from "react";

import { Redirect } from "react-router-dom";
import firebase from 'firebase';
import Home from "../components/Home/Home";

import {BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom'
import { useHistory } from "react-router-dom";



export class Login extends React.Component {



  
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    
    this.state={
      email:"",
      password:"",
     isloggedIn: false
    }

    
  }


  onChangeUsername(e) {
    this.setState({
      email: e.target.value
    })
  };

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  };

onSubmit = (e) => {
    e.preventDefault();
   
//     const json = JSON.stringify({
//       name: this.state.name,
//       password: this.state.password,
//       Loggedin:this.state.login
//     });

//   //  axios.post('http://localhost/bakefix/login.php', json, {
     
//   //   }).then(res => {
      
      
//   // }).catch(function (error){
//   //     console.log(error);
//   //   });
firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then((res) => {
  this.setState.isloggedIn = true;
  
    console.log(res)
   alert("successful")
  //  let history = useHistory();
  //  if(this.state.isloggedIn === true){
  //   console.log("ruko");
  //   return (<Redirect to="/Home" />);
  // }else{
  //   console.log("nin chala")
  //   var Router = require('react-router');
  //   history.pushState("MyName",'',"/Home");
  // }
   //director();
   //const history = useHistory();
   //router.transitionTo('/Home')
   //return <Redirect to="/" />;
   
// <Redirect path="/login" render={login}/> 
    //  <Router>
    //      <div><Link to="/"></Link></div>
    //      </Router>
   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(errorMessage);
  });

  this.setState({
   
    email:"",
    password:"",
   
  })
}
  render() {

    
    return (
      <div className="base-container" ref={this.props.containerRef}>
        
        <div className="header">Bakefix <br/>Login <br/><br/></div>
        <div className="content">
         
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="text" name="username" placeholder="Email" value={this.state.email} onChange={this.onChangeUsername} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChangePassword}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn1" onClick={this.onSubmit}>
            Login
          </button><br/>
          
           <br/>

          <a className="backh" href="index.html">Back to home
							</a>
        </div>
      </div>
      
    );
  }
}
