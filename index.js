import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/App";
import ReactAllComponent from "./src/ReactAllComponent";
import ProgressBar from "./src/ProgressBar";
import Autocomplete from "./src/Autocomplete";
import Error from "./src/Error";
import OTPScreen from "./src/OTPScreen";
import StarContainer from "./src/StarContainer";
import Countdowntimer from "./src/Countdowntimer";
import Autocomplete from "./src/Autocomplete";
import TypingComponent from "./src/TypingComponent";
import Accordian from "./src/Accordian";
import { Counter } from "./src/Counter";
import TabComponent from "./src/TabComponent";
import JobBoard from "./src/JobBoard";
import TransferList from "./src/TransferList";
import HistoryManagement from "./src/HistoryManagement";
import "./index.css";
import { Counter } from "./src/Counter";
import CircleWithRandomColor from "./src/CircleWithRandomColor";
import Pagination from "./src/Pagination";
import TypingComponent from "./src/TypingComponent";
import Tooltip from "./src/ToolTip";
import Modal from "./src/Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("ritiks");
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ReactAllComponent />,
      },
      {
        path: "/progressBar",
        element: <ProgressBar />,
      },
      {
        path: "/countdowntimer",
        element: <Countdowntimer />,
      },
      {
        path: "/otp-screen",
        element: <OTPScreen />,
      },
      {
        path: "/star-container",
        element: <StarContainer />,
      },
      {
        path: "/auto-complete",
        element: <Autocomplete />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/circle-random-color",
        element: <CircleWithRandomColor />,
      },
      {
        path: "/typing",
        element: <TypingComponent />,
      },
      {
        path: "/accordian",
        element: <Accordian />,
      },
      {
        path: "/tab-components",
        element: <TabComponent />,
      },
      {
        path: "/modal",
        element: <Modal />,
      },
      {
        path: "/tooltip",
        element: <Tooltip />,
      },
      {
        path: "/pagination",
        element: <Pagination />,
      },
      {
        path: "/job-board",
        element: <JobBoard />,
      },
      {
        path: "/transfer-list",
        element: <TransferList />,
      },
      {
        path: "/history-management",
        element: <HistoryManagement />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/second-progress-bar",
    element: <StarContainer />,
  },
]);

root.render(<RouterProvider router={appRouter} />);

/* Build a counter with a history of the changes and ability to undo/redo actions.

Undoable Counter Example

Requirements
The counter starts at 0.
The "/2", "-1", "+1", and "x2" buttons apply the respective operations to the current count.
A row is added to the history table, showing the operation, the count before the operation, and the count after.
The "Undo" button undoes the last action and updates the count.
The "Redo" button reapplies the last undone action, if any.
Clicking on the modification buttons should clear any undone actions so they cannot be redone.
The "Reset" button resets the counter to 0 and clears all history. */
