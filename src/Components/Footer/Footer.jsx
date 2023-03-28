import React from "react";

const Footer = () => {
  const span = {
    display: "block",
    height: "2px",
    width: "90px",
    margin: "10px 0 0 0",
    background: "#9E1B1E",
  };
  return (
    <footer className="footer-area">
      <div className="right-shape">
        <img src="assets/images/shapes/footer-right-shape.png" alt="" />
      </div>
      {/*Start Footer Top*/}
      <div className="footer-top">
        <div className="lef-shape">
          <span className="icon-origami" />
        </div>
        <div className="container">
          <div className="row">
            {/*Start single footer widget*/}
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
              <div className="single-footer-widget single-footer-widget--link-box">
                <div className="title">
                  <h5 className="text-white">INDO ZAMBIA BANK</h5>
                </div>
                <span style={span}></span>
                <div className="footer-widget-links">
                  <p className="text-white">
                    Indo Zambia Bank was formed on 19th October, 1984 by the
                    Government of the Republic of Zambia and the Government of
                    India out of the desire to promote banking facilities to
                    support the economic development of Zambia
                  </p>
                </div>
                <div className="social mt-5">
                  <h6 className="text-white">Follow US</h6>
                  <div className="footer-social-link pt-4">
                    <ul className="clearfix">
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End single footer widget*/}
            {/*Start single footer widget*/}
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
              <div className="single-footer-widget single-footer-widget--link-box">
                <div className="title">
                  <h3>Support</h3>
                </div>
                <div className="footer-widget-links">
                  <ul>
                    <li>
                      
                    </li>
                    <li>
                      <a href="#">Gold Rate Today</a>
                    </li>
                    <li>
                      <a href="#">Service Charges &amp; Fees</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="single-footer-widget single-footer-widget--link-box-style2">
                <div className="title">
                  <h3>Online</h3>
                </div>
                <div className="footer-widget-links">
                  <ul>
                    <li>
                      <a href="#">Mobile Banking</a>
                    </li>
                    <li>
                      <a href="#">Internet Banking</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End single footer widget*/}
            {/*Start single footer widget*/}
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
              <div className="single-footer-widget single-footer-widget--link-box">
                <div className="title">
                  <h3>About Us</h3>
                </div>
                <div className="footer-widget-links">
                  <ul>
                    <li>
                      <a href="#">Our Story</a>
                    </li>
                    <li>
                      <a href="#">Board of Directors</a>
                    </li>
                    <li>
                      <a href="#">Management Committee</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                    <li>
                      <a href="#">Investor Relations</a>
                    </li>
                    <li>
                      <a href="#">Awards &amp; Recognition</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End single footer widget*/}
            {/*Start single footer widget*/}
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
              <div className="single-footer-widget single-footer-widget--link-box">
                <div className="title">
                  <h3>Services</h3>
                </div>
                <div className="footer-widget-links">
                  <ul>
                    <li>
                      <a href="#">Savings Account</a>
                    </li>
                    <li>
                      <a href="#">Current Account</a>
                    </li>
                    <li>
                      <a href="#">Deposits</a>
                    </li>
                    <li>
                      <a href="#">Cards</a>
                    </li>
                    <li>
                      <a href="#">Payments</a>
                    </li>
                    <li>
                      <a href="#">Insurance</a>
                    </li>
                    <li>
                      <a href="#">Locker Facility</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End single footer widget*/}
          </div>
        </div>
      </div>
      {/*End Footer Top*/}
      {/*Start Footer*/}
      <div className="footer">
        <div className="container">
          <div className="row">
            {/*Start single footer widget*/}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="single-footer-widget marbtm50">
                <div className="our-company-info">
                  <div className="footer-logo-style1">
                    <a href="index.html">
                      <img
                        src="assets/images/footer/footer-logo-1.png"
                        alt="Awesome Logo"
                        title=""
                      />
                    </a>
                  </div>
                  <div className="copyright-text">
                    <p>
                      Copyright © 2022 <a href="index.html">Finbank.</a>{" "}
                      Licensed by the
                      <br />
                      Central Bank of United States.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*End single footer widget*/}
            {/*Start single footer widget*/}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="single-footer-widget marbtm50">
                <div className="footer-widget-contact-info">
                  <ul>
                    <li>
                      <h3>
                        <a href="tel:2512353256">(800) 123 456 78</a>
                      </h3>
                      <p>Customer Care</p>
                    </li>
                    <li>
                      <h3>Mon - Fri: 9.00am to 5.00pm</h3>
                      <p>Banking Hours</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End single footer widget*/}
            {/*Start single footer widget*/}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="single-footer-widget">
                <div className="single-footer-widget-right-colum">
                  <ul>
                    <li>
                      <a href="#">
                        Download Forms
                        <span className="icon-download" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Register Your Complaint
                        <span className="icon-feedback" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End single footer widget*/}
          </div>
        </div>
      </div>
      {/*End Footer*/}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-inner">
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">Disclaimer</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Online Security Tips</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
