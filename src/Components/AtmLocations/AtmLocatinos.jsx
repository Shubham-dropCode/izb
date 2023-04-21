import React from "react";

const AtmLocatinos = () => {
  const formControl = {
    width: "600px",
    fill: "none",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid grey",
    fontSize: "18px",
    // marginBottom: "16px",
    placeholder: "#FFF",
  };
  return (
    <div className="container p-4 d-none d-md-block ">
      <div className="row">
        <div className="text-center mb-5">
          <h1 style={{ color: "#484848" }}>ATM/Branch Location </h1>
          <p style={{ color: "#484848" }}>
            Locate Indo Zambia Bank Branch and our ATM locations in your area.
          </p>
        </div>

        <div
          className="col-12 d-inline-flex justify-content-start align-items-center gap-4 "
          style={{ backgroundColor: "#9E1B1E" }}
        >
          <div className="form-check">
            <input
              className="form-check-input w-sm-25"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className="text-white form-check-label"
              htmlFor="flexRadioDefault1"
            >
              BRANCH
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              defaultChecked=""
            />
            <label
              className="text-white form-check-label"
              htmlFor="flexRadioDefault2"
            >
              ATM
            </label>
          </div>
          <span className="border h-75"></span>
          <div className="col-7">
            <form role="form" className="form-horizontal">
              <div className="form-group has-feedback has-feedback-left">
                <label className="control-label sr-only">Username</label>

                <input
                  type="text"
                  id="HomepageAtm"
                  className="form-control"
                  style={formControl}
                  placeholder="Enter Your Location"
                />
              </div>
            </form>
          </div>
          <div>
            <div
              className="button-box text-center p-0"
              style={{ color: "#9E1B1E" }}
            >
              <button
                className="btn-one shadow my-3 bg-white rounded"
                type="submit"
              >
                <span className="txt">Search </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtmLocatinos;
