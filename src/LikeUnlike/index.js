import React from "react";

import { useEffect, useState } from "react";
import styles from "./index.module.scss";

function LikeUnlike(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState("");
  console.log("isLoading", isLoading, isLiked);

  async function updateLikeData() {
    const url = "https://questions.greatfrontend.com/api/questions/like-button";
    setIsLoading(true);
    setHovered(false);
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("ok");
        }, 2000);
      });
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: isLiked ? "unlike" : "like",
        }),
      });
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      setIsLiked((prev) => !prev);
    } catch (err) {
      setError("something went wrong in catch");
    } finally {
      setIsLoading(false);
    }
  }

  const getUpdatedColor = {
    getColor: function () {
      if (hovered) {
        console.log("hovere");
        return "red";
      } else if (isLiked) {
        console.log("liked");
        return "white";
      } else {
        console.log("else colofr");
        return "grey";
      }
    },
    getBackgroundColor: function () {
      if (hovered) {
        return "white";
      } else if (isLiked) {
        return "red";
      } else {
        return "white";
      }
    },
    getBorderColor: function () {
      if (hovered) {
        return "2px solid red";
      } else if (isLiked) {
        return "2px solid red";
      } else {
        return "2px solid grey";
      }
    },
  };

  return (
    <div style={{ backgroundColor: "#faebd7" }}>
      <button
        onClick={updateLikeData}
        disabled={isLoading}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: getUpdatedColor.getBackgroundColor(),
          border: getUpdatedColor.getBorderColor(),
        }}
      >
        {!isLoading ? (
          <span
            style={{
              color: getUpdatedColor.getColor(),
            }}
          >
            {isLiked ? "♥" : "♡"}
          </span>
        ) : (
          <span className={styles.spinner}></span>
        )}
        <span
          style={{
            // backgroundColor: isLiked ? "red" : "white",
            color: getUpdatedColor.getColor(),
          }}
        >
          Like
        </span>
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LikeUnlike;
