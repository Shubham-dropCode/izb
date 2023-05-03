import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

const RequiredDocuments = () => {
  return (
    <section
      id="eligibility"
      class="eligibility-area"
      style={{ backgroundColor: "#FFF5E7" }}
    >
      <div className="container-fluid">
        <div className="sec-title text-center">
          <h2>Savings A/c Required Documents</h2>
          <div className="sub-title">
            <p>Basic documents required for opening a savings account.</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              {/*Start Single Documents Box*/}
              <div
                className="single-documents-box h-50 m-0 mb-1"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <div className="inner-title">
                  <h3 className="text-white">IZB application form</h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
              {/*Start Single Documents Box*/}
              <div
                className="single-documents-box h-50 m-0 mb-1"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <div className="inner-title">
                  <h3 className="text-white">Recommendation letter </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
            </div>
            <div className="col-xl-4 col-lg-6 mb-0">
              {/*Start Single Documents Box*/}
              <div
                className="single-documents-box h-100"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <div className="inner-title">
                  <h3 className="text-white">Proof of residence</h3>
                </div>
                <ul>
                  <li>
                    <div className="d-flex">
                      <AiFillCaretRight
                        size={15}
                        className="pe-1 position-absolute text-white"
                        style={{ top: "5px" }}
                      />
                    <p className="text-white lh-base" style={{paddingLeft:"20px"}}>
                      Minimum of k1000 per month to be maintained.
                    </p>
                    </div>
                  </li>
                  <li>
                    <p className="text-white lh-base">
                      <AiFillCaretRight size={15} className="pe-1" style={{marginRight:"5px"}} />
                      T-Pin.
                    </p>
                  </li>
                </ul>
              </div>
              {/*End Single Documents Box*/}
            </div>

            <div className="col-xl-4 col-lg-6">
              {/*Start Single Documents Box*/}
              <div
                className="single-documents-box h-50 m-0 mb-1"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <div className="inner-title">
                  <h3 className="text-white">Copy of NRC/Passport</h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
              {/*Start Single Documents Box*/}
              <div
                className="single-documents-box h-50 m-0 mb-1"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <div className="inner-title">
                  <h3 className="text-white">
                    Two recent passport size photographs.
                  </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequiredDocuments;
