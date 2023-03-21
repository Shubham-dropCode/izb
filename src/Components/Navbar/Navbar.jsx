import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="main-header main-header-style1">
        {/*Start Main Header Style1 Top*/}
        <div className="main-header-style1-top">
          <div className="auto-container">
            <div className="outer-box">
              {/*Start Main Header Style1 Top Left*/}
              <div className="main-header-style1-top__left">
                <div className="looking-banking-box ">
                  <div className="inner-title">
                    <span className="icon-binoculars" />
                    <p>Looking</p>
                  </div>
                  <div className="select-box clearfix">
                    <select className="wide">
                      <option data-display="Personal Banking">
                        Personal Banking
                      </option>
                      <option value={1}>Business Banking</option>
                      <option value={2}>Personal Banking 01</option>
                      <option value={3}>Personal Banking 02</option>
                      <option value={4}>Personal Banking 03</option>
                    </select>
                  </div>
                </div>
                <div className="nearest-branch">
                  <span className="icon-map" />
                  <a href="#">Find Nearest Branch</a>
                </div>
              </div>
              {/*End Main Header Style1 Top Left*/}
              {/*Start Main Header Style1 Top Right*/}
              <div className="main-header-style1-top__right">
                <div className="header-menu-style1">
                  <ul>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Faq’s</a>
                    </li>
                    <li>
                      <a href="#">Offers</a>
                    </li>
                    <li>
                      <a href="#">Calendar</a>
                    </li>
                  </ul>
                </div>
                <div className="box-search-style1">
                  <a href="#" className="search-toggler">
                    <span className="icon-search" />
                    Search
                  </a>
                </div>
                <div className="language-switcher">
                  <div id="polyglotLanguageSwitcher">
                    <form action="#">
                      <select id="polyglot-language-options">
                        <option id="en" value="en" selected="">
                          English
                        </option>
                        <option id="fr" value="fr">
                          French
                        </option>
                        <option id="de" value="de">
                          German
                        </option>
                        <option id="it" value="it">
                          Italian
                        </option>
                        <option id="es" value="es">
                          Spanish
                        </option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
              {/*End Main Header Style1 Top Right*/}
            </div>
          </div>
        </div>
        {/*End Main Header Style1 Top*/}
        <nav className="main-menu main-menu-style1">
          <div className="main-menu__wrapper clearfix">
            <div className="container">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu-style1-left">
                  <div className="logo-box-style1">
                    <a href="index.html">
                      <img
                        src="assets/images/resources/logo-1.png"
                        alt="Awesome Logo"
                        title=""
                      />
                    </a>
                  </div>
                  <div className="main-menu-box">
                    <a href="#" className="mobile-nav__toggler">
                      <i className="icon-menu" />
                    </a>
                    <ul className="main-menu__list">
                      <li className="dropdown megamenu">
                        <a href="index.html">Home</a>
                        <ul>
                          <li>
                            <div className="megamenu-content-box">
                              <div className="container">
                                <div className="megamenu-content-box__inner">
                                  <div className="row">
                                    {/*Start Home Showcase Item*/}
                                    <div className="col-lg-3">
                                      <div className="home-showcase__item">
                                        <div className="home-showcase__image">
                                          <img
                                            src="assets/images/home-showcase/home-showcase-1-1.jpg"
                                            alt=""
                                          />
                                          <div className="home-showcase__buttons">
                                            <a
                                              href="index.html"
                                              className="btn-one home-showcase__buttons__item top"
                                            >
                                              <span className="txt">
                                                Multi Page
                                              </span>
                                            </a>
                                            <a
                                              href="index-one-page.html"
                                              className="btn-one home-showcase__buttons__item"
                                            >
                                              <span className="txt">
                                                One Page
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                        <h3 className="home-showcase__title">
                                          Home Page One
                                        </h3>
                                      </div>
                                    </div>
                                    {/*End Home Showcase Item*/}
                                    {/*Start Home Showcase Item*/}
                                    <div className="col-lg-3">
                                      <div className="home-showcase__item">
                                        <div className="home-showcase__image">
                                          <img
                                            src="assets/images/home-showcase/home-showcase-1-2.jpg"
                                            alt=""
                                          />
                                          <div className="home-showcase__buttons">
                                            <a
                                              href="index-2.html"
                                              className="btn-one home-showcase__buttons__item top"
                                            >
                                              <span className="txt">
                                                Multi Page
                                              </span>
                                            </a>
                                            <a
                                              href="index-2-one-page.html"
                                              className="btn-one home-showcase__buttons__item"
                                            >
                                              <span className="txt">
                                                One Page
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                        <h3 className="home-showcase__title">
                                          Home Page Two
                                        </h3>
                                      </div>
                                    </div>
                                    {/*End Home Showcase Item*/}
                                    {/*Start Home Showcase Item*/}
                                    <div className="col-lg-3">
                                      <div className="home-showcase__item">
                                        <div className="home-showcase__image">
                                          <img
                                            src="assets/images/home-showcase/home-showcase-1-3.jpg"
                                            alt=""
                                          />
                                          <div className="home-showcase__buttons">
                                            <a
                                              href="index-3.html"
                                              className="btn-one home-showcase__buttons__item top"
                                            >
                                              <span className="txt">
                                                Multi Page
                                              </span>
                                            </a>
                                            <a
                                              href="index-3-one-page.html"
                                              className="btn-one home-showcase__buttons__item"
                                            >
                                              <span className="txt">
                                                One Page
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                        <h3 className="home-showcase__title">
                                          Home Page Three
                                        </h3>
                                      </div>
                                    </div>
                                    {/*End Home Showcase Item*/}
                                    {/*Start Home Showcase Item*/}
                                    <div className="col-lg-3">
                                      <div className="home-showcase__item">
                                        <div className="home-showcase__image">
                                          <img
                                            src="assets/images/home-showcase/home-showcase-1-4.jpg"
                                            alt=""
                                          />
                                          <div className="home-showcase__buttons">
                                            <a
                                              href="index-dark.html"
                                              className="btn-one home-showcase__buttons__item top"
                                            >
                                              <span className="txt">
                                                View Page
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                        <h3 className="home-showcase__title">
                                          Home Dark
                                        </h3>
                                      </div>
                                    </div>
                                    {/*End Home Showcase Item*/}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Services</a>
                        <ul>
                          <li className="dropdown">
                            <a href="#">Accounts</a>
                            <ul>
                              <li>
                                <a href="accounts.html">All Accounts</a>
                              </li>
                              <li>
                                <a href="account-savings.html">
                                  Savings Account
                                </a>
                              </li>
                              <li>
                                <a href="account-current.html">
                                  Current Account
                                </a>
                              </li>
                              <li>
                                <a href="account-fixed-dep.html">
                                  Fixed Deposit Account
                                </a>
                              </li>
                              <li>
                                <a href="account-salary.html">Salary Account</a>
                              </li>
                              <li>
                                <a href="account-recuring-dep.html">
                                  Recuring Deposit a/c
                                </a>
                              </li>
                              <li>
                                <a href="account-nri.html">NRI Account</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Cards</a>
                            <ul>
                              <li>
                                <a href="cards.html">Our All Cards</a>
                              </li>
                              <li>
                                <a href="cards-business.html">Business</a>
                              </li>
                              <li>
                                <a href="cards-cashback.html">Cashback</a>
                              </li>
                              <li>
                                <a href="cards-law-interest.html">
                                  Low Interest
                                </a>
                              </li>
                              <li>
                                <a href="cards-rewards.html">Rewards</a>
                              </li>
                              <li>
                                <a href="cards-secured.html">Secured</a>
                              </li>
                              <li>
                                <a href="cards-travel-hotel.html">
                                  Travel &amp; Hotel
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Loans</a>
                            <ul>
                              <li>
                                <a href="loan-home.html">Home Loan</a>
                              </li>
                              <li>
                                <a href="loan-personal.html">Personal Loan</a>
                              </li>
                              <li>
                                <a href="loan-vehicle.html">Vehicle Loan</a>
                              </li>
                              <li>
                                <a href="loan-education.html">Education Loan</a>
                              </li>
                              <li>
                                <a href="loan-gold.html">Gold Loan</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">About</a>
                        <ul>
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="team.html">Board of Directors</a>
                          </li>
                          <li>
                            <a href="careers.html">Careers</a>
                          </li>
                          <li>
                            <a href="careers-details.html">Career Detail</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq’s</a>
                          </li>
                          <li>
                            <a href="testimonials.html">Testimonials</a>
                          </li>
                          <li>
                            <a href="404.html">404 Error</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">News</a>
                        <ul>
                          <li>
                            <a href="blog.html">Grid View</a>
                          </li>
                          <li>
                            <a href="blog-2.html">List View</a>
                          </li>
                          <li>
                            <a href="blog-3.html">Large Image</a>
                          </li>
                          <li>
                            <a href="blog-single.html">Single Post</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Apply Now</a>
                        <ul>
                          <li>
                            <a href="loan-home.html">Home Loan</a>
                          </li>
                          <li>
                            <a href="loan-personal.html">Personal Loan</a>
                          </li>
                          <li>
                            <a href="loan-vehicle.html">Vehicle Loan</a>
                          </li>
                          <li>
                            <a href="loan-education.html">Education Loan</a>
                          </li>
                          <li>
                            <a href="loan-gold.html">Gold Loan</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Get In Touch</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="main-menu-style1-right">
                  <div className="header-btn-one">
                    <a href="#">
                      <span className="icon-home-button" />
                      Login
                    </a>
                    <a className="style2" href="#">
                      <span className="icon-payment" />
                      Open an Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/*Start Main Header Style1 Bottom*/}
        <div className="main-header-style1-bottom">
          <div className="auto-container">
            <div className="outer-box">
              <div className="update-box">
                <div className="inner-title">
                  <span className="icon-megaphone" />
                  <h4>Updates:</h4>
                </div>
                <div className="text">
                  <p>
                    Get upto 4%* on our Savings Account Balances with Finbank.
                  </p>
                  <a href="#">
                    <span className="icon-chevron" />
                    More Details
                  </a>
                </div>
              </div>
              <div className="slogan-box">
                <p>
                  Dear Customer, We have launched Video KYC facility for New
                  customer to open savings ac
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*End Main Header Style1 Bottom*/}
      </header>
    </>
  );
};

export default Navbar;
