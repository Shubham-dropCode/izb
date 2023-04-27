import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/IZB Contactless Card/Untitled-1.png";
import img1 from "../../assets/images/IZB/IZB Website Skin/IZB Contactless Card/Untitled-2.png";
import debitCard from "../../assets/images/IZB/IZB Website Skin/IZB Contactless Card/IZB-Contactless-Cards-01-1024x657.png";
import goldCard from "../../assets/images/IZB/IZB Website Skin/IZB Contactless Card/IZB-Contactless-Cards-03-1024x657.png";
import Platinumn from "../../assets/images/IZB/IZB Website Skin/IZB Contactless Card/IZB-Contactless-Cards-02-1024x658.png";
import SavePlusAccountComponent from "../../Components/SavePlusAccount/SavePlusAccountComponent";
import { IoIosArrowForward } from "react-icons/io";

import { AiFillCaretRight } from "react-icons/ai";
import { useEffect } from "react";

const ContactlessCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const accountContent =
    "Get the most out of every transaction with the newIZB contactless Visa Card. Tap to pay!";
  return (
    <>
      <Breadcrumb Heading="IZB Cards" img={BackgroundBrundcrumb} />
      <SavePlusAccountComponent
        heading="IZB Cards"
        subHeading="Know About"
        content={accountContent}
        btnTxt="Apply Now"
        img={img1}
      />

      <section className="overview-area mx-5 pb-3 mb-5" style={{backgroundColor:"#F5F5F5"}}> 
      <div className="container" >
        <div className="text-center my-5">
          <h2>Your IZB Contactless Card brings you unmatched features</h2>
        </div>
        <div className="row">
          <div
            className="containeWrap"
            style={{ border: "1px solid #9E1B1E", borderRadius: "20px" }}
          >
            <div className="single-card-box">
              <div className="cards-img-box">
                <div className="inner">
                  <img src={debitCard} alt="" />
                </div>
              </div>
              <div className="cards-text-box">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                  <h2 style={{ color: "#9E1B1E" }}>IZB Visa Debit Card</h2>
                  <button
                    className="btn btn-danger w-50 text-white mt-3 fs-5"
                    style={{ backgroundColor: "#9E1B1E", borderRadius: "20px" }}
                  >
                    Apply for Card
                  </button>
                </div>
              </div>
            </div>
            <div className="cardDetails gap-3">
              <h6 style={{ color: "#9E1B1E" }}>
                Benefits
                <hr />
              </h6>
              <div className="details my-auto">
                <p>
                  <AiFillCaretRight size={15} className="pe-1" />
                  Less risk of overspending. Its easy to overspend with
                  traditional cards. Prepaid cards limit spending to no more
                  than the card balance.
                </p>

                <span className="d-flex position-relative">
                  <AiFillCaretRight
                    size={15}
                    className="pe-1 position-absolute"
                    style={{ top: "5px" }}
                  />
                </span>
                <p className="ps-3">
                  Safer than cash. Prepaid credit cards are safer to carry than
                  cash, which make them great options for travellers. Quick and
                  easy registration of prepaid cards protects consumers if the
                  card is lost or stolen.
                </p>

                <p>
                  <AiFillCaretRight size={15} className="pe-1" />
                  Easy to use and reload. Consumers can reload their prepaid
                  cards in a variety of ways, including via bank account
                  transfers or cash deposit
                </p>
                <p>
                  <AiFillCaretRight size={15} className="pe-1" />
                  An alternative to banks. Prepaid cards offer unbanked
                  consumers access to essential payment services.
                </p>
                <p className="pb-5">
                  <AiFillCaretRight size={15} className="pe-1" />
                  Secure alternative form of payment. Prepaid cards offer an
                  additional level of anonymity and protection for personally
                  identifiable information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-center my-5">
          <h2>Your IZB Contactless Card brings you unmatched features</h2>
        </div>
        <div className="row">
          <div
            className="containeWrap"
            style={{ border: "1px solid #9E1B1E", borderRadius: "20px" }}
          >
            <div className="single-card-box">
              <div className="cards-img-box">
                <div className="inner">
                  <img src={goldCard} alt="" />
                </div>
              </div>
              <div className="cards-text-box">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                  <h2 style={{ color: "#9E1B1E" }}>IZB Gold Card</h2>
                  <button
                    className="btn btn-danger w-50 text-white mt-3 fs-5"
                    style={{ backgroundColor: "#9E1B1E", borderRadius: "20px" }}
                  >
                    Apply for Card
                  </button>
                </div>
              </div>
            </div>
            <div className="cardDetails gap-3">
              <h6 style={{ color: "#9E1B1E" }}>
                Benefits
                <hr />
              </h6>
              <div className="details my-auto">
                <p>
                  <AiFillCaretRight size={15} className="pe-1" />
                  High transaction limits than IZB Classic Debit card
                </p>
                <p>
                  <AiFillCaretRight size={15} className="pe-1" />
                  The card provides international recognition and status
                </p>
                <span className="d-flex position-relative">
                  <AiFillCaretRight
                    size={15}
                    className="pe-1 position-absolute"
                    style={{ top: "5px" }}
                  />
                  <p className="ps-3">
                    Travel benefits for customers who book through Agoda.com.
                    Gold cardholders get upto 12% discount on accommodation. To
                    redeem this benefit, simply book your accommodation through
                    https://www.agoda.com/visassapremium.
                  </p>
                </span>
                <p className="pb-5">
                  <AiFillCaretRight size={15} className="pe-1" />
                  Global offers e.g. discounts and promotions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-5">
        <div className="text-center my-5">
          <h2>Your IZB Contactless Card brings you unmatched features</h2>
        </div>
        <div className="row">
          <div
            className="containeWrap"
            style={{ border: "1px solid #9E1B1E", borderRadius: "20px" }}
          >
            <div className="single-card-box">
              <div className="cards-img-box">
                <div className="inner">
                  <img src={Platinumn} alt="" />
                </div>
              </div>
              <div className="cards-text-box">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                  <h2 style={{ color: "#9E1B1E" }}>IZB Visa Debit Card</h2>
                  <button
                    className="btn btn-danger w-50 text-white mt-3 fs-5"
                    style={{ backgroundColor: "#9E1B1E", borderRadius: "20px" }}
                  >
                    Apply for Card
                  </button>
                </div>
              </div>
            </div>
            <div className="cardDetails gap-3">
              <h6 style={{ color: "#9E1B1E" }}>
                Benefits
                <hr />
              </h6>
              <div className="details my-auto">
                <p>
                  <AiFillCaretRight size={15} className="pe-1" />
                  Higher transaction limits than IZB Classic and IZB Gold debit
                  cards
                </p>
                <p>
                  <AiFillCaretRight size={15} className="pe-1" />
                  The card provides international recognition and status
                </p>
                <p>
                  <AiFillCaretRight size={15} className="pe-1" />
                  Luxury Hotel Collection. Book through www.visaluxuryhotels.com
                  to avail benefit.
                </p>
                <span className="d-flex position-relative">
                  <AiFillCaretRight
                    size={15}
                    className="pe-1 position-absolute"
                    style={{ top: "5px" }}
                  />
                </span>
                <p className="ps-3">
                  Buyer Protection and Extended Warranty. Visa offers buyer
                  protection for customer buying eligible items. Further the
                  original warranty offered is doubled by Visa. Cardholders can
                  use https://www.visacards.africa enabling them to
                </p>
                <p className="ps-2">
                  <IoIosArrowForward size={15} className="pe-1" />
                  Access and download their insurance Terms and Conditions
                </p>
                <p className="pb-5 ps-2">
                  <IoIosArrowForward size={15} className="pe-1" />
                  Get instructions for initiating the claim process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <AllAcountsSection />
    </>
  );
};

export default ContactlessCard;
