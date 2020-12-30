import React from 'react';
import './Footer.scss'


function Footer() {
      return (
          <div>
               <section id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5> Links </h5>
            <ul className="list-unstyled quick-links">
              <li><a href="fryday.com">About</a></li>
              <li><a href="fryday.com">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5> Resources </h5>
            <ul className="list-unstyled quick-links">
              <li><a href="fryday.com">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5> French Fry Partner </h5>
            <ul className="list-unstyled quick-links">
              <li><a href="fryday.com">Add Business</a></li>
            
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-50">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item"><a href="fryday.com"><i className="fa fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="fryday.com"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="fryday.com"><i className="fa fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="fryday.com" target="_blank"><i className="fa fa-envelope"></i></a></li>
            </ul>
          </div>
        </div>	
        <div className="row">
          <div className=" col-md-12 text-center">
             <a className="ml-2" href="termsandcond.com" > fryday™ was created by Bevon Brye </a>
          </div>
        </div>	
      </div>
    </section>
          </div>
      )
  }


export default Footer;
