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
import { Counter } from "./src/Counter";

import "./index.css";
import { Counter } from "./src/Counter";
import CircleWithRandomColor from "./src/CircleWithRandomColor";

const root = ReactDOM.createRoot(document.getElementById("root"));
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
    ],
    errorElement: <Error />,
  },
  {
    path: "/second-progress-bar",
    element: <StarContainer />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
