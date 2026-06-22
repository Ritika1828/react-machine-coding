import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import Card from "./Card";
import { Link } from "react-router-dom";

const componentList = [
  {
    name: "CountDown Timer",
    path: "/countdowntimer",
    status: "completed",
  },
  {
    name: "Star Container",
    path: "/star-container",
    status: "completed",
  },
  {
    name: "OTP Screen",
    path: "/otp-screen",
    status: "completed",
  },
  {
    name: "Progress Bar",
    path: "/progressBar",
    status: "pending",
  },
  {
    name: "Auto Complete",
    path: "/auto-complete",
    status: "completed",
  },

  {
    name: "Counter",
    path: "/counter",
    status: "completed",
  },
  {
    name: "Circle with Random Color",
    path: "/circle-random-color",
    status: "completed",
  },
  {
    name: "Typing",
    path: "/typing",
    status: "completed",
  },
  {
    name: "Accordian",
    path: "/accordian",
    status: "completed",
  },
  {
    name: "TabComponents",
    path: "/tab-components",
    status: "completed",
  },
  {
    name: "Pagination",
    path: "/pagination",
    status: "completed",
  },
  {
    name: "Job board",
    path: "/job-board",
    status: "completed",
  },
  {
    name: "Transfer list",
    path: "/transfer-list",
    status: "completed",
  },
  {
    name: "History Management",
    path: "/history-management",
    status: "pending",
  },
  {
    name: "Like Unlike",
    path: "/like-unlike",
    status: "pending",
  },
  {
    name: "User Database",
    path: "/user-database",
    status: "pending",
  },
];

function ReactAllComponent(props) {
  return (
    <div className={styles.compBox}>
      {componentList.map((item, index) => {
        return (
          <Link to={item.path} key={index}>
            <Card key={index} {...item} />
          </Link>
        );
      })}
    </div>
  );
}

ReactAllComponent.propTypes = {};

export default ReactAllComponent;

/* Requirements
Players can take turns to place an X or an O on the board.
A player wins if three of their marks are in a horizontal, vertical, or diagonal row.
Display the current game status at the top: whose turn it is, winner (if any), or draw.
Add a "Reset" button to allow the game to be restarted at any time.*/
