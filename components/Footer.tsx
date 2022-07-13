import React from "react";
import { SocialMediaIcons } from "./SocialMediaIcons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="my-1 flex flex-col items-center justify-center footer-text">
        Developed by Sabitha Kuppusamy
        <SocialMediaIcons />
        <div className="text-[10px]">
          {" "}
          &copy; Copyright {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
