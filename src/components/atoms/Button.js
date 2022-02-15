import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, color, href, onPress }) => {
  // console.log("color", color);
  let bgColor = "bg-" + (color ? color : "regalBlue");

  const cssInput = `py-3 px-20 ${bgColor} rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500`;

  // console.log("cssInput", cssInput);
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

// Button.propTypes = {
//   size: PropTypes.oneOf([
//     ButtonProps.size.xxxs,
//     ButtonProps.size.xxs,
//     ButtonProps.size.xs,
//     ButtonProps.size.sm,
//     ButtonProps.size.md,
//     ButtonProps.size.lg,
//     ButtonProps.size.xl,
//     ButtonProps.size.full,
//   ]),
//   position: PropTypes.oneOf([
//     ButtonProps.position.bottom,
//     ButtonProps.position.top,
//     ButtonProps.position.left,
//     ButtonProps.position.right,
//   ]),
//   type: PropTypes.oneOf([
//     ButtonProps.type.default,
//     ButtonProps.type.bordered,
//     ButtonProps.type.icon,
//     ButtonProps.type.fastLoginTR,
//     ButtonProps.type.fastLoginEN,
//   ]),
//   color: PropTypes.oneOf([
//     ButtonProps.color.primary,
//     ButtonProps.color.secondary,
//     ButtonProps.color.highlight,
//     ButtonProps.color.transparent,
//     ButtonProps.color.red,
//     ButtonProps.color.negative,
//   ]),
// };

// Button.defaultProps = {
//   size: ButtonProps.size.lg,
//   position: ButtonProps.position.right,
//   type: ButtonProps.type.default,
//   color: ButtonProps.color.primary,
// };

export default Button;
