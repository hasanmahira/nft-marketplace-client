import React from "react";
import PropTypes from "prop-types";

const Button = ({ label }) => {
  return (
  <div className="button">{label}</div>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
