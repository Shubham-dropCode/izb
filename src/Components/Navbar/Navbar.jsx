import React, { useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import $ from "jquery";
import Logo from "../../assets/images/IZB/logo.png";
import Phone from "../../assets/images/IZB/PhoneCall.png";
import PlayStore from "../../assets/images/IZB/PlayStore.png";
import apple from "../../assets/images/IZB/apple.png";
import { Link } from "react-router-dom";

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
        <div className="main-header-style1-top py-2">
          <div className="container-fluid">
            <div className="outer-box justify-content-between">
              {/*Start Main Header Style1 Top Left*/}
              <div className="main-header-style1-top__left">
                <div className="looking-banking-box" style={{paddingLeft:"70px"}}>
                  <Link to="/">

                   <img src={Logo} width={300} />
                  </Link>
                </div>
                <div className="nearest-branch">
                  <div className="input-group">
                    <div className="form-outline">
                      <input
                      style={{backgroundColor:"#F0F0F0", borderRadius:"21px"}}
                        id="search-input"
                        type="search"
                        placeholder="Search"
                        className="form-control pe-2"
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
                            className="px-1 py-1 rounded"
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
                          <div className="mt-2 d-flex pt-2 gap-4">
                            <p>
                              <BsWhatsapp size={19} className="mx-1 mb-1" />
                              +260 2113 89900
                            </p>
                            <p>
                              <AiOutlinePhone size={19} className="me-1 mb-1" />
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
                    <ul className="main-menu__list" style={{gap:"22px"}}>
                      <li className="megamenu">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/AboutUs">About</Link>
                        <ul>
                          <li>
                            <Link to="/AboutUs">About IZB</Link>
                          </li>
                          <li>
                            <Link to="/BoardOfDirectors">Leadership & Governance</Link>
                            <ul>
                              <li>
                                <Link to="/BoardOfDirectors">Board Of Directors</Link>
                              </li>
                              <li>
                                <Link to="/BoardOfDirectors">Executive Management</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/FinancialPerformance">Financial Performance</Link>
                          </li>
                          <li>
                            <Link to="/WhyBankWithUs">Why Bank with us</Link>
                          </li>
                          <li>
                            <a to="/BoardOfDirectors">CSR</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/PersonalBanking">Personal Banking</Link>
                        <ul>
                          <li className="dropdown">
                            <a href="#">Saving Accounts</a>
                            <ul>
                              <li>
                                <Link to="/SavePlusAccount">Save Plus Bank A/C</Link>
                              </li>
                              <li>
                                <Link to="/ClassicSavingAcc">
                                  Classic Saving Account
                                </Link>
                              </li>
                              <li>
                                <Link to="/PrivilageSavingAcc">
                                  Privilege Savings Account
                                </Link>
                              </li>
                              <li>
                                <Link to="/TisungoSaving">
                                  Tisunge Savings Account
                                </Link>
                              </li>
                              <li>
                                <Link to="/TonseSavingAcc">
                                  Tonse Savings Account
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="">Credit</a>
                          
                          <ul>
                              <li>
                                <Link to="/IndoHomeLoan">Indo Home Loan</Link>
                              </li>
                              <li>
                                <Link to="/IndoPersonalLoan">
                                  Personal Loan
                                </Link>
                              </li>
                              <li>
                                <Link to="/IndoVehicleLoan">
                                  Indo Vehicle Loan
                                </Link>
                              </li>
                            </ul>
                            </li>
                          <li>
                            <Link to="/BhumiFixedDepositAccount">Bhumi Fixed Deposit A/C</Link>
                          </li>
                          <li>
                            <Link to="/IndoFastServe">Indo Fast Serve</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <Link to="/BusinessBanking">Business Banking</Link>
                        <ul>
                          <li>
                            <a href="blog-2.html">Current Account</a>
                            <ul>
                              <li>
                                <Link to="/PrivilegeCurrentAcc">Privilege Current Account</Link>
                              </li>

                              <li>
                                <Link to="/ClassicCurrentAccount">Classic Current Account</Link>
                              </li>

                              <li>
                                <Link to="/SMECurrentAcc">SME Current Account</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="blog-3.html">Credit</a>
                          
                          <ul>
                              <li>
                                <Link to="/MSMELoan">MSME Loan</Link>
                              </li>

                              <li>
                                <Link to="/TermLoan">Term Loan</Link>
                              </li>

                              <li>
                                <Link to="/AutoFinance">Auto Finance</Link>
                              </li>
                              <li>
                                <Link to="/AgroFinance">Agro Finance</Link>
                              </li>
                              <li>
                                <Link to="/EquityRelease">Equity Release</Link>
                              </li>
                              <li>
                                <Link to="/BusinessFinance">Business Loan</Link>
                              </li>
                              <li>
                                <Link to="/WorkingCapitalFinance">Working Capital Finance</Link>
                              </li>
                              <li>
                                <Link to="/LeaseRentalDiscounting">Lease Rental Discounting</Link>
                              </li>
                              
                            </ul>
                            </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/InternatioalBankingForeignBusiness"> Forex & Treasury</Link>
                        <ul>
                          <li>
                            <a href="">Forex Rates</a>
                          </li>
                          <li>
                            <Link to="/InternationalBankingForeignBusiness">Forex Business</Link>
                          </li>
                          <li>
                            <Link to="/ForexSavings">Forex Savings</Link>
                          </li>
                          <li>
                            <Link to="/ForexCurrent">Forex Current</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">E-Services</a>
                        <ul>
                          <li>
                            <Link to="/MobileBanking">Indo Mobile Banking</Link>
                          </li>
                          <li>
                            <Link to="/NetBanking">Indo Net Banking</Link>
                          </li>
                          <li>
                            <Link to="/ContactlessCard">IZB Cards</Link>
                          </li>
                          <li>
                            <a href="https://epay.izb.co.zm/login/">
                              ZRA/NAPSA/E-Payment
                            </a>
                          </li>
                          <li>
                            <Link to="/EEZY">Indo EEZY</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown" >
                        <a href="#" className="text-white rounded" style={{ backgroundColor: "#9E1B1E" }}>Indo Net Banking</a>
                        <ul>
                          <li>
                            <a href="https://ebanking.izb.co.zm:7004/Retail/#/landing">Retail</a>
                          </li>
                          <li>
                            <a href="https://ebanking.izb.co.zm:7004/CorporateBanking/#/landing">Corporate</a>
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
                {/* <img src="assets/images/resources/mobile-nav-logo.png" alt="" /> */}
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
