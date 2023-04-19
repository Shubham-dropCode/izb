import React, { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import { S1col1, S1col2, S2col1, S2col2 } from "./FaqData";
import Accordion from "./Accordion";
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";
import bgimg from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/image_6.png";
import Faqbg from "../../assets/images/IZB/IZB Website Skin/Home_Page/FAQbg.png";
import horn from "../../assets/images/IZB/IZB Website Skin/FAQS/public-relation.png";
import { useEffect } from "react";

const FAQS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [col1, setCol1] = useState(S1col1);
  const [col2, setCol2] = useState(S1col2);
  const [col3, setCol3] = useState(S2col1);
  const [col4, setCol4] = useState(S2col2);
  return (
    <>
      <Breadcrumb Heading="FAQS" img={BackgroundBrundcrumb} />
      <div className="container">
        <div className="text-center my-5">
          <h1 style={{ color: "#484848" }}>Frequently Asked Questions</h1>
          <p style={{ color: "#484848" }}>
            Find answers to all your queries about our service.
          </p>
        </div>
        <form className="d-flex justify-content-center mb-3">
          <div className="col-12 col-md-4 col-lg-offset-4 col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="Related Keyword"
            />
          </div>
        </form>
        <div>
          <h2 className="my-3">FAQs on SMS-Alerts</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 justify-content-center">
              <div className="faq-style1__content">
                <ul className="accordion-box">
                  {col1.map((item) => {
                    const { id } = item;
                    return <Accordion key={id} {...item} />;
                  })}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 justify-content-center">
              <div className="faq-style1__content">
                <ul className="accordion-box">
                  {col2.map((item) => {
                    const { id } = item;
                    return <Accordion key={id} {...item} />;
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="my-3">FAQs on E-Statement</h2>
          </div>
          <div className="row">
            <div className="col-xl-6 justify-content-center">
              <div className="faq-style1__content">
                <ul className="accordion-box">
                  {col3.map((item) => {
                    const { id } = item;
                    return <Accordion key={id} {...item} />;
                  })}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 justify-content-center">
              <div className="faq-style1__content">
                <ul className="accordion-box">
                  {col4.map((item) => {
                    const { id } = item;
                    return <Accordion key={id} {...item} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div
          className="container-fluid"
          style={{ backgroundImage: `url(${Faqbg})` }}
        >
          <div className="container mt-4">
            <div className="row py-5">
              <div className="col-md-6 text-center">
                <img src={horn} width={250} alt="" />
              </div>
              <div className="col-md-6 text-white h-100 ">
                <h3 className="text-white my-3">Customer Awareness</h3>
                <p>
                  IZB never asks any confidential information to customers such
                  as: ATM or Debit card no., Pin, User id , Password of internet
                  banking, etc. If such information is asked over phone or
                  mobile or through email, avoid disclosing such confidential
                  information to the caller.
                </p>
                <p>
                  In such cases Customers are requested to bring this to the
                  notice of their parent branch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="required"
        class="documents-area"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="text-center">
            <h1 className="text-white">FAQs on ATM</h1>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="job-list-table-box">
                <div className="table-outer">
                  <table className="job-list-table">
                    <thead className="header text-center">
                      <tr>
                        <th className="w-50">DOES</th>
                        <th className="w-50">DONTS</th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      <tr>
                        <td className="location">
                          <p>
                            Sign on the strip on the back of your card as soon
                            as you receive it.
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            Never lend your card to anyone, even to your close
                            relative / friend or even if anyone claims to
                            represent the Bank.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="location">
                          <p>
                            Memorize your PIN (Personal Identification number)
                            and destroy all physical evidence of the PIN.
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            Do not write your PIN on the Card or back of the
                            Card.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="location">
                          <p>
                            Kindly destroy the pin mailer received by you upon
                            noting the PIN.
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            Never share your PIN with any one including a family
                            member or Bank personnel or in response to requests
                            through email / FAX etc.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="location">
                          <p>
                            Always change the PIN as soon as you receive it..
                          </p>
                        </td>
                        <td className="location">
                          <p>Never carry your PIN in your wallet or purse</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="location">
                          <p>
                            Register your mobile number with the bank for
                            getting SMS alerts for your ATM transactions.
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            Never use a PIN that could be guessed easily e.g.
                            Your birthday or telephone number.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="location">
                          <p>
                            Report on Any unauthorized card transactions in the
                            account, if observed, immediately to the Bank. This
                            will help you if fraudulent withdrawal is being done
                            by using your Debit Card.
                          </p>
                        </td>
                        <td className="location">
                          <p>Never leave your card in the ATM</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="location">
                          <p>
                            Store your card in a secured place where you may
                            immediately know if it is missing.
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            Never leave your card unattended, e.g. in the car,
                            in a hotel room or at work or at merchant
                            establishments.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="location">
                          <p>
                            Protect your ATM card as though it is CASH and
                            ensure safe custody.
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            Do not scratch the pin mailer. Tear the edge of the
                            envelope turn to open for easy visibility of the
                            pin.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="location">
                          <p>
                            Check the area for suspicious-looking people before
                            you approach the ATM. Leave the ATM immediately if
                            you don’t feel safe.
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            Do not respond to any E-mail purported to have been
                            issued by Bank asking for your ATM PIN. These are
                            called PHISHING attempts. At Indo-Zambia Bank, we
                            honor the trust reposed on us and will never seek
                            personal details like PIN etc. for any purpose.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="location">
                          <p>
                            Beware of “Shoulder Surfing”. Shield your PIN from
                            onlookers by covering the keypad using your body
                            while entering the PIN.
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            Don’t give information regarding your ATM card or
                            PIN over the telephone to anyone.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="location">
                          <p>
                            Be sure that you have your card and your receipt,
                            after doing the transaction, and then leave
                            immediately.
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            Never enter your PIN in any ATM that does not seem
                            to be genuine or seems modified/has a suspicious
                            device attached/operating in a suspicious manner.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="location">
                          <p>
                            Periodically verify the Account Statement entries to
                            ensure its correctness. Any unauthorized card
                            transaction, if observed, should be reported
                            immediately to the Bank.
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            Don’t display your cash; count the cash, keep it in
                            your pocket safely and leave the ATM.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="location">
                          <p>
                            When you destroy your card upon expiry or closure of
                            your account, cut it into four pieces through the
                            magnetic strip.
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            Don’t accept assistance from anyone or from the
                            security guard when using an ATM
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="location">
                          <p>
                            Look for extra devices attached to the ATMs. These
                            may be put to capture your data. Inform security /
                            bank immediately if any such device found.
                          </p>
                        </td>
                        <td className="location">
                          <p>Don’t ignore expired card, destroy it.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default FAQS;
