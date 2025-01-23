import { assets } from "../../assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Venetus App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
      <div className="about-us">
        <div className="about-us-us">
          <div className="about-us-info">
            <img src={assets.c1} alt="" />
            <h6>Open Hours</h6>
            <p>9:00 am - 10:00 pm</p>
          </div>
          <div className="about-us-info">
            <img src={assets.c2} alt="" />
            <h6>Direction</h6>
            <p>Mollasadra 9th</p>
          </div>
          <div className="about-us-info">
            <img src={assets.c3} alt="" />
            <h6>Call Us</h6>
            <p>3365 66 06</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
