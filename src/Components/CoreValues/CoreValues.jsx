import React from "react";
import Ourvalues from "../../assets/images/IZB/OurValues.png";
import accountability from "../../assets/images/IZB/CoreValuesIcons/accountability.png";

const CoreValues = () => {
  return (
    <section
      id="interest"
      className="interest-charges-area"
      style={{ backgroundImage: { Ourvalues } }}
    >
      <div className="container">
        <div className="sec-title text-center">
          <h2>Account Interest &amp; Charges</h2>
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
