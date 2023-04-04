import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import img2021 from "../../assets/images/IZB/IZB Website Skin/Finincial_Reports/2.png";
import img2020 from "../../assets/images/IZB/IZB Website Skin/Finincial_Reports/1.png";
import img2019 from "../../assets/images/IZB/IZB Website Skin/Finincial_Reports/6.png";
import img2018 from "../../assets/images/IZB/IZB Website Skin/Finincial_Reports/5.png";
import img2017 from "../../assets/images/IZB/IZB Website Skin/Finincial_Reports/4.png";
import img2016 from "../../assets/images/IZB/IZB Website Skin/Finincial_Reports/3.png";
import img2015 from "../../assets/images/IZB/IZB Website Skin/Finincial_Reports/7.png";
import statement1 from "../../assets/images/IZB/IZB Website Skin/Finincial_Reports/9.png";
import statement2 from "../../assets/images/IZB/IZB Website Skin/Finincial_Reports/10.png";
import statement3 from "../../assets/images/IZB/IZB Website Skin/Finincial_Reports/11.png";
import statement4 from "../../assets/images/IZB/IZB Website Skin/Finincial_Reports/12.png";
const FiniancialPerformanceComponent = () => {
  const [isActive, setIsActive] = useState(true);
  const Report2021 = "http://localhost:3000/reports/2021.pdf";
  const Report2020 = "http://localhost:3000/reports/2020.pdf";
  const Report2019 = "http://localhost:3000/reports/2019.pdf";
  const Report2018 = "http://localhost:3000/reports/2018.pdf";
  const Report2017 = "http://localhost:3000/reports/2017.pdf";
  const Report2016 = "http://localhost:3000/reports/2016.pdf";
  const Report2015 = "http://localhost:3000/reports/2015.pdf";

  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="faq-style1__content pt-md-4">
            <ul className="accordion-box">
              <li
                onClick={() => setIsActive(isActive)}
                className="accordion block active-block"
              >
                <div
                  className="acc-btn active"
                  style={{ backgroundColor: "#9E1B1E", backgroundSize: "20px" }}
                >
                  <div className="icon-outer text-white">
                    {isActive ? (
                      <AiOutlineArrowRight size={20} />
                    ) : (
                      <AiOutlineArrowDown size={20} />
                    )}
                  </div>
                  <h3 className="text-white">IZB Annual Reports </h3>
                </div>
                {isActive && (
                  <div className="acc-content current">
                    <div className="row">
                      <div className="col-sm-6 col-md-3 col-xl-3 text-center">
                        <div>
                          <img src={img2021} alt="" />
                        </div>
                        <div className="my-3">
                          <p>
                            <strong>Report - 2021</strong>
                          </p>
                          <div
                            className="mt-3"
                            // style={{ backgroundColor: "#9E1B1E" }}
                          >
                            <button className="btn-one shadow my-3 bg-white rounded " type="submit">
                              <span
                                onClick={() => {
                                  downloadFile(Report2021);
                                }}
                                className="txt "
                              >
                                Downlaod PDF <AiOutlineArrowDown size={20} />{" "}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-xl-3 text-center">
                        <div>
                          <img src={img2020} alt="" />
                        </div>
                        <div className="my-3">
                          <p>
                            <strong>Report - 2020</strong>
                          </p>
                          <div
                            className="mt-3"
                            // style={{ backgroundColor: "#9E1B1E" }}
                          >
                            <button className="btn-one shadow my-3 bg-white rounded " type="submit">
                              <span
                                onClick={() => {
                                  downloadFile(Report2020);
                                }}
                                className="txt"
                              >
                                Downlaod PDF <AiOutlineArrowDown size={20} />{" "}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-xl-3 text-center">
                        <div>
                          <img src={img2019} alt="" />
                        </div>
                        <div className="my-3">
                          <p>
                            <strong>Report - 2019</strong>
                          </p>
                          <div
                            className="mt-3"
                            // style={{ backgroundColor: "#9E1B1E" }}
                          >
                            <button className="btn-one shadow my-3 bg-white rounded " type="submit">
                              <span
                                onClick={() => {
                                  downloadFile(Report2019);
                                }}
                                className="txt "
                              >
                                Downlaod PDF <AiOutlineArrowDown size={20} />{" "}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-xl-3 text-center">
                        <div>
                          <img src={img2018} alt="" />
                        </div>
                        <div className="my-3">
                          <p>
                            <strong>Report - 2018</strong>
                          </p>
                          <div
                            className="mt-3"
                            // style={{ backgroundColor: "#9E1B1E" }}
                          >
                            <button className="btn-one shadow my-3 bg-white rounded " type="submit">
                              <span
                                onClick={() => {
                                  downloadFile(Report2018);
                                }}
                                className="txt"
                              >
                                Downlaod PDF <AiOutlineArrowDown size={20} />{" "}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-xl-3 text-center">
                        <div>
                          <img src={img2017} alt="" />
                        </div>
                        <div className="my-3">
                          <p>
                            <strong>Report - 2017</strong>
                          </p>
                          <div
                            className="mt-3"
                            // style={{ backgroundColor: "#9E1B1E" }}
                          >
                            <button className="btn-one shadow my-3 bg-white rounded " type="submit">
                              <span
                                onClick={() => {
                                  downloadFile(Report2017);
                                }}
                                className="txt"
                              >
                                Downlaod PDF <AiOutlineArrowDown size={20} />{" "}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-xl-3 text-center">
                        <div>
                          <img src={img2016} alt="" />
                        </div>
                        <div className="my-3">
                          <p>
                            <strong>Report - 2016</strong>
                          </p>
                          <div
                            className="mt-3"
                            // style={{ backgroundColor: "#9E1B1E" }}
                          >
                            <button className="btn-one shadow my-3 bg-white rounded " type="submit">
                              <span
                                onClick={() => {
                                  downloadFile(Report2016);
                                }}
                                className="txt"
                              >
                                Downlaod PDF <AiOutlineArrowDown size={20} />{" "}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-xl-3 text-center">
                        <div>
                          <img src={img2015} alt="" />
                        </div>
                        <div className="my-3">
                          <p>
                            <strong>Report - 2015</strong>
                          </p>
                          <div
                            className="mt-3"
                            // style={{ backgroundColor: "#9E1B1E" }}
                          >
                            <button className="btn-one shadow my-3 bg-white rounded " type="submit">
                              <span
                                onClick={() => {
                                  downloadFile(Report2015);
                                }}
                                className="txt"
                              >
                                Downlaod PDF <AiOutlineArrowDown size={20} />{" "}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                onClick={() => setIsActive(isActive)}
                className="accordion block active-block"
              >
                <div
                  className="acc-btn active"
                  style={{ backgroundColor: "#9E1B1E", backgroundSize: "20px" }}
                >
                  <div className="icon-outer text-white">
                    {isActive ? (
                      <AiOutlineArrowRight size={20} />
                    ) : (
                      <AiOutlineArrowDown size={20} />
                    )}
                  </div>
                  <h3 className="text-white">IZB Financial Statement</h3>
                </div>
                {isActive && (
                  <div className="acc-content current">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-xl-6 text-center">
                        <div>
                          <img src={statement1} alt="" />
                        </div>
                        <div className="my-3">
                          <p>
                            Quarterly Financial Statements - 30th September,
                            2022
                          </p>

                          <button
                            className="btn-one shadow my-3 bg-white rounded "
                            type="submit"
                            style={{ backgroundColor: "#9E1B1E" }}
                          >
                            <span
                              onClick={() => {
                                downloadFile(Report2021);
                              }}
                              className="txt"
                            >
                              Downlaod PDF <AiOutlineArrowDown size={20} />{" "}
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-xl-6 text-center">
                        <div>
                          <img src={statement2} alt="" />
                        </div>
                        <div className="my-3">
                          <p>
                            Quarterly Financial Statements - 31st March, 2022
                          </p>

                          <button
                            className="btn-one shadow my-3 bg-white rounded "
                            type="submit"
                            style={{ backgroundColor: "#9E1B1E" }}
                          >
                            <span
                              onClick={() => {
                                downloadFile(Report2021);
                              }}
                              className="txt"
                            >
                              Downlaod PDF <AiOutlineArrowDown size={20} />{" "}
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-xl-6 text-center">
                        <div>
                          <img src={statement3} alt="" />
                        </div>
                        <div className="my-3">
                          <p>
                            Quarterly Financial Statements as at 31st December
                            2021
                          </p>

                          <button
                            className="btn-one shadow my-3 bg-white rounded "
                            type="submit"
                            style={{ backgroundColor: "#9E1B1E" }}
                          >
                            <span
                              onClick={() => {
                                downloadFile(Report2021);
                              }}
                              className="txt "
                            >
                              Downlaod PDF <AiOutlineArrowDown size={20} />{" "}
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-xl-6 text-center">
                        <div>
                          <img src={statement4} alt="" />
                        </div>
                        <div className="my-3">
                          <p>Quarterly Financial Statements - 30-06-2021</p>

                          <button
                            className="btn-one shadow my-3 bg-white rounded "
                            type="submit"
                            style={{ backgroundColor: "#9E1B1E" }}
                          >
                            <span
                              onClick={() => {
                                downloadFile(Report2021);
                              }}
                              className="txt"
                            >
                              Downlaod PDF <AiOutlineArrowDown size={20} />{" "}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiniancialPerformanceComponent;
