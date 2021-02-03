import React from "react";
import axios from 'axios';
import firebase from 'firebase';
import { useHistory } from "react-router-dom";


//const history = useHistory()
export class Register extends React.Component { 
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.valid = this.valid.bind(this);

    this.state={
      name:"",
      email:"",
      password:"",
      phone: "",
      emailError:"",
      passwordError:"",
      nameError:"",
      phoneError:""
    }
  }
  onChangeUsername(e) {
    this.setState({
      name: e.target.value,
      value :e.target.value
    });
  };
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  };
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  };

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }


  valid(){
    if(this.state.name.includes(""||undefined?"empty":"no-empty") && this.state.email.includes("@") && this.state.password.length<5 && this.state.phone.length==0)
    {
      this.setState({nameError:"name can't be empty", emailError:"Invalid email", passwordError:"password length should be greater than 5", phoneError:"cant be empty"})
    }
    else if(!this.state.email.includes("@") && this.state.password.length<5)
    {
      this.setState({emailError:"Invalid email", passwordError:"password length should be greater than 5"})
    }
    else if(!this.state.email.includes("@"))
    {
      this.setState({emailError:"Invalid email"})
    }
    else if(!this.state.password.length<5)
    {
      this.setState({passwordError:"password length should be greater than 5"})
    }
    else if(this.state.name.includes(""||undefined?"empty":"no-empty"))
    {
      this.setState({nameError:"name can't be empty"})
    }
    else if(!this.state.phone.includes("0")){
      this.setState({phoneError:"phone should contain 0"})
    }
    else if(this.state.email.includes("")){
      this.setState({emailError:"email can't be empty"})
    }
    else{
      return this.setState({emailError:"",phoneError:"",nameError:""});
    }
  }

  onSubmit(e){
    e.preventDefault();
    const obj = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone

    };
    const json = JSON.stringify({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone});
      const res = axios.post('http://localhost/bakefix/reg.php', json, {
      
    }).then(firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
      console.log("Signed In")
      // history.push("/")
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorMessage);
    }))
    
  
this.setState({
      name:"",
      email:"",
      password:"",
      phone: ""
})

}
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Bakefix <br/>Register yourself Now!</div>
        
          
          <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input className="form-control" type="name" name="name" placeholder="username" value={this.state.name} onChange={this.onChangeUsername} />

              <p style={{color:'red',fontSize:12 }}>{this.state.nameError}</p> 
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-control" type="email" name="email" placeholder="email"  value={this.state.email} onChange={this.onChangeEmail} />
             <p style={{color:'red',fontSize:12 }}>{this.state.emailError}</p> 
          </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control" type="password" name="password" placeholder="password"  value={this.state.password} onChange={this.onChangePassword}/>
              <p style={{color:'red',fontSize:12 }}>{this.state.passwordError}</p> 
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone</label>
              <input className="form-control"  type="phone" name="phone" placeholder="phone number"  value={this.state.phone} onChange={this.onChangePhone}/>
              <p style={{color:'red',fontSize:12 }}>{this.state.phoneError}</p> 
          </div>
          </div>
          
        </div>
        <div className="footer">
          <button type="button" className="btn1" onClick={this.onSubmit,this.valid}>
            Register
          </button><br/> <br/>
          <a className="backh" href="index.html">Back to home
							</a>
        </div>
      </div>
    );
  }
}
