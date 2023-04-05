import React, { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import { questionSet1, questionSet2 } from "./FaqData";
import Accordion from "./Accordion";
const FAQS = () => {
  const [data, setData] = useState(questionSet1);
  const [newData, setNewData] = useState(questionSet2);
  return (
    <>
      <Breadcrumb Heading="FAQS" />
      <div className="container">
        <div className="text-center my-5">
          <h1 style={{ color: "#484848" }}>Frequently Asked Questions</h1>
          <p style={{ color: "#484848" }}>
            Find answers to all your queries about our service.
          </p>
        </div>
        <form>
          <div className="col-12 col-md-4 col-lg-offset-4 col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="Related Keyword"
            />
          </div>
        </form>
        <div>
          <h2>FAQs on SMS-Alerts</h2>
        </div>

        <div className="col-xl-12 justify-content-center">
          <div className="faq-style1__content">
            <ul className="accordion-box">
              {data.map((item) => {
                const { id } = item;
                return <Accordion key={id} {...item} />;
              })}
            </ul>
          </div>
        </div>

        <div>
          <h2>FAQs on E-Statement</h2>
        </div>

        <div className="col-xl-12 justify-content-center">
          <div className="faq-style1__content">
            <ul className="accordion-box">
              {newData.map((item) => {
                const { id } = item;
                return <Accordion key={id} {...item} />;
              })}
            </ul>
          </div>
        </div>
      </div>

      <AllAcountsSection />
    </>
  );
};

export default FAQS;
