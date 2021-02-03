import React, {Component} from 'react';
import './Home.css';
import {Slide} from 'react-slideshow-image'
import { Link } from 'react-router-dom';

// import Cake from '../Cakepics/CakeUI';
const proprietes = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
  
  
  }

const Home =() =>{
  const pge = "./Gallery.js"
  return(
<div>
<div className="containerSlide">
    <Slide {...proprietes}>
        <div className="each-slide">
            <div>
            <img src= '../images/1.jpg'/>
            </div>

        </div>

        <div className="each-slide">
            <div>
            <img src= '../images/2.jpg'/>
            </div>

        </div>
        <div className="each-slide">
            <div>
            <img src= '../images/3.jpg'/>
            </div>

        </div>
        <div className="each-slide">
            <div>
            <img src= '../images/4.jpg'/>
            </div>

        </div>




    </Slide>
</div>
    
    <div class="banner-text-agile text-center">
    <div class="container">
      <h3 className="text1">The Taste Of Our Amazing Cakes</h3>
      <p className="text-light">A party without cake is really just a meeting.</p>
	  
      <a type="button" className="btn btn-primary button mt-md-5 mt-4 wid " ComponentClass={Link} href="/Gallery" to="/Gallery"> Quick Order 
      </a><br/>
	  <a type="button" className=" btn btn-primary button mt-md-5 mt-4 wid " ComponentClass={Link} href="/Custom" to="/Custom.js"> 
	  <span> Customize Order </span>
      </a>
    </div>
  </div>  
  
		
        
            <div>
		<div class="banner-bottom-w3layouts" id="about">
			<div class="container pt-xl-5 pt-lg-3">
				<div class="row mt-5">
					<div class="col-lg-6">
						<p class="text-uppercase">A few words</p>
						<h3 class="aboutright">Welcome to our BakeFix Bakery</h3>
						<h4 class="aboutright">Make your moments like never coming again</h4>
						<p>A birthday party is not complete without birthday cakes. Organizing a birthday is an opportunity to show 
love for one another, either 
to a kid or an adult. An ordinary menu with cake is sufficient to make 
you have an ideal birthday party.</p>
						<a type="button" class="btn btn-primary button mt-md-5 mt-4" ComponentClass={Link} href="/About" to="/About">
							<span>Learn More</span>
					</a>
					</div>
					</div>
				</div>
			</div></div>

      <div class="some-another text-center pb-5">
			<div class="container pb-xl-5 pb-lg-3">
				<i class="fas fa-utensils"></i>
				<p class="text-uppercase mb-4 mt-2">A few words about our Site</p>
				<h4 class="aboutright about-right-2">A bakefix is an establishment that produces and sells flour-based food baked in an oven 
such as bread, cookies, cakes, pastries, and pies. you will find an outstanding quality of ingredients and carefully prepared by the professional chefs.</h4>
				<h5 class="text-uppsecase font-weight-bold text-dark mt-4">Chloe Jack
					<span class="text-secondary font-weight-normal">(Master Chef)</span>
				</h5>
			</div>
		</div>
	
		<img src= '../images/cake7.png' height="500px" width="200px" alt="" class="img9"/> 

		<div className="middlesection-agile ">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 text-lg-left text-center pt-4">
					<img src="images/women.png" alt="" class="img4" />
			
				</div>
			</div>
		</div>
	</div>
	
	<div className="serives-agile py-5 bg-light border-top" id="services">
		<div className="container py-xl-5 py-lg-3">
			<div className="row support-bottom text-center">
				<div className="col-md-4 support-grid">
					<i className="far fa-heart"></i>
					<h5 className="text-dark text-uppercase mt-4 mb-3">Made With Love</h5>
					<p>Every birthday, every celebration ends with something sweet and cake. it's all about the memories.</p>
				</div>
				<div className="col-md-4 support-grid my-md-0 my-4">
					<i className="fas fa-birthday-cake"></i>
					<h5 className="text-dark text-uppercase mt-4 mb-3">Seasonal Cakes</h5>
					<p>Sensational Cakes and more producing one-of-a-kind, personalized, over-the-top cakes that tastes as amazing as it looks!</p>
				</div>
				<div className="col-md-4 support-grid">
				<i class="fas fa-magic"></i>
					<h5 className="text-dark text-uppercase mt-4 mb-3">Customize Services</h5>
					<p>We also offer customize and decoration of cake to delight and entertain your guests. And make your event more memorable!</p>
				</div>
			</div>
		</div>
	</div>
  <div className="featured-section py-5" id="products">
		<div class="container py-xl-5 py-lg-3">
			<div class="title text-center mb-5">
				<h3 class="text-dark mb-2">New Products</h3>
				<p>You better believe baking is our happy place.</p>
			</div>
			<div class="content-bottom-in">
				<ul id="flexiselDemo1" className="list">
					<li >
						<div class="w3l-specilamk">
							<div class="row">
								<div class="col-lg-6 product-name-w3l">
									<h4 class="font-weight-bold">Strawberry Cakes</h4>
									<p class="dont-inti-w3ls mt-4 mb-2">Strawberry Cake is full of sweet, fresh strawberry flavor!.</p>
									<p>This Strawberry Cake is full of sweet, fresh strawberry flavor! Moist strawberry cake layers are paired with a 
strawberry cream cheese frosting for the ultimate strawberry cake</p>
								
								</div>
								<div class="col-lg-6 speioffer-agile">
									<img src="images/product1.jpg" alt="" class="img-fluid"/>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="w3l-specilamk">
							<div class="row">
								<div class="col-lg-6 product-name-w3l">
									<h4 className="font-weight-bold">Dessert Cakes</h4>
									<p class="dont-inti-w3ls mt-4 mb-2">Dessert without cheese is like a beauty with only one eye.</p>
									<p>These desserts look like a professional made them, but are actually so easy to put together. From cakes to brownies to macarons, add these to your baking to-do list ASAP. 
For more easy sweets, try our amazing no-bake desserts..</p>
								
								</div>
								<div className="col-lg-6 speioffer-agile">
									<img src="images/product2.jpg" alt="" class="img-fluid"/>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="w3l-specilamk">
							<div className="row">
								<div class="col-lg-6 product-name-w3l">
									<h4 class="font-weight-bold">Vanilla Cakes</h4>
									<p class="dont-inti-w3ls mt-4 mb-2">Life's too short to say no to cake. A balanced diet is having a piece of cake in each hand.</p>
									<p>With its outstanding vanilla flavor, pillowy soft crumb, and creamy vanilla buttercream, this is truly the best vanilla cake I’ve ever had. 
And after 1 bite, I guarantee you’ll agree..</p>
									
								</div>
								<div class="col-lg-6 speioffer-agile">
									<img src="images/product3.jpg" alt="" class="img-fluid"/>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="w3l-specilamk">
							<div class="row">
								<div class="col-lg-6 product-name-w3l">
									<h4 class="font-weight-bold">Vanilla Almond</h4>
									<p class="dont-inti-w3ls mt-4 mb-2"></p>
									<p>Our most popular wedding flavor, Vanilla Almond is extra moist with a rich almond flavor, paired perfectly with our house vanilla buttercream.</p>
									
								</div>
								<div class="col-lg-6 speioffer-agile">
									<img src="images/product4.jpg" alt="" className="vanila"/>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="w3l-specilamk">
							<div class="row">
								<div class="col-lg-6 product-name-w3l">
									<h4 class="font-weight-bold">Chocolate Cakes</h4>
									<p class="dont-inti-w3ls mt-4 mb-2">Anything is good if it's made of chocolate.</p>
									<p>Your hand and your mouth agreed many years ago that, as far as chocolate
 is concerned, there is no need to involve your brain. All you need is love. But a little chocolate now and then doesn't hurt.</p>
									
								</div>
								<div class="col-lg-6 speioffer-agile">
									<img src="images/product5.jpg" alt="" class="img-fluid"/>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>




  <div class="serives-agile py-5 bg-light" id="support">
		<div class="container py-xl-5 py-lg-3">
			<div class="title text-center mb-5">
				<h3 class="text-dark mb-2">Help & Support</h3>
				<p>You can find help here!</p>
			</div>
			<div class="row support-bottom text-center">
				<div class="col-md-4 support-grid">
					
				</div>
				<div class="col-md-4 support-grid my-md-0 my-5">
					<i class="far fa-comments"></i>
					<h5 class="text-dark text-uppercase mt-4 mb-3">Contact Us</h5>
					
				<a ComponentClass={Link} href="/Contact" to="/Contact">	<button type="button" class="button  active" >
						<span>Contact Us</span>
					</button></a>
				</div>
				<div class="col-md-4 support-grid">
					
				</div>
			</div>
		</div>
	</div>
  </div>
          
    );
  }
  
  export default Home;