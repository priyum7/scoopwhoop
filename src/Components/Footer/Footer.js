import React from "react";
import "./Footer.css";
import scoopwhoop_footer_logo from "../../scoopwhoop_footer_logo.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer_outer">
      <div className="footer_start"></div>
      <div className="footer_inner">
        <div class="footer_item">
          <img
            style={{ height: "40px", width: "70px" }}
            src={scoopwhoop_footer_logo}
            alt="ScoopWhoop logo"
          ></img>
          <span style={{ fontSize: "10px" }}>ScoopWhoop Media Pvt. Ltd.</span>
        </div>

        <div class="footer_item">
          <span>Follow us</span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>

        <div class="footer_item">
          <span>About us</span>
          <span>Contact us</span>
          <span>Careers</span>
        </div>

        <div class="footer_item">
          <span>Advertise with us</span>
          <span>Privacy policy</span>
          <span>Terms and conditions</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
