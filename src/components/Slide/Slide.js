import React, {Component} from 'react';

const Slide = () =>{
  
    return (
       
<div>

        <div id="slider-main">
          <div className="banner-text-agile text-center">
            <div className="container">
              <h3 className="text-white font-weight-bold mb-3">The Taste Of Our Amazing Cakes</h3>
              <p className="text-light">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button type="button" className="btn btn-primary button mt-md-5 mt-4" data-toggle="modal" data-target=".bd-example-modal-lg">
                <span>Watch Our Video</span>
              </button>
            </div>
          </div>
          {/* previous button */}
          <button id="prev">
            <i className="fas fa-chevron-left" />
          </button>
          {/* image container */}
          <div id="slider" />
          {/* next button */}
          <button id="next">
            <i className="fas fa-chevron-right" />
          </button>
          {/* small circles container */}
          <div id="circles" />
        </div>
        {/* end of main image slider container */}
        {/* Modal */}
        <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-center" id="exampleModalCenterTitle">Cake Bakery</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body p-0">
                <iframe src="https://player.vimeo.com/video/58582025" style={{border: 'none'}} />
              </div>
            </div>
          </div>
        </div>
        {/* //Model */}
        {/* //banner */}
        {/* banner bottom icons */}
        <div className="icons-banner-botom">
          <div className="container">
            <ul className="list-unstyled my-4">
              <li className="icons-mkw3ls">
                <p className="mb-2">Chocolate</p>
                <img src="images/img1.png" className="img-fluid" alt="" />
              </li>
              <li className="icons-mkw3ls">
                <p className="mb-2">Strawberry</p>
                <img src="images/img2.png" className="img-fluid" alt="" />
              </li>
              <li className="icons-mkw3ls">
                <p className="mb-2">Pista</p>
                <img src="images/img3.png" className="img-fluid" alt="" />
              </li>
              <li className="icons-mkw3ls">
                <p className="mb-2">Vanilla</p>
                <img src="images/img4.png" className="img-fluid" alt="" />
              </li>
              <li className="icons-mkw3ls">
                <p className="mb-2">Muffins</p>
                <img src="images/img5.png" className="img-fluid" alt="" />
              </li>
            </ul>
          </div>
        </div>
        {/* //banner bottom icons */}
      </div>
    );
  }



    export default Slide