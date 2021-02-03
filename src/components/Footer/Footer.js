import React, { Component } from 'react';
// import {link} from 'react-router-dom';
import './Footer.css';

import FontAwesome from 'react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';




const Footer = () =>{
  
    return (
<div>
<footer className="text-center py-sm-4 py-3">
		<div className="container py-xl-5 py-3">
			<div className="w3l-footer footer-social-agile mb-4">
				<div className="social-container">
				<ul className="list-unstyled">
					<li>
						<a href="https://facebook.com/" className="facebook social " target="blank">
						<FontAwesomeIcon icon={faFacebook} size="2x"/>
						</a>
					</li>
					<li className="mx-1">
						<a href="https://twitter.com/" className="twitter social" target="blank">
						<FontAwesomeIcon icon={faTwitter} size="2x"/>
						</a>
					</li>
					<li>
						<a href="https://instagram.com/" className="instagram social" target="blank">
						<FontAwesomeIcon icon={faInstagram} size="2x"/>
						</a>
					</li>
					<li className="ml-1">
						<a href="https://youtube.com/" className="youtube social" target="blank">
							<FontAwesomeIcon icon={faYoutube} size="2x"/>
						</a>
					</li>
				</ul>
				</div>
			</div>
			
			<p className="copy-right-grids text-light my-lg-5 my-4 pb-4">© 2018 Cake Bakery. All Rights Reserved | Design by
				<a href="https://w3layouts.com/" target="_blank"> W3layouts</a>
			</p>
			
		</div>
		
		<img src="./images/chef.png" alt="" className="img-fluid chef-style" />
		
	</footer>
	</div>

        );
    }
     
     export default Footer;