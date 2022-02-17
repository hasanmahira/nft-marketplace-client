import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, color, href, onPress }) => {
 
  const cssInput = `py-3 px-20 bg-regalBlue rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500`;

  return (
    <button href={href ? href : ""} className={cssInput} onClick={() => onPress()}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
