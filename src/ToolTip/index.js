import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Tooltip = ({ text = "Hello, I'm a tooltip!", children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  console.log(showTooltip);
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button>hover me</button>
      {showTooltip && <div className={styles.tooltip}>{text}</div>}
    </div>
  );
};

export default Tooltip;
