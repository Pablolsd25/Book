/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ property1, className, mailClassName }) => {
  return (
    <div className={`component ${property1} ${className}`}>
      <img
        className={`mail-2 ${mailClassName}`}
        alt="Mail"
        src={
          property1 === "git-hub"
            ? "https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/github@2x.png"
            : property1 === "frame-13"
            ? "https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/whatsapp@2x.png"
            : "https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/mail@2x.png"
        }
      />
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["mail", "git-hub", "frame-13"]),
};
