import { useState } from "react";
import styles from "./index.module.scss";

function CircleWithRandomColor() {
  const [addCircle, setAddCircle] = useState([]);
  const [circleColor, setCircleColor] = useState("");
  const [currentCircle, setCurrentcircle] = useState(0);
  const [location, setLocation] = useState({ x: 0, y: 0 });
  function handleCircleColorChange(index) {
    setCurrentcircle(index);
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setCircleColor(color);
  }
  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        onClick={() => {
          setLocation({ x: Math.random() * 100, y: Math.random() * 100 });
          setAddCircle([
            ...addCircle,
            { id: Date.now(), x: Math.random() * 100, y: Math.random() * 100 },
          ]);
        }}
      >
        Generate circle
      </button>
      {addCircle.length > 0 && <h2>Click on any circle to change color</h2>}
      <div className={styles.content}>
        {addCircle.map((circle, index) => (
          <div
            style={{
              backgroundColor: currentCircle == index ? circleColor : null,
              top: `${circle.y}%`,
              left: `${circle.x}%`,
            }}
            key={circle.id}
            onClick={() => handleCircleColorChange(index)}
            className={styles.circle}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default CircleWithRandomColor;
