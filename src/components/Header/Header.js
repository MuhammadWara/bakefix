import React, { Component } from 'react';

import './header.css';
import { Link } from 'react-router-dom';


 const Header = () =>{
const Logout = () => {
localStorage.clear()
}
    return (
			<nav className="navbar navbar-expand-lg ">
        <div className="container">
				<div className="logo">
						<a className="navbar-brand" href="index.html">
							<img src= '../images/bakefix.png' alt=""/></a>
				</div>
				<button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon text-white">
					<i class="fas fa-bars"></i>
					</span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-lg-auto text-lg-right text-center ">
						<li className="nav-item active">
							<a className="nav-link active mynav "  id="home" eventkey={1} ComponentClass={Link} onClick="App()" href="/" to="/">Home
								
								<span className="sr-only">(current)</span>
							</a>
						</li>
					
						<li className="nav-item">
							<a className="nav-link active mynav"  eventkey={2} ComponentClass={Link} href="/Gallery" to="/Gallery" >Menu</a>
						</li>
						<li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active mynav" href="#" id="navbarDropdown" role="button" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                    eventkey={3} ComponentClass={Link} href="/" to="/">
                      Others
                    </a>
                    <div className="dropdown-menu text-lg-left text-center" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item  " eventkey={4} ComponentClass={Link} href="/About/#services" to="/About/#services">Services</a>
                      <a className="dropdown-item" eventkey={5} ComponentClass={Link} href="/Home/#products" to="/Home/#products">New Products</a>
                      <a className="dropdown-item " eventkey={6} ComponentClass={Link} href="/Home/#news" to="/Home/#news">Company News</a>
                      <a className="dropdown-item" eventkey={7} ComponentClass={Link} href="/About/#chefs" to="/About/#chefs">Team</a>
                    </div>
                  </li>
						<li className="nav-item">
							<a className="nav-link active mynav" eventkey={8} ComponentClass={Link} href="/About" to="/About" >About Us</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active mynav" eventkey={9} ComponentClass={Link} href="/Contact" to="/Contact">Contact Us</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active mynav" eventkey={10} ComponentClass={Link} href="/Form" to="/Form">Membership</a>
						</li>
						<li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                    eventkey={3} ComponentClass={Link} href="/" to="/">
               
                    </a>
					<div className="dropdown-menu text-lg-left text-center" aria-labelledby="navbarDropdown">
                      <a href="#" className="dropdown-item">Maha </a>
					  <a href="#" className="dropdown-item" onClick={Logout}> Logout</a>
					</div>
					</li>
						
						
					</ul>
					
				
					
				</div>
			</div>
			
			</nav>
			
		
	);
	
	function App() {
		window.location = "./Gallery.js"
	//document.getElementById('home').value.style={color: "#0000"}	
			
  }

    }

	 export default Header;
	 
