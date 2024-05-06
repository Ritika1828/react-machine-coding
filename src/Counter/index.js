import { useEffect, useState } from "react";
import styles from "./index.module.scss";
export function Counter() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(true);
  function handleReset() {
    setIsCounting(false);
    setCount(0);
  }
  useEffect(() => {
    let interval;
    if (isCounting) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCounting]);
  return (
    <div className={styles.container}>
      <h1> {count}</h1>
      <div className={styles.btn}>
        <button onClick={() => setIsCounting(true)}>Start</button>
        <button onClick={() => setIsCounting(false)}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
