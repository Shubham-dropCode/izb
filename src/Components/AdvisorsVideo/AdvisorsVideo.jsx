import React from "react";
import AdvisorsImg from "../../assets/images/IZB/IZB Website Skin/Home_Page/New_changes/Untitled-3.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import YouTube from "react-youtube";
const AdvisorsVideo = () => {
  const src = "https://www.youtube.com/channel/UCggymsoPiBtJvdvW8K6pcwQ";
  const AdvisorsBgImg = {
    backgroundImage: `url(${AdvisorsImg})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  };
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div className="container-fluid px-0">
      <div className="row">
        <YouTube videoId="Id3LBKFrBEU" opts={opts} />
        <div className="d-flex flex-column justify-content-end py-3">
          <h1 className="text-center py-2" style={{ color: "#484848" }}>
            Learn More From Our Financial Advisor.
          </h1>
          <p className="text-center py-2" style={{ color: "#949292" }}>
            Lyapa Mnewe discusses all finance related queries in a series of
            videos that you can watch now
          </p>
          <div className="button-box text-center" style={{ color: "#9E1B1E" }}>
            <a href=" https://www.youtube.com/channel/UCggymsoPiBtJvdvW8K6pcwQ ">
              <button
                className="btn-one shadow my-3 bg-white rounded"
                type="submit"
              >
                <span className="txt">
                  {" "}
                  Know More <AiOutlineArrowRight />{" "}
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorsVideo;
