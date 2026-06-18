import React from "react";
import { useEffect, useState } from "react";

function HistoryManagement() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState([]);

  const operations = {
    "/2": function (val) {
      return val / 2;
    },
    "*2": function (val) {
      return val * 2;
    },
    "+1": function (val) {
      return val + 1;
    },
    "-1": function (val) {
      return val - 1;
    },
  };

  function handleUndoClick() {
    setCurrentIndex((prev) => prev - 1);
    // let newValue = history[history.length - 1].newValue;
    // let oldValue = history[history.length - 1].oldValue;
    // setCurrentValue(oldValue);
    // setHistory((history) => {
    //   setRedo((prev) => [...prev, history[history.length - 1]]);
    //   return history.length == 1 ? [] : history.slice(0, -1);
    // });
  }

  function handleRedoClick() {
    setCurrentIndex((prev) => Math.min(history.length, prev + 1));
    // setCurrentValue(redo[redo.length - 1].newValue);

    // setHistory((prev) => [...prev, redo[redo.length - 1]]);

    // setRedo((prev) => prev.slice(0, -1));
  }

  function handleReset() {
    setHistory([]);
    setCurrentIndex(0);
  }

  function handleClick(op) {
    setCurrentIndex((prev) => {
      let newValue = operations[op](prev);

      setHistory((val) => {
        let currentHistory = val.slice(0, prev);
        return [
          ...currentHistory,
          {
            operation: op,
            oldValue: prev,
            newValue,
          },
        ];
      });
      return prev + 1;
    });

    // setCurrentValue((prev) => {
    //   // let newValue = prev / 2;
    //   console.log("operat", operations[op]);
    //   let newValue = operations[op](prev);

    //   setHistory((val) => {
    //     return [
    //       ...val,
    //       {
    //         operation: op,
    //         oldValue: prev,
    //         newValue,
    //       },
    //     ];
    //   });

    //   return newValue;
    // });
  }

  console.log("history", currentIndex);
  return (
    <div className="App">
      <button onClick={handleUndoClick} disabled={history.length <= 0}>
        Undo
      </button>
      <button
        disabled={history.length === currentIndex}
        onClick={handleRedoClick}
      >
        Redo
      </button>
      <button onClick={handleReset}>Reset</button>

      <div>
        <button onClick={() => handleClick("/2")}>/2</button>
        <button onClick={() => handleClick("-1")}>-1</button>

        <span>{history[currentIndex - 1]?.newValue}</span>

        <button onClick={() => handleClick("+1")}>+1</button>
        <button onClick={() => handleClick("*2")}>*2</button>
      </div>

      <table>
        <thead>
          <tr style={{ display: "flex", gap: "100px" }}>
            <th>Op</th>
            <th>old</th>
            <th>New</th>
          </tr>
        </thead>

        <tbody>
          {history.slice(0, currentIndex).map((item, index) => (
            <tr style={{ display: "flex", gap: "120px" }} key={index}>
              <td>{item.operation}</td>
              <td>{item.oldValue}</td>
              <td>{item.newValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryManagement;
