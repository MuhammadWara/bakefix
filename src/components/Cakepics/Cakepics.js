import React, {Component} from 'react'
import Cake from './CakeUI';

const Cakes = () =>{
  
    return (
          <div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-2">
                        <Cake imgscr={'../images/img1.png'}/>

                    </div>
                    <div className="col-md-2">
                        <Cake imgscr={'../images/img1.png'}/>

                    </div>
                    <div className="col-md-2">
                        <Cake imgscr={'../images/img2.png'}/>

                    </div>
                    <div className="col-md-2">
                        <Cake imgscr={'../images/img3.png'}/>

                    </div>
                    
                    <div className="col-md-2">
                        <Cake imgscr={'../images/img4.png'}/>

                    </div>
                    
                    
               </div> </div>
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
						<button type="button" class="btn btn-primary button mt-md-5 mt-4" onclick="window.location='about.html'">
							<span>Learn More</span>
						</button>
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
	
		<img src= '../images/cake7.png' height="500px" width="200px" alt="" class="img"/> 

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
					<h5 className="text-dark text-uppercase mt-4 mb-3">Seasonal Pastries</h5>
					<p>A basket of freshly baked pastries like scones make breakfast easy for your host the next day.</p>
				</div>
				<div className="col-md-4 support-grid">
					<i className="far fa-calendar"></i>
					<h5 className="text-dark text-uppercase mt-4 mb-3">Event Catering</h5>
					<p>We also offer cupcake icing and decorating stations to delight and entertain your guests.</p>
				</div>
			</div>
		</div>
	</div><div className="middlesection-agile ">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 text-lg-left text-center pt-4">
					<img src="images/women.png" alt="" class="img4" />
				</div>
				<div className="col-lg-6 left-build-wthree aboutright-agilewthree mt-0 py-5">
          <div className=" py-xl-5 py-lg-3">
						<h2 className="data">Some Statistical Facts</h2>
						<div className="row mb-xl-5 mb-4">
							<div className="col-4 w3layouts_stats_left w3_counter_grid">
                <p className="counter">1680</p>
								<p className="para-text-w3ls text-light">Popularity</p>
							</div>
							<div className="col-4 w3layouts_stats_left w3_counter_grid2">
								<p className="counter">1200</p>
                <p className="para-text-w3ls text-light">Happy Customers</p>
							</div>
							<div className="col-4 w3layouts_stats_left w3_counter_grid1">
								<p className="counter">400</p>
								<p className="para-text-w3ls text-light">Awards Won</p>
							</div>
						</div>
					</div>
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
				<ul id="flexiselDemo1">
					<li>
						<div class="w3l-specilamk">
							<div class="row">
								<div class="col-lg-6 product-name-w3l">
									<h4 class="font-weight-bold">Strawberry Cakes</h4>
									<p class="dont-inti-w3ls mt-4 mb-2">Strawberry Cake is full of sweet, fresh strawberry flavor!.</p>
									<p>This Strawberry Cake is full of sweet, fresh strawberry flavor! Moist strawberry cake layers are paired with a 
strawberry cream cheese frosting for the ultimate strawberry cake</p>
									<a href="#order" class="button-3 active mt-5 py-4 scroll">Order Now</a>
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
									<a href="#order" class="button-3 active mt-5 py-4 scroll">Order Now</a>
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
									<a href="#order" class="button-3 active mt-5 py-4 scroll">Order Now</a>
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
									<h4 class="font-weight-bold">Roller Coaster</h4>
									<p class="dont-inti-w3ls mt-4 mb-2">Every day is a roller coaster..</p>
									<p>Bring the fun of an amusement park to your party with a sheet cake decorated to look like a roller. There are few things in life as delightful as a cupcake. A mini cake topped with loads of frosting 
and sprinkles is basically a recipe for happiness</p>
									<a href="#order" class="button-3 active mt-5 py-4 scroll">Order Now</a>
								</div>
								<div class="col-lg-6 speioffer-agile">
									<img src="images/product4.jpg" alt="" class="img-fluid"/>
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
									<a href="#order" class="button-3 active mt-5 py-4 scroll">Order Now</a>
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



  <div class="news-agile bg-cream py-5" id="news">
		<div class="container py-xl-5 py-lg-3">
			<div class="row">
				
				<div class="col-lg-4 order-form-w3ls pl-lg-0" id="order">
					<div class="agile_its_registration bg-white">
						<h3 class="title-2 mb-3">Order a Cake</h3>
						<p class="mb-4">if you want a cake by picture so you can choose</p>
						<form action="#" method="post">
							<div class="agileits-location form-group">
								<label>Shape</label>
								<select required>
									<option value="">Round</option>
									<option value="1">rectangle</option>
									<option value="2">square</option>
									<option value="2">custom</option>
								</select>
								<div class="clear"></div>
							</div>
							<div class="agileits-location w3ls-1 form-group">
								<label>Quantity</label>
								<select required>
									<option value="">1</option>
									<option value="1">2</option>
									<option value="2">3</option>
									<option value="2">4</option>
								</select>
								<div class="clear"></div>
							</div>
							<div class="agileits-location form-group">
								<label>Size</label>
								<select required>
									<option value="">4 inch</option>
									<option value="">6 inch</option>
									<option value="">8 inch</option>
									<option value="">10 inch</option>
								</select>
								<div class="clear"></div>
							</div>
							<div class="agileits-location w3ls-1 form-group">
								<label>Flavor</label>
								<select required>
									<option value="">Chocolate</option>
									<option value="">Butterscotch </option>
									<option value="">Strawberry</option>
									<option value="">Vanilla</option>
								</select>
								<div class="clear"></div>
							</div>
              <div class="agileits-location w3ls-1 form-group">
								<label>Quantity</label>
								{/* <input type="file" name="file" placeholder="Upload an image" onChange={uploadimage}/> */}
								<div class="clear"></div>
							</div>
							<input type="submit" value="Order" class="agileinfo-order btn" />
						</form>
					</div>
				</div>
				
				<div class="col-lg-8 news-blog mt-lg-0 mt-5">
					<h3 class="title-2 mb-md-5 mb-4">Customized Cake</h3>
					<div class="row">
						<div class="col-sm-6 news-grids-agile">
							<div class="news-top">
								<a href="single.html">
									<img src="images/news1.jpg" alt="" class="img-fluid" />
								</a>
							</div>
							
						</div>
						<div class="col-sm-6 news-grids-agile mt-sm-0 mt-5">
							<div class="news-top">
								<a href="single.html">
									<img src="images/news2.jpg" alt="" class="img-fluid" />
								</a>
							</div>
							
						</div>
					</div>
					
					<div class="faq-w3agile mt-5" id="faqs">
						<h3 class="title-2 mb-md-5 mb-4">Frequently asked questions</h3>
						<ul class="faq list-unstyled">
							<li class="item1">
								<a href="#" title="click here" class="text-dark border-bottom pb-3">Consectetur adipiscing sit elitipsum nec?
									<i class="fas fa-plus float-right"></i>
								</a>
								<ul class="list-unstyled">
									<li class="subitem1">
										<p class="pt-3 pb-4"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
											tincidunt ut laoreet dolore.
											At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
											atque
											corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
									</li>
								</ul>
							</li>
							<li class="item2 my-3">
								<a href="#" title="click here" class="text-dark border-bottom pb-3">The standard Lorem Ipsum passage Etiam?
									<i class="fas fa-plus float-right"></i>
								</a>
								<ul class="list-unstyled">
									<li class="subitem1">
										<p class="pt-3 pb-4"> Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer
											adipiscing elit, sed diam nonummy
											nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos
											ducimus
											qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
											occaecati
											cupiditate non provident.</p>
									</li>
								</ul>
							</li>
							<li class="item3 my-3">
								<a href="#" title="click here" class="text-dark border-bottom pb-3">Ut semper nisl ut laoreet ultrices?
									<i class="fas fa-plus float-right"></i>
								</a>
								<ul class="list-unstyled">
									<li class="subitem1">
										<p class="pt-3 pb-4">Dincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer
											adipiscing elit, sed diam nonummy
											nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos
											ducimus
											qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
											occaecati
											cupiditate non provident.</p>
									</li>
								</ul>
							</li>
							<li class="item4">
								<a href="#" title="click here" class="text-dark border-bottom pb-3">Sed diam nonummy nibh eiusmod faucibus?
									<i class="fas fa-plus float-right"></i>
								</a>
								<ul class="list-unstyled">
									<li class="subitem1">
										<p class="pt-3">At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
											nibh euismod consectetuer
											adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis
											praesentium
											voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
											provident.</p>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				
				</div>
			</div>
		</div>
	</div>


  <div class="serives-agile py-5" id="support">
		<div class="container py-xl-5 py-lg-3">
			<div class="title text-center mb-5">
				<h3 class="text-dark mb-2">Help & Support</h3>
				<p>Ut enim ad minim veniam, quis nostrud ullam.</p>
			</div>
			<div class="row support-bottom text-center">
				<div class="col-md-4 support-grid">
					<i class="fas fa-headphones"></i>
					<h5 class="text-dark text-uppercase mt-4 mb-3">Online Support</h5>
					<p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
					<button type="button" class="button button-2 active"  onclick="window.location='contact.html'">
						<span>Call Us</span>
					</button>
				</div>
				<div class="col-md-4 support-grid my-md-0 my-5">
					<i class="far fa-comments"></i>
					<h5 class="text-dark text-uppercase mt-4 mb-3">Live Chat 24/7</h5>
					<p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
					<button type="button" class="button button-2 active" onclick="window.location='contact.html'">
						<span>Let's Chart</span>
					</button>
				</div>
				<div class="col-md-4 support-grid">
					<i class="fas fa-question"></i>
					<h5 class="text-dark text-uppercase mt-4 mb-3">Any Questions</h5>
					<p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
					<button type="button" class="button button-2 active" onclick="window.location='contact.html'">
						<span>Learn More</span>
					</button>
				</div>
			</div>
		</div>
	</div>

          </div>

        );
    }



export default Cakes;