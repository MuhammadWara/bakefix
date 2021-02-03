import React, {Component, useState} from 'react';
import './Gallery.css';
import Modal from './FormOrder';
import My from './FormOrder';
const Gallery = () =>{
  
  const [isOpen1, setOpen1] = useState(false)
  const [isOpen2, setOpen2] = useState(false)
  const [isOpen3, setOpen3] = useState(false)
  const [isOpen4, setOpen4] = useState(false)
  const [isOpen5, setOpen5] = useState(false)
  const [isOpen6, setOpen6] = useState(false)
  const [isOpen7, setOpen7] = useState(false)
  const [isOpen8, setOpen8] = useState(false)
  const [isOpen9, setOpen9] = useState(false)
  const firstid = "Raspberry Chocolate Layer Cake";
  const secondid = "Super moist chocolate cake ";
  const thirdid = "Chocolate Cake with Mocha frosting";
  const forthid = "The dark Chocolate cake";
  const fifthid = "Reese’s Peanut Butter Cup Cheesecake";
  const sixthid = "Vanilla cake layered with rich cream";
  const seventhid = "Oreo Chocolate Layer cake";
  const eigthid = "Red velvet cake";
  const ninthid = "Sublime chocolate cake";
  const price1 = "1200";
  const price2 = "1000";
  const price3 = "900";
  const price4 = "1200";
  const price5 = "1300";
  const price6 = "1100";
  const price7 = "1300";
  const price8 = "1200";
  const price9 = "1000";
    return (<div>
        
		


        {/* //banner 2 */}
        {/* main */}
        {/* page details */}
        <div className="breadcrumb-agile">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Gallery</li>
            </ol>
          </nav>
        </div><br/>
        <div class="header-text">
			<div class="container">
      
      <span  class="container text6">Ready made cakes are here!</span>
				
			</div>
		</div>
        {/* //page details */}
        {/* gallery page */}
        <div className="gallery py-5">
          <div className="container py-xl-5 py-lg-3">
          
            <div className="row w3ls_portfolio_grids">
              <div className="col-sm-4 agileinfo_portfolio_grid">
                <div className="w3_agile_portfolio_grid1">
                  <a href="images/j1.jpg" title="Cakes Bakery">
                    <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                      <div className="w3layouts_port_head">
                        <h3>BakeFix</h3>
                      </div>
                      <img src="images/j1.jpg" alt=" " className="img-fluid" />
                    </div>
                  </a>
                  <p className="myp">This Raspberry Chocolate Layer Cake is super moist and layered with smooth chocolate ganache and raspberry filling, all covered in a fudgy chocolate frosting! It’s rich, full of chocolate and heavenly!</p>
                  <a class="btn btn-warning" onClick={() => {if(localStorage.getItem('name')){setOpen1(true)}
                else{
                  alert("you are not logged in")
                }}}>Order Now</a>
                  <div style={{position: 'relative', zIndex:1}}>
                       <Modal open={isOpen1} id={firstid} amount={price1} onClose={() => setOpen1(false) } >
                      
                        </Modal>
                  </div>
                  <h5 class="rupe">{price1} PKR/-</h5>
                </div>
                <div className="w3_agile_portfolio_grid1">
                  <a href="images/j21.jpg" title="Cakes Bakery">
                    <div id={firstid} className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                      <div className="w3layouts_port_head">
                        <h3>BakeFix</h3>
                      </div>
                      <img src="images/j21.jpg" alt=" " className="img-fluid" />
                    </div>
                  </a>
                  <p className="myp">It’s a 3-layer, super moist chocolate cake with a rich, melt-in-your-mouth chocolate buttercream frosting. It’s covered with a chocolate ganache drip. It’s chocolate overload and you won’t regret it.</p>
                  
                  <a  class="btn btn-warning" onClick={() => setOpen2(true)}>Order Now</a>
                       
                  <div style={{position: 'relative', zIndex:1}}>
                    <Modal open={isOpen2} id={secondid} amount={price2} onClose={() => setOpen2(false)}>
                      
                        </Modal>
                  </div>
                  <h5 class="rupe">{price2} PKR/-</h5>
                </div>
                <div className="w3_agile_portfolio_grid1">
                  <a href="images/g3.jpg" title="Cakes Bakery">
                    <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                      <div className="w3layouts_port_head">
                        <h3>BakeFix</h3>
                      </div>
                      <img src="images/g3.jpg" alt=" " className="img-fluid" />
                    </div>
                  </a>
                  <p className="myp">Chocolate Cake with Mocha frosting is a moist chocolate cake with a creamy rich Mocha Frosting. Two layers makes it even better.</p><br/>
                 
                  <a  class="btn btn-warning" onClick={() => setOpen3(true)}>Order Now</a>
                  <div style={{position: 'relative', zIndex:1}}>
                    <Modal open={isOpen3} id={thirdid} amount={price3} onClose={() => setOpen3(false)}>
                      
                        </Modal>
                  </div>
                  <h5 class="rupe">{price3} PKR/-</h5>
                </div>
              </div>
              <div className="col-sm-4 agileinfo_portfolio_grid">
                <div className="w3_agile_portfolio_grid1">
                  <a href="images/j11.jpg" title="Cakes Bakery">
                    <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                      <div className="w3layouts_port_head">
                        <h3>BakeFix</h3>
                      </div>
                      <img src="images/j11.jpg" alt=" " className="img-fluid" />
                    </div>
                  </a>
                  <p className="myp">The Best Chocolate cake which is dark, moist, rich and incredibly decadent, combines cocoa and coffee for chocolate lover’s, and with buttercream frosting to make it perfect!</p>
                 
                  <a class="btn btn-warning" onClick={() => setOpen4(true)}>Order Now</a>
                  <div style={{position: 'relative', zIndex:1}}>
                    <Modal open={isOpen4} id={forthid} amount={price4} onClose={() => setOpen4(false)}>
                   
                        </Modal>
                  </div>
                  <h5 class="rupe">{price4} PKR/-</h5>
                </div>
                <div className="w3_agile_portfolio_grid1">
                  <a href="images/g9.jpg" title="Cakes Bakery">
                    <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                      <div className="w3layouts_port_head">
                        <h3>BakeFix</h3>
                      </div>
                      <img src="images/g9.jpg" alt=" " className="img-fluid" />
                    </div>
                  </a>
                  <p className="myp">This Reese’s Peanut Butter Cup Cheesecake ever and topped it with a luscious peanut butter caramel and so heavenly.           </p><br/>
                 
                  <a class="btn btn-warning" onClick={() => setOpen5(true)}>Order Now</a>
                  <div style={{position: 'relative', zIndex:1}}>
                    <Modal open={isOpen5} id={fifthid} amount={price5} onClose={() => setOpen5(false)}>
                       
                        </Modal>
                  </div>
                  <h5 class="rupe">{price5} PKR/-</h5>
                </div>
                <div className="w3_agile_portfolio_grid1">
                  <a href="images/g7.jpg" title="Cakes Bakery">
                    <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                      <div className="w3layouts_port_head">
                        <h3>BakeFix</h3>
                      </div>
                      <img src="images/g7.jpg" alt=" " className="img-fluid" />
                      
                    </div>
                  </a>
                  <p className="myp"> A vanilla cake layered with rich cream and topped with gems all around this piece of cake is for everyone’s taste buds.</p><br/><br/>
                 
                  <a class="btn btn-warning" onClick={() => setOpen6(true)}>Order Now</a>
                  <div style={{position: 'relative', zIndex:1}}>
                      <Modal open={isOpen6} id={sixthid} amount={price6} onClose={() => setOpen6(false)}>
                      
                        </Modal>
                  </div>
                  <h5 class="rupe">{price6} PKR/-</h5>
                </div>
              </div>
              <div className="col-sm-4 agileinfo_portfolio_grid">
                <div className="w3_agile_portfolio_grid1">
                  <a href="images/j4.jpg" title="Cakes Bakery">
                    <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                      <div className="w3layouts_port_head">
                        <h3>BakeFix</h3>
                      </div>
                      <img src="images/j4.jpg" alt=" " className="img-fluid" />
                    </div>
                  </a>
                  <p className="myp"> Oreo Chocolate Layer cake with classic, rich dark chocolate cake with a sweet Oreo butter cream and topped with crushed cookies!</p><br/>
                  
                  <a class="btn btn-warning" onClick={() => setOpen7(true)}>Order Now</a>
                  <div style={{position: 'relative', zIndex:1}}>
                     <Modal open={isOpen7} id={seventhid} amount={price7} onClose={() => setOpen7(false)}>
                     
                        </Modal>
                  </div>
                  <h5 class="rupe">{price7} PKR/-</h5>
                </div>
                <div className="w3_agile_portfolio_grid1">
                  <a href="images/j3.jpg" title="Cakes Bakery">
                    <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                      <div className="w3layouts_port_head">
                        <h3>BakeFix</h3>
                      </div>
                      <img src="images/j3.jpg" alt=" " className="img-fluid" />
                    </div>
                  </a>
                  <p className="myp">Red velvet cake is much more than vanilla cake tinted red. This recipe produces the best red velvet cake with superior buttery, vanilla, and cocoa flavors, as well as a delicious tang from buttermilk.</p>
                 
                  <a class="btn btn-warning" onClick={() => setOpen8(true)}>Order Now</a>
                  <div style={{position: 'relative', zIndex:1}}>
                      <Modal open={isOpen8} id={eigthid} amount={price8} onClose={() => setOpen8(false)}>
                       
                        </Modal>
                  </div>
                  <h5 class="rupe">{price8} PKR/-</h5>
                </div>
                <div className="w3_agile_portfolio_grid1">
                  <a href="images/j5.jpg" title="Cakes Bakery">
                    <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                      <div className="w3layouts_port_head">
                        <h3>BakeFix</h3>
                      </div>
                      <img src="images/j5.jpg" alt=" " className="img-fluid" />
                    </div>
                  </a>
                  <p className="myp"> You'll blackout from sheer ecstasy with just a bite of this sublime chocolate cake, moist and rich with dark chocolate pastry cream and the buttery crumble of chocolate.</p>
                 
                  <a class="btn btn-warning" onClick={() =>  setOpen9(true)}>Order Now</a>
                  <div style={{position: 'relative', zIndex:1}}>
                     <Modal open={isOpen9} id={ninthid} amount={price9} onClose={() =>  setOpen9(false)}>
                      
                        </Modal> 
                  </div>
                  <h5 class="rupe">{price9} PKR/-</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //gallery page */}
        <div className="customer-reviews-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2 className="ex">Customer Reviews</h2>
                <p >Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-8 mr-auto ml-auto text-center">
              <div id="reviews" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner mt-4">
                  <div className="carousel-item text-center active">
                    <div className="img-box p-1 border rounded-circle m-auto">
                      <img className="" src="images/quotations-button.png" alt="" />
                    </div>
                    <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Paul Mitchel</strong></h5>
                    <b><h6 className="">Web Developer</h6></b><br/>
                    <p className="par">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                  </div>
                  <div className="carousel-item text-center">
                    <div className="img-box p-1 border rounded-circle m-auto">
                      <img className="" src="images/quotations-button.png" alt="" />
                    </div>
                    <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Steve Fonsi</strong></h5>
                   <b> <h6 className="">Web Designer</h6></b><br/>
                    <p className="par">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                  </div>
                  <div className="carousel-item text-center">
                    <div className="img-box p-1 border rounded-circle m-auto">
                      <img className="" src="images/quotations-button.png" alt="" />
                    </div>
                    <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Daniel vebar</strong></h5>
                  <b><h6 className="">Seo Analyst</h6></b><br/>
                    <p className="par">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#reviews" role="button" data-slide="prev">
                  <i className="fa fa-angle-left" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#reviews" role="button" data-slide="next">
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div><br/><br/>
      </div>
    );
  }
  export default Gallery;