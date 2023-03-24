import React, { useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import $ from "jquery";
import Logo from "../../assets/images/IZB/logo.png";
import Phone from "../../assets/images/IZB/PhoneCall.png";
import PlayStore from "../../assets/images/IZB/PlayStore.png";
import apple from "../../assets/images/IZB/apple.png";

const Navbar = () => {
  useEffect(() => {
    if ($(".mobile-nav__container .main-menu__list").length) {
      let dropdownAnchor = $(
        ".mobile-nav__container .main-menu__list .dropdown > a"
      );
      dropdownAnchor.each(function () {
        let self = $(this);
        let toggleBtn = document.createElement("BUTTON");
        toggleBtn.setAttribute("aria-label", "dropdown toggler");
        toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
        self.append(function () {
          return toggleBtn;
        });
        self.find("button").on("click", function (e) {
          e.preventDefault();
          let self = $(this);
          self.toggleClass("expanded");
          self.parent().toggleClass("expanded");
          self.parent().parent().children("ul").slideToggle();
        });
      });
    }

    if ($(".mobile-nav__toggler").length) {
      $(".mobile-nav__toggler").on("click", function (e) {
        e.preventDefault();
        $(".mobile-nav__wrapper").toggleClass("expanded");
        $("body").toggleClass("locked");
      });
    }
  }, []);

  return (
    <>
      <header className="main-header main-header-style1">
        {/*Start Main Header Style1 Top*/}
        <div className="main-header-style1-top">
          <div className="auto-container">
            <div className="outer-box justify-content-around">
              {/*Start Main Header Style1 Top Left*/}
              <div className="main-header-style1-top__left">
                <div className="looking-banking-box ">
                  <img src={Logo} width={300} />
                </div>
                <div className="nearest-branch">
                  <div className="input-group">
                    <div className="form-outline">
                      <input
                        id="search-input"
                        type="search"
                        placeholder="Search"
                        className="form-control pe-4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-header-style1-top__right ">
                <div className="header-menu-style1">
                  <div className="btn-box">
                    <div className="get-app-box">
                      <ul className="clearfix">
                        <li className="p-0 text-center">
                          <small className="p-0 m-0">Toll-Free</small>
                          <a
                            className="px-2 py-2 rounded"
                            style={{ backgroundColor: "#9E1B1E" }}
                          >
                            <div className="icon">
                              <img
                                src={Phone}
                                width={25}
                                className="style2 text"
                                alt=""
                              />
                            </div>
                            <div className="text px-2">
                              <h4 className="text-white">8002</h4>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="mt-3">
                            <p>
                              <BsWhatsapp className="me-2" />
                              +260 2113 89900
                            </p>
                            <p>
                              <AiOutlinePhone className="me-2" />
                              +260 7717 98616
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="box-search-style1">
                  <a href="#" className="search-toggler">
                    <img src={PlayStore} />
                  </a>
                  <a href="#" className="search-toggler">
                    <img src={apple} />
                  </a>
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
              <div className="main-menu__wrapper-inner d-flex justify-content-center">
                <div className="main-menu-style1-left">
                  <div className="main-menu-box">
                    <a href="#" className="mobile-nav__toggler">
                      <i className="icon-menu" />
                    </a>
                    <ul className="main-menu__list">
                      <li className="megamenu">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">About</a>
                        <ul>
                          <li>
                            <a href="about.html">About IZB</a>
                          </li>
                          <li>
                            <a href="team.html">Leadership & Governance</a>
                            <ul>
                              <li>
                                <a href="">Board Of Directors</a>
                              </li>
                              <li>
                                <a href="">Executive Management</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="careers.html">Financial Performance</a>
                          </li>
                          <li>
                            <a href="careers-details.html">Why Bank with us</a>
                          </li>
                          <li>
                            <a href="faq.html">CSR</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Personal Banking</a>
                        <ul>
                          <li className="dropdown">
                            <a href="#">Saving Accounts</a>
                            <ul>
                              <li>
                                <a href="accounts.html">Save Plus Bank A/C</a>
                              </li>
                              <li>
                                <a href="account-savings.html">
                                  Classic Saving Account
                                </a>
                              </li>
                              <li>
                                <a href="account-current.html">
                                  Privilege Savings Account
                                </a>
                              </li>
                              <li>
                                <a href="account-fixed-dep.html">
                                  Tisunge Savings Account
                                </a>
                              </li>
                              <li>
                                <a href="account-salary.html">
                                  Tonse Savings Account
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="">Credit</a>
                          </li>
                          <li>
                            <a href="">Bhumi Fixed Deposit A/C</a>
                          </li>
                          <li>
                            <a href="">Indo Fast Serve</a>
                          </li>
                          {/* <li className="dropdown">
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
                          </li> */}
                        </ul>
                      </li>

                      <li className="dropdown">
                        <a href="#">Business Banking</a>
                        <ul>
                          <li>
                            <a href="blog-2.html">Current Account</a>
                            <ul>
                              <li>
                                <a href="">Privilege Current Account</a>
                              </li>

                              <li>
                                <a href="">Classic Current Account</a>
                              </li>

                              <li>
                                <a href="">SME Current Account</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="blog-3.html">Credit</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Forex & Treasury</a>
                        <ul>
                          <li>
                            <a href="loan-home.html">Forex Rates</a>
                          </li>
                          <li>
                            <a href="loan-personal.html">Forex Business</a>
                          </li>
                          <li>
                            <a href="loan-vehicle.html">Forex Savings</a>
                          </li>
                          <li>
                            <a href="loan-education.html">Forex Current</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">E-Services</a>
                        <ul>
                          <li>
                            <a href="loan-home.html">Indo Mobile Banking</a>
                          </li>
                          <li>
                            <a href="loan-personal.html">Indo Net Banking</a>
                          </li>
                          <li>
                            <a href="loan-vehicle.html">IZB Cards</a>
                          </li>
                          <li>
                            <a href="loan-education.html">
                              ZRA/NAPSA/E-Payment
                            </a>
                          </li>
                          <li>
                            <a href="loan-education.html">Indo EEZY</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown" >
                        <a href="#" className="text-white rounded" style={{ backgroundColor: "#9E1B1E" }}>Indo Net Banking</a>
                        <ul>
                          <li>
                            <a href="blog-2.html">Retail</a>
                          </li>
                          <li>
                            <a href="blog-3.html">Corporate</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
    
        <div className="mobile-nav__wrapper">
          <div className="mobile-nav__overlay mobile-nav__toggler" />
          <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler">
              <i className="fas fa-plus" />
            </span>
            <div className="logo-box">
              <a href="index.html" aria-label="logo image">
                <img src="assets/images/resources/mobile-nav-logo.png" alt="" />
              </a>
            </div>
            <div className="mobile-nav__container" />
            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="fa fa-envelope" />
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li>
                <i className="fa fa-phone-alt" />
                <a href="tel:123456789">444 000 777 66</a>
              </li>
            </ul>
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-facebook-square" />
              <a href="#" className="fab fa-pinterest-p" />
              <a href="#" className="fab fa-instagram" />
            </div>
          </div>
        </div>

        {/*End Main Header Style1 Bottom*/}
      </header>
    </>
  );
};

export default Navbar;
