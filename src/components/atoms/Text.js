import React from "react";
import PropTypes from "prop-types";

const Text = ({ label }) => {
  return (
  <div className="text">{label}</div>
  );
};

Text.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Text;
