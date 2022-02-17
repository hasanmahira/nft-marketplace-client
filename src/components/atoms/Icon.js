import React from "react";
import PropTypes from "prop-types";

const Icon = ({ icon }) => {
  return (
  <div className="Icon">{icon}</div>
  );
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
};

export default Icon;
