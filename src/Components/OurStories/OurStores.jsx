import React, { useRef } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineShareAlt,
} from "react-icons/ai";
import storie1 from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/storie1.png";
import storie2 from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/storie2.png";
import storie3 from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/storie3.png";
import { Link } from "react-router-dom";
import { CiClock1 } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";
import Slider from "react-slick";

const OurStores = () => {
  const sliderRef = useRef(null);
  console.log(sliderRef.current);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="heading py-5">
              <h2 className="text-center">Our Stories</h2>
              <p className="text-center">All News And Updates</p>
            </div>
            <div
              className="py-4"
              style={{ float: "right", marginRight: "22px" }}
            >
              <Link to="/PersonalBanking">
                <a
                  href="#"
                  className="text-white rounded px-3 py-1"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  See More{" "}
                  <AiOutlineArrowRight size={21} className="me-1 pb-1" />
                </a>
              </Link>
            </div>
          </div>

          {/* <Slider ref={sliderRef} {...settings}>  */}
            <div className="col-xl-4 col-lg-4">
              <div
                className="single-blog-style1 wow fadeInUp"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="img-holder">
                  <div className="inner">
                    <img src={storie1} alt="" />
                    <a href="blog-single.html">
                      <div className="overlay-icon"></div>
                    </a>
                  </div>
                </div>
                <div className="text-holder">
                  <h3 className="blog-title my-4">
                    <a>Monetary policy rate</a>
                  </h3>
                  <p className="">
                    Share This Post Share on facebook Share on linkedin Share on
                    twitter Share onemail More To Explore Indo Zambia Bank, a
                    proud sponsor of...
                  </p>
                  <div className="bottom">
                    <div className="meta-box">
                      <hr
                        className="mb-0"
                        style={{ color: "#B70A00", marginTop: "32px" }}
                      />
                      <ul className="meta-info">
                        <li>
                          <span className="" /> <CiClock1 className="me-1" />
                          <a href="#">4 Mins Read</a>
                        </li>
                        <li>
                          <span className="" />{" "}
                          <BiMessageDetail className="me-1" />
                          <a href="#">9 Comment</a>
                        </li>
                        <li>
                          <a href="#">
                            <AiOutlineShareAlt className="me-1" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="share-btn">
                    
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 h-100">
              <div
                className="single-blog-style1 wow fadeInUp"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="img-holder">
                  <div className="inner">
                    <img src={storie2} alt="" />
                    <a href="blog-single.html">
                      <div className="overlay-icon"></div>
                    </a>
                  </div>
                </div>
                <div className="text-holder">
                  <h3 className="blog-title mt-4">
                    <a href="blog-single.html">
                      INDO/KONKOLA Copper mines Partnership
                    </a>
                  </h3>
                  <p>
                    CHINGOLA, 23rd June 2022: Konkola Copper Mines Plc (KCM) and
                    Indo Zambia Bank have held exploratory discussions to
                    establish a strong business partnership, which would
                  </p>
                  <div className="bottom">
                    <div className="meta-box">
                      <hr className="m-0" style={{ color: "#B70A00" }} />
                      <ul className="meta-info">
                        <li>
                          <span className="" /> <CiClock1 className="me-1" />
                          <a href="#">4 Mins Read</a>
                        </li>
                        <li>
                          <span className="" />{" "}
                          <BiMessageDetail className="me-1" />
                          <a href="#">9 Comment</a>
                        </li>
                        <li>
                          <a href="#">
                            <AiOutlineShareAlt className="me-1" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 h-100">
              <div
                className="single-blog-style1 wow fadeInUp"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="img-holder">
                  <div className="inner">
                    <img src={storie3} alt="" />
                    <a href="blog-single.html">
                      <div className="overlay-icon"></div>
                    </a>
                  </div>
                </div>
                <div className="text-holder">
                  <h3 className="blog-title">
                    <a href="blog-single.html">
                      Memorandum of understanding with Sarago Motors
                    </a>
                  </h3>
                  <p>
                    Previous Next Indo Zambia bank Signs a Memorandum of
                    Understanding with Sarago Motors for the Extension of Auto
                    Finance loans to individuals and corporate customers
                  </p>
                  <div className="bottom">
                    <div className="meta-box">
                      <hr className="mb-0" style={{ color: "#B70A00",marginTop:"24px" }} />
                      <ul className="meta-info">
                        <li>
                          <span className="" /> <CiClock1 className="me-1" />
                          <a href="#">4 Mins Read</a>
                        </li>
                        <li>
                          <span className="" />{" "}
                          <BiMessageDetail className="me-1" />
                          <a href="#">9 Comment</a>
                        </li>
                        <li>
                          <a href="#">
                            <AiOutlineShareAlt className="me-1" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </Slider> */}
          <div className="d-flex justify-content-between mb-4">
            <button type="button" class="btn btn-light border" >
              {/* onClick={()=>sliderRef.current.slickPrev()} */}
              <AiOutlineArrowLeft
                color="#B70A00"
                size={21}
                className="me-1 pb-1"
              />
              PREV
            </button>
            <button type="button" class="btn btn-light border me-4">
              NEXT
              {/*  onClick={()=>sliderRef.current.slickNext()} */}
              <AiOutlineArrowRight
                color="#B70A00"
                size={21}
                className="me-1 pb-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStores;
