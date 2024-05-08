import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProgressBarComp = ({ onComplete, isComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (!isComplete) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 20;
          } else {
            clearInterval(interval);
            onComplete();
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isComplete, onComplete]);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        width: "100%",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "20px",
          backgroundColor: "#4caf50",
        }}
      ></div>
    </div>
  );
};

const ProgressBar = () => {
  const [bars, setBars] = useState([]);

  const handleCreate = () => {
    setBars((prevBars) => [...prevBars, Date.now()]);
  };

  return (
    <div>
      <button onClick={handleCreate}>Create</button>
      {bars.map((timestamp, index) => (
        <ProgressBarComp
          key={timestamp}
          onComplete={() => setBars((prevBars) => prevBars.slice(1))}
          isComplete={index !== 0}
        />
      ))}
    </div>
  );
};

ProgressBar.propTypes = {};

export default ProgressBar;
