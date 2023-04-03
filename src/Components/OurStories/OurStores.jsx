import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import storie1 from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/storie1.png";
import storie2 from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/storie2.png";
import storie3 from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/storie3.png";

const OurStores = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="heading py-5">
              <h2 className="text-center">Our Stories</h2>
              <p className="text-center">All News And Updates</p>
            </div>
          </div>
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
                <h3 className="blog-title">
                  <a href="blog-single.html">Monetary policy rate</a>
                </h3>
                <p>
                  Share This Post Share on facebook Share on linkedin Share on
                  twitter Share onemail More To Explore Indo Zambia Bank, a
                  proud sponsor of...
                </p>
                <div className="bottom">
                  <div className="meta-box">
                    <ul className="meta-info">
                      <li>
                        <span className="icon-clock" />{" "}
                        <a href="#">4 Mins Read</a>
                      </li>
                      <li>
                        <span className="icon-comment" />{" "}
                        <a href="#">9 Comment</a>
                      </li>
                    </ul>
                  </div>
                  <div className="share-btn">
                    <a href="#">
                      <AiOutlineShareAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
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
                <h3 className="blog-title">
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
                    <ul className="meta-info">
                      <li>
                        <span className="icon-clock" />{" "}
                        <a href="#">10 Mins Read</a>
                      </li>
                      <li>
                        <span className="icon-comment" />{" "}
                        <a href="#">10 Comments</a>
                      </li>
                    </ul>
                  </div>
                  <div className="share-btn">
                    <a href="#">
                      <AiOutlineShareAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
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
                    <ul className="meta-info">
                      <li>
                        <span className="icon-clock" />{" "}
                        <a href="#">6 Mins Read</a>
                      </li>
                      <li>
                        <span className="icon-comment" />{" "}
                        <a href="#">10 Cmnts</a>
                      </li>
                    </ul>
                  </div>
                  <div className="share-btn">
                    <a href="#">
                      <AiOutlineShareAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStores;
