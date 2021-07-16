import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    <div className="back">
      <div className="py-2 text-center footer-style">
        © Bijit Deb &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};
export default FooterPanel;
