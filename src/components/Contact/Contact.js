import React, {Component} from 'react';
import './Contact.css';
const Contact = () =>{
  
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
              <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
            </ol>
          </nav>
        </div>
        {/* //page details */}
        {/* contact page */}

        <div className="address py-5">
          <div className="container py-xl-5 py-lg-3">
            <div className="title text-center mb-5">
              <h2 className="text-dark mb-2">Contact Us</h2>
              <p>Share any query or complain here!</p>
            </div>
            <div className="row address-row">
              
              <div className="col-lg-6 address-left mt-lg-0 mt-5">
                <div className="address-grid">
                  <h4 className="font-weight-bold mb-3">Get In Touch</h4>
                  <form action="#" method="post">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name" name="name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email" name="email" required />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Subject" name="subject" required />
                    </div>
                    <div className="form-group">
                      <textarea placeholder="Message" className="form-control" required defaultValue={""} />
                    </div>
                    <input type="submit" defaultValue="SEND" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* map */}
        <div class="map">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.5588531024528!2d6.926104315807983!3d50.950370979547415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25139c136161%3A0x40466a2b892ec6e7!2sCologne%2C+Ehrenfeld+Gutenbergstr.!5e0!3m2!1sen!2sin!4v1516624585853"></iframe>
	</div>
        {/*// map */}
        {/* //contact page */}
        
       </div>
    );
  }
  export default Contact;