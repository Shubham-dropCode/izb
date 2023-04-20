import React from "react";
import FormImg from "../../assets/images/IZB/FromImg.png";

const ContactForm = () => {
  const FormImgStyle = {
    backgroundImage: `url(${FormImg})`,
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  };
  return (
    <section className="apply-form-area">
      <div className="container">
        <div className="row">
          <div className="heading mb-3">
            <h1 className="text-center py-2" style={{ color: "#484848" }}>
              Request For call back
            </h1>
            <p className="text-center py-2" style={{ color: "#949292" }}>
              Committed to helping you meet all your banking needs.
            </p>
          </div>
          <div className="col-xl-6 col-xl-6 px-0">
            <div
              className="overview-content-box-one mx-0 px-5 pb-5 d-flex flex-column justify-content-end text-white"
              style={FormImgStyle}
            >
              <h3 className="text-white py-1">
                Secure your child future with our
              </h3>
              <h2 className="text-white py-2">SAVE PLUS ACCOUNT</h2>
              <p style={{fontSize:"16px"}}>
                Exclusively designed savings account <br />
                to inculcate savings habits in parents <br />
                and guardians for their children.
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 px-0" style={{backgroundColor:"#FFF5E7"}}>
            <div className="apply-form-box__content mx-0">
              <form
                id="apply-form"
                name="apply_form"
                className="default-form2"
                action="index.html"
                method="post"
              >
                <div className="row">
                  <div className="col-xl-12">
                    <div className="form-group">
                      <label>Name</label>
                      <div className="input-box">
                        <input
                          type="text"
                          name="form_name"
                          id="formName"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="form-group">
                      <label>Email</label>
                      <div className="input-box">
                        <input
                          type="email"
                          name="form_email"
                          id="formEmail"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="form-group">
                      <label>Ph. Num</label>
                      <div className="input-box">
                        <input
                          type="text"
                          name="form_phone"
                          defaultValue=""
                          id="formPhone"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="form-group">
                      <label>Select any product type</label>
                      <div className="select-box clearfix">
                        <select className="wide w-100 p-2 border-0">
                          <option data-display="City">Personal Banking</option>
                          <option value={1}>Business Banking</option>
                          <option value={2}>Credit</option>
                          <option value={3}>Others</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <div className="form-group">
                      <label>Message</label>
                      <div className="input-box">
                        <textarea
                          style={{ width: "100%", border:"none" }}
                          type="text"
                          name="form_message"
                          id="formMessage"
                          placeholder=""
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="button-box" >
                      <button className="btn-one" style={{borderRadius:"10px"}} type="submit">
                        <span className="txt">Submit </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
