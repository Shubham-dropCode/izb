import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlinePrinter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import FooterImg from  "../../assets/images/IZB/IZB Website Skin/Home_Page/Image_5.png"

const Footer = () => {
    const FooterBgImg = {
        backgroundImage: `url(${FooterImg})`,
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      };
  const Line = {
    display: "block",
    height: "2px",
    width: "80px",
    margin: "10px 0 0 0",
    background: "#9E1B1E",
  };
  return (
    <footer className="footer-area" style={FooterBgImg} >
      {/*Start Footer Top*/}
      <div className="footer-top">
        {/* <div className="lef-shape">
          <span className="icon-origami" />
        </div> */}
        <div className="container">
          <div className="row">
            {/*Start single footer widget*/}
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
              <div className="single-footer-widget single-footer-widget--link-box">
                <div className="title">
                  <h5 className="text-white">INDO ZAMBIA BANK</h5>
                </div>
                <span style={Line}></span>
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
                <span style={Line}></span>
                <div className="footer-widget-links d-flex align-items-center">
                  <IoCallOutline color="#b8b4b1" size={25} className="me-3" />
                  <p className="text-white">
                  +260 211 224 653/225 080,<br/> +211 227194, +211 22079
                  </p>

                </div>
              </div>
              <div className="footer-widget-links d-flex align-items-center">
                  <AiOutlinePrinter size={25} color="#FFF" className="me-3" />
                  <p className="text-white">
                  +260 211 225 090
                  </p>

                </div>
                <div className="footer-widget-links d-flex align-items-center">
                  <AiOutlineMail color="#FFF" size={25} className="me-3" />
                  <p className="text-white">
                  izb@izb.co.zm<br/>customerservice@izb.co.zm
                  </p>

                </div>
            </div>
            {/*End single footer widget*/}
            {/*Start single footer widget*/}
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
              <div className="single-footer-widget single-footer-widget--link-box">
                <div className="title">
                  <h3>Useful Links</h3>
                </div>
                <span style={Line}></span>

                <div className="footer-widget-links">
                  <ul>
                    <li>
                      <a href="#">Feedback / Complaint</a>
                    </li>
                    <li>
                      <a href="#">Vacancies</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Download</a>
                    </li>
                    <li>
                      <a href="#">Branch Codes</a>
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
                  <h3>Other Links</h3>
                </div>
                <span style={Line}></span>
                <div className="footer-widget-links">
                  <ul>
                    <li>
                      <a href="#">Staff Mail</a>
                    </li>
                    <li>
                      <a href="#">Staff Protal</a>
                    </li>
                    <li>
                      <a href="#">Disclaimer</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Notice</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End single footer widget*/}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-inner">
            <p className="text-white">2021 Indo Zambia Bank. All rights reserved..</p>
            <p className="text-white">Indo Zambia Bank, A Registered Commercial Bank.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
