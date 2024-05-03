import { useState } from "react";
import cx from 'classnames'
import styles from "./index.module.scss";

function App() {
  const [activeStar, setActiveStar] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const handleStarClick = (index) => {
    setActiveStar(index + 1);
  };
  const handleStarHover = (index) => {
    setHoveredStar(index + 1);
  };

  const handleStarLeave = () => {
    setHoveredStar(0);
  };
  return (
    <>
        <div className={styles.starText}>
            Star Container
        </div>
      <div className={styles["star-container"]}>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div
            key={index}
            onClick={() => handleStarClick(index)}
            onMouseOver={() => handleStarHover(index)}
            onMouseLeave={handleStarLeave}
            // className={`star ${index < activeStar ? "active" : ""} ${
            //   index < hoveredStar ? "hovered" : ""
            // }`}
            className={cx(styles.star, { [styles.active]: index < activeStar, [styles.hovered]: index < hoveredStar })}
          >
            {" "}
            &#9733;
          </div>
        ))}
        
      </div>
      <div className={styles.starText}>{`Rating : ${activeStar}`}</div>
    </>
  );
}

export default App;
