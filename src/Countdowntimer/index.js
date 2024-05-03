import { useEffect, useState } from "react";
import styles from "./index.module.scss";

export default function App() {
  const initialTime = 0;
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev + 1);
      }, 1000);
    } else if (timeLeft <= 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStartClick = () => {
    setIsActive(true);
  };

  const handleStopclick = () => {
    setIsActive(false);
  };

  const handleResetClick = () => {
    setIsActive(false);
    setTimeLeft(initialTime);
  };

  const handleAddMinute = () => {
    setTimeLeft(timeLeft + 60);
  };

  const handleTimer = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}m ${seconds < 10 ? "0" + seconds : seconds}s`;
  };

  return (
    <div className="App">
      <div className={styles.header}>Timer</div>
      <div className={styles.timer}>{handleTimer(timeLeft)}</div>
      <div className={styles.buttonContainer}>
        <button onClick={handleStartClick}>Start</button>
        <button onClick={handleStopclick}>Stop</button>
        <button onClick={handleResetClick}>Reset</button>
        <button onClick={handleAddMinute}>Add 1 minute</button>
      </div>
    </div>
  );
}
