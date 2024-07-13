//rafce
import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer-outer-wrapper">
      <div className="footer-container">
        <div className="footer-column1">
          <div className="footer-icons">
            <ul>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <YouTubeIcon />
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Legal notice</li>
              <li>Service code </li>
              <li>&copy; 1997-2024 NetFlix,Inc.</li>
            </ul>
          </div>
        </div>
        <div className="footer-column2">
          <ul>
            <li>Help center</li>
            <li>Jobs</li>
            <li>Cookie preference</li>
          </ul>
        </div>
        <div className="footer-column3">
          <ul>
            <li>Gift cards</li>
            <li>Termes of use</li>
            <li>Corporate information</li>
          </ul>
        </div>
        <div className="footer-column4">
          <ul>
            <li>Media center</li>
            <li>Rrivacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
