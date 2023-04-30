import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillCaretDown, AiOutlinePhone } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import $ from "jquery";
import Logo from "../../assets/images/IZB/logo.png";
import Phone from "../../assets/images/IZB/PhoneCall.png";
import PlayStore from "../../assets/images/IZB/PlayStore.png";
import apple from "../../assets/images/IZB/apple.png";
import { Link } from "react-router-dom";
import { data } from "./NavData";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
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
                <div
                  className="looking-banking-box"
                  style={{ paddingLeft: "40px" }}
                >
                  <Link to="/">
                    <img src={Logo} width={300} />
                  </Link>
                </div>
                <div className="ms-4 ps-4">
                  <div className="input-group">
                    <div className="form-outline">
                      <input
                        style={{
                          backgroundColor: "#F0F0F0",
                          borderRadius: "21px",
                        }}
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
                          <div
                            className="d-flex gap-4"
                            style={{ marginTop: "30px" }}
                          >
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
                <div style={{ marginRight: "35px", marginLeft: "35px" }}>
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
              <div className="main-menu__wrapper-inner w-100">
                <div className="main-menu-style1-left w-100">
                  <div className="main-menu-box w-100">
                    <a href="#" className="mobile-nav__toggler w-100">
                      <GiHamburgerMenu />
                      <img src={Logo} width={250} className="ps-5" />
                    </a>
                    <ul
                      className="main-menu__list justify-content-between"
                      style={{ gap: "10px" }}
                    >
                      <li className="megamenu ">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/AboutUs">
                          About <AiFillCaretDown size={10} className="ms-1" />
                        </Link>
                        <ul>
                          <li>
                            <Link to="/AboutUs">About IZB</Link>
                          </li>
                          <li>
                            <Link to="/BoardOfDirectors">
                              Leadership & Governance
                            </Link>
                            <ul>
                              <li>
                                <Link to="/BoardOfDirectors">
                                  Board Of Directors
                                </Link>
                              </li>
                              <li>
                                <Link to="/BoardOfDirectors">
                                  Executive Management
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/FinancialPerformance">
                              Financial Performance
                            </Link>
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
                        <Link to="/PersonalBanking">
                          Personal Banking{" "}
                          <AiFillCaretDown size={10} className="ms-1" />
                        </Link>
                        <ul>
                          <li className="dropdown">
                            <a href="#">Saving Accounts</a>
                            <ul>
                              <li>
                                <Link to="/SavePlusAccount">
                                  Save Plus Bank A/C
                                </Link>
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
                            <Link to="/BhumiFixedDepositAccount">
                              Bhumi Fixed Deposit A/C
                            </Link>
                          </li>
                          <li>
                            <Link to="/IndoFastServe">Indo Fast Serve</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <Link to="/BusinessBanking">
                          Business Banking{" "}
                          <AiFillCaretDown size={10} className="ms-1" />
                        </Link>
                        <ul>
                          <li>
                            <a href="blog-2.html">Current Account</a>
                            <ul>
                              <li>
                                <Link to="/PrivilegeCurrentAcc">
                                  Privilege Current Account
                                </Link>
                              </li>

                              <li>
                                <Link to="/ClassicCurrentAccount">
                                  Classic Current Account
                                </Link>
                              </li>

                              <li>
                                <Link to="/SMECurrentAcc">
                                  SME Current Account
                                </Link>
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
                                <Link to="/WorkingCapitalFinance">
                                  Working Capital Finance
                                </Link>
                              </li>
                              <li>
                                <Link to="/LeaseRentalDiscounting">
                                  Lease Rental Discounting
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/InternatioalBankingForeignBusiness">
                          {" "}
                          Forex & Treasury{" "}
                          <AiFillCaretDown size={10} className="ms-1" />
                        </Link>
                        <ul>
                          <li>
                            <a href="">Forex Rates</a>
                          </li>
                          <li>
                            <Link to="/InternationalBankingForeignBusiness">
                              Forex Business
                            </Link>
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
                        <a href="#">
                          E-Services{" "}
                          <AiFillCaretDown size={10} className="ms-1" />
                        </a>
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
                      <li className="dropdown">
                        <a
                          href="#"
                          className="text-white rounded"
                          style={{ backgroundColor: "#9E1B1E" }}
                        >
                          Indo Net Banking
                        </a>
                        <ul>
                          <li>
                            <a href="https://ebanking.izb.co.zm:7004/Retail/#/landing">
                              Retail
                            </a>
                          </li>
                          <li>
                            <a href="https://ebanking.izb.co.zm:7004/CorporateBanking/#/landing">
                              Corporate
                            </a>
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
              <Link to="/" aria-label="logo image">
                <img src={Logo} width={200} alt="" />
              </Link>
            </div>
            <div className="mb-3 mx-0">
              <Sidebar>
                <Menu>
                  <MenuItem component={<Link to="/" />}>Home</MenuItem>

                  <SubMenu label="About Us">
                    <MenuItem component={<Link to="/AboutUs" />}>
                      About IZB
                    </MenuItem>

                    <SubMenu label="Leadership & Governance">
                      <MenuItem component={<Link to="/BoardOfDirectors" />}>
                        Board of Directors
                      </MenuItem>

                      <MenuItem component={<Link to="/BoardOfDirectors" />}>
                        Executive Management
                      </MenuItem>
                    </SubMenu>

                    <MenuItem component={<Link to="/FinancialPerformance" />}>
                      Financial Performance
                    </MenuItem>

                    <MenuItem component={<Link to="/WhyBankWithUs" />}>
                      Why Bank with us
                    </MenuItem>
                    <MenuItem component={<Link to="/" />}>CSR</MenuItem>
                  </SubMenu>
                  <SubMenu
                    component={<Link to="/PersonalBanking" />}
                    label="Personal Banking"
                  >
                    <SubMenu label="Saving Accounts">
                      <MenuItem component={<Link to="/SavePlusAccount" />}>
                        Save Plus Bank A/C
                      </MenuItem>

                      <MenuItem component={<Link to="/ClassicSavingAcc" />}>
                        Classic Saving Account
                      </MenuItem>

                      <MenuItem component={<Link to="/PrivilageSavingAcc" />}>
                        Privilege Savings Account
                      </MenuItem>

                      <MenuItem component={<Link to="/TisungoSaving" />}>
                        Tisunge Savings Account
                      </MenuItem>

                      <MenuItem component={<Link to="/TonseSavingAcc" />}>
                        Tonse Savings Account
                      </MenuItem>
                    </SubMenu>
                    <SubMenu label="Credit">
                      <MenuItem component={<Link to="/IndoHomeLoan" />}>
                        Indo Home Loan
                      </MenuItem>

                      <MenuItem component={<Link to="/IndoPersonalLoan" />}>
                        Personal Loan
                      </MenuItem>

                      <MenuItem component={<Link to="/IndoVehicleLoan" />}>
                        Indo Vehicle Loan
                      </MenuItem>
                    </SubMenu>

                    <MenuItem
                      component={<Link to="/BhumiFixedDepositAccount" />}
                    >
                      Bhumi Fixed Deposit A/C
                    </MenuItem>

                    <MenuItem component={<Link to="/IndoFastServe" />}>
                      Indo Fast Serve
                    </MenuItem>
                  </SubMenu>
                  <SubMenu
                    component={<Link to="/BusinessBanking" />}
                    label="Businesss Banking"
                  >
                    <SubMenu label="Current Account">
                      <MenuItem component={<Link to="/PrivilegeCurrentAcc" />}>
                        Privilege Current Account
                      </MenuItem>

                      <MenuItem
                        component={<Link to="/ClassicCurrentAccount" />}
                      >
                        Classic Current Account
                      </MenuItem>

                      <MenuItem component={<Link to="/SMECurrentAcc" />}>
                        SME Current Account
                      </MenuItem>
                    </SubMenu>
                    <SubMenu label="Credit">
                      <MenuItem component={<Link to="/MSMELoan" />}>
                        MSME Loan
                      </MenuItem>

                      <MenuItem component={<Link to="/TermLoan" />}>
                        Term Loan
                      </MenuItem>

                      <MenuItem component={<Link to="/AutoFinance" />}>
                        Auto Finance
                      </MenuItem>
                    </SubMenu>

                    <MenuItem component={<Link to="/AgroFinance" />}>
                      Agro Finanace
                    </MenuItem>

                    <MenuItem component={<Link to="/EquityRelease" />}>
                      Equity Release
                    </MenuItem>

                    <MenuItem component={<Link to="/BusinessFinance" />}>
                      Business Loan
                    </MenuItem>

                    <MenuItem component={<Link to="/WorkingCapitalFinance" />}>
                      Working Capital Finance
                    </MenuItem>

                    <MenuItem component={<Link to="/LeaseRentalDiscounting" />}>
                      Lease Rental Discounting
                    </MenuItem>
                  </SubMenu>
                  <SubMenu label="Forex & Treasury">
                    <MenuItem component={<Link to="/" />}>Forex Rates</MenuItem>

                    <MenuItem
                      component={
                        <Link to="/InternatioalBankingForeignBusiness" />
                      }
                    >
                      Forex Business
                    </MenuItem>

                    <MenuItem component={<Link to="/ForexSavings" />}>
                      Forex Savings
                    </MenuItem>

                    <MenuItem component={<Link to="/ForexCurrent" />}>
                      Forex Current
                    </MenuItem>
                  </SubMenu>
                  <SubMenu label="E-Services">
                    <MenuItem component={<Link to="/MobileBanking" />}>
                      Indo Mobile Banking
                    </MenuItem>

                    <MenuItem component={<Link to="/NetBanking" />}>
                      Indo Net Banking
                    </MenuItem>

                    <MenuItem component={<Link to="/ContactlessCard" />}>
                      IZB Cards
                    </MenuItem>

                    <MenuItem
                      component={<a href="https://epay.izb.co.zm/login/" />}
                    >
                      ZRA/NAPSA/E-Payment
                    </MenuItem>

                    <MenuItem component={<Link to="/EEZY" />}>
                      Indo EEZY
                    </MenuItem>
                  </SubMenu>
                  <SubMenu label="Indo Net Banking">
                    <MenuItem
                      component={
                        <a href="https://ebanking.izb.co.zm:7004/Retail/#/landing" />
                      }
                    >
                      Retail
                    </MenuItem>

                    <MenuItem
                      component={
                        <a href="https://ebanking.izb.co.zm:7004/CorporateBanking/#/landing" />
                      }
                    >
                      Corporate
                    </MenuItem>
                  </SubMenu>
                </Menu>
              </Sidebar>
            </div>
            <div className="mobile-nav__social">
              <a
                href="https://mobile.twitter.com/IndoZambiaBank"
                className="fab fa-twitter"
              />
              <a
                href="https://www.facebook.com/IndoZambiaBank?_rdc=1&_rdr#"
                className="fab fa-facebook-square"
              />
              <a
                href="https://www.linkedin.com/company/indo-zambia-bank/"
                className="fab fa-linkedin"
              />
              <a
                href="https://www.instagram.com/indo_zambia_bank/"
                className="fab fa-instagram"
              />
            </div>
          </div>
        </div>

        {/*End Main Header Style1 Bottom*/}
      </header>
    </>
  );
};

export default Navbar;
