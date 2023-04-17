import React from "react";
import Ourvalues from "../../assets/images/IZB/OurValues.png";
import accountability from "../../assets/images/IZB/CoreValuesIcons/accountability.png";
import Responsibility from "../../assets/images/IZB/CoreValuesIcons/social-responsibility.png"
import medal from "../../assets/images/IZB/CoreValuesIcons/medal.png"
import services from "../../assets/images/IZB/CoreValuesIcons/service.png"
import integration from "../../assets/images/IZB/CoreValuesIcons/integration.png"
import people from "../../assets/images/IZB/CoreValuesIcons/crowd-of-users.png"

const CoreValues = () => {
  return (
    <section
      id="interest"
      className="interest-charges-area"
      style={{ backgroundImage: { Ourvalues } }}
    >
      <div className="container">
        <div className="sec-title text-center">
          <h2>Our Core Values</h2>
          <div className="sub-title">
            <p>Your money is making money for you &amp; Your Family.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="interest-charges-table-box">
              <div className="table-outer">
                <table
                  className="interest-charges-table"
                  style={{
                    borderTopStyle: "none",
                    borderLeftStyle: "none",
                    borderRightStyle: "none",
                  }}
                >
                  <tbody>
                    <tr>
                      <td className="title w-25 pb-4" style={{borderWidth:"0 0 1px 0"}}>
                        <div className="border border-white text-center mx-5 p-4 rounded-circle" style={{ backgroundColor:"#FFF"}}>
                          <img src={accountability} width={90} alt="" />
                        </div>
                      </td>
                      <td className="text-white" style={{borderWidth:"0 0 1px 0",}}>
                        <h4 className="text-white">Accountability</h4>
                        <p className="py-3">
                          Our actions, decisions and sense of ownership reflect
                          our commitment to all stakeholder interests
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="title w-25 py-4" style={{borderWidth:"0 0 1px 0"}}>
                        <div className="border border-white text-center mx-5 p-4 rounded-circle" style={{ backgroundColor:"#FFF"}}>
                          <img src={Responsibility} width={90} alt="" />
                        </div>
                      </td>
                      <td className="text-white" style={{borderWidth:"0 0 1px 0",}}>
                        <h4 className="text-white">Responsibility</h4>
                        <p className="py-3">
                        We are dependable, not only to our Stakeholders. We impact the communities in which we operate through sustained CRS
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="title w-25 py-4" style={{borderWidth:"0 0 1px 0"}}>
                        <div className="border border-white text-center mx-5 p-4 rounded-circle" style={{ backgroundColor:"#FFF"}}>
                          <img src={medal} width={90} alt="" />
                        </div>
                      </td>
                      <td className="text-white" style={{borderWidth:"0 0 1px 0",}}>
                        <h4 className="text-white">Professionalism</h4>
                        <p className="py-3">
                        We aspire to a professional standard of conduct that goes beyond merely complying with the ethical rules
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="title w-25 py-4" style={{borderWidth:"0 0 1px 0"}}>
                        <div className="border border-white text-center mx-5 p-4 rounded-circle" style={{ backgroundColor:"#FFF"}}>
                          <img src={services} width={90} alt="" />
                        </div>
                      </td>
                      <td className="text-white" style={{borderWidth:"0 0 1px 0",}}>
                        <h4 className="text-white">Services</h4>
                        <p className="py-3">
                        Our exponential growth in client base reflects our commitment to delivering quality and reliable service to our customers
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="title w-25 py-4" style={{borderWidth:"0 0 1px 0"}}>
                        <div className="border border-white text-center mx-5 p-4 rounded-circle" style={{ backgroundColor:"#FFF"}}>
                          <img src={integration} width={90} alt="" />
                        </div>
                      </td>
                      <td className="text-white" style={{borderWidth:"0 0 1px 0",}}>
                        <h4 className="text-white">Integrity</h4>
                        <p className="py-3">
                        Our reputation speaks for itself because we are committed to the highest level of Ethical, moral standards and transparency
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="title w-25 py-4" style={{borderWidth:"0 0 1px 0"}}>
                        <div className="border border-white text-center mx-5 p-4 rounded-circle" style={{ backgroundColor:"#FFF"}}>
                          <img src={people} width={90} alt="" />
                        </div>
                      </td>
                      <td className="text-white" style={{borderWidth:"0 0 1px 0",}}>
                        <h4 className="text-white">People</h4>
                        <p className="py-3">
                        With an annual staff attrition rate of less than 1%, the value we place in our people is self-telling. Low attrition ensures stability and consistency. Indo Zambia Bank Limited has members of staff spread across the Branch network. The Bank is an equal opportunity employer and periodically conducts Graduate Recruitment Programmes to maintain a low attrition rate that supports a sound customer service delivery complimented by alternative distribution channels. Current available vacancies can be viewed by clicking the link below as and when available.
                        </p>
                      </td>
                    </tr>
                    {/* <tr>
                      <td className="title">
                        <h3>Debit Card</h3>
                      </td>
                      <td className="balance">
                        <ul>
                          <li>Annual Fees</li>
                          <li>Transaction Limit</li>
                          <li>Card Replacement</li>
                        </ul>
                      </td>
                      <td className="interest">
                        <ul>
                          <li>Nill</li>
                          <li>20 Lakh / Annum</li>
                          <li>Rs.600+Taxes</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <h3>Credit Card</h3>
                      </td>
                      <td className="balance">
                        <ul>
                          <li>Annual Fees</li>
                          <li>Card Replacement</li>
                        </ul>
                      </td>
                      <td className="interest">
                        <ul>
                          <li>Rs.1500</li>
                          <li>Rs.600+Taxes</li>
                        </ul>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
