import React from "react";
import CustomerImg from "../../assets/images/IZB/IZB Website Skin/IZB Classic Savings Account/Image_3.png";
import CustomerCareImg from "../../assets/images/IZB/IZB Website Skin/IZB Classic Savings Account/Image_4.png";
import Phone from "../../assets/images/IZB/PhoneCall.png";
import Call from "../../assets/images/IZB/IZB Website Skin/Home_Page/Icons/call.png";
import whatsapp from "../../assets/images/IZB/IZB Website Skin/Home_Page/Icons/whatsapp.png";
import mail from "../../assets/images/IZB/IZB Website Skin/Home_Page/Icons/mail.png";

const CustomerCare = () => {
  const CustomerBgImg = {
    backgroundImage: `url(${CustomerImg})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  };
  return (
    <div className="container-fluid">
      <div className="row align-items-center" style={CustomerBgImg}>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img src={CustomerCareImg} alt="" />
            </div>
            <div className="col-8">
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
                What can Indo Zambia Bank do to better serve your needs? <br />{" "}
                Click the link Below for our Agents to serve you online.
              </p>
              <div className="text d-flex">
                <h5
                  className="p-2 rounded"
                  style={{ backgroundColor: "#FFC975", color: "#9E1B1E" }}
                >
                  <img src={Call} width={22} style={{marginRight:"10px"}} alt="" />
                  +260 2113 89900
                </h5>
              </div>
              <div className="text d-flex">
                <h5
                  className="p-2 my-2 rounded"
                  style={{ backgroundColor: "#FFC975", color: "#9E1B1E" }}
                >
                  <img src={whatsapp} width={22} style={{marginRight:"10px"}} alt="" />
                  +260 7717 98616                </h5>
              </div><div className="text d-flex">
                <h5
                  className="p-2 mb-2 rounded"
                  style={{ backgroundColor: "#FFC975", color: "#9E1B1E" }}
                >
                  <img src={mail} width={22} style={{marginRight:"10px"}} alt="" />
                  customerservice@izb.co.zm                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;