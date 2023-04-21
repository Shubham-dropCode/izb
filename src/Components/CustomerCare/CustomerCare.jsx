import React from "react";
import CustomerImg from "../../assets/images/IZB/IZB Website Skin/IZB Classic Savings Account/Image_3.png";
import CustomerCareImg from "../../assets/images/IZB/IZB Website Skin/IZB Classic Savings Account/Rectangle 9.png";
import Phone from "../../assets/images/IZB/PhoneCall.png";
import Call from "../../assets/images/IZB/IZB Website Skin/Home_Page/Icons/phone 1.png";
import whatsapp from "../../assets/images/IZB/IZB Website Skin/Home_Page/Icons/whatsapp 1.png";
import mail from "../../assets/images/IZB/IZB Website Skin/Home_Page/Icons/mail 1.png";

const CustomerCare = () => {
  const CustomerBgImg = {
    backgroundImage: `url(${CustomerImg})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  };
  const containerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  };
  return (
    <div className="container-fluid" style={{ containerFluid }}>
      <div className="row align-items-center" style={CustomerBgImg}>
        <div className="container">
          <div className="row">
            <div className="offset-1 col-5">
              <img src={CustomerCareImg} width="100%" alt="" />
            </div>
            <div className="col-6">
              <h2 className="text-white">React us When you need us</h2>
              <a className=" mx-2 my-2 rounded d-flex align-items-center">
                <div className="icon">
                  <img src={Phone} width={40} className="style2 text" alt="" />
                </div>
                <div className="text">
                  <h3 className="text-white mx-3">Toll-Free</h3>
                </div>
                <div className="text">
                  <h4
                    className="p-2 rounded"
                    style={{ backgroundColor: "#FFC975", color: "#9E1B1E" }}
                  >
                    8002
                  </h4>
                </div>
              </a>
              <p className="text-white my-3" style={{ lineHeight: "1.3" }}>
                What can Indo Zambia Bank do to better serve your needs? <br />
                Click the link Below for our Agents to serve you online.
              </p>
              <div>
                <div className="text d-flex">
                  <h5
                    className="p-2 rounded"
                    style={{ backgroundColor: "#FFC975", color: "#9E1B1E",width:"60%" }}
                  >
                    <img
                      src={Call}
                      width={22}
                      style={{ marginRight: "10px" }}
                      alt=""
                    />
                    +260 2113 89900
                  </h5>
                </div>
                <div className="text d-flex">
                  <h5
                    className="p-2 my-2 rounded"
                    style={{ backgroundColor: "#FFC975", color: "#9E1B1E",width:"60%" }}
                  >
                    <img
                      src={whatsapp}
                      width={22}
                      style={{ marginRight: "10px" }}
                      alt=""
                    />
                    +260 7717 98616{" "}
                  </h5>
                </div>
                <div className="text d-flex">
                  <h5
                    className="p-2 mb-2 rounded"
                    style={{ backgroundColor: "#FFC975", color: "#9E1B1E",width:"60%" }}
                  >
                    <img
                      src={mail}
                      width={22}
                      style={{ marginRight: "10px" }}
                      alt=""
                    />
                    customerservice@izb.co.zm{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
