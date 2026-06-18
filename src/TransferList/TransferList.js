import React from "react";
import { useEffect, useState } from "react";

function TransferList({ value, onChange, titles }) {
  const [checked, setChecked] = useState(new Set());
  const [left, setLeft] = useState(value[0]);
  const [right, setRight] = useState(value[1]);

  function handleChange(e) {
    const value = e.target.value;
    setChecked((prev) => {
      let newSet = new Set(prev);
      newSet.add(value);
      return newSet;
    });
  }

  console.log("ritiks");
  function handleTransfer(direction) {
    let list = direction === "left" ? right : left;
    let removeItems = list.filter((item) => !checked.has(item.value));
    let items = list.filter((item) => {
      let itemToMove = checked.has(item.value);
      checked.delete(item.value);
      return itemToMove;
    });

    if (direction === "right") {
      setRight((prev) => {
        return [...prev, ...items];
      });
      setLeft(removeItems);
    } else {
      setLeft((prev) => {
        return [...prev, ...items];
      });
      setRight(removeItems);
    }
  }

  function handleAllTransfer(direction) {
    let list = direction === "left" ? right : left;
    if (direction === "right") {
      setRight((prev) => {
        return [...prev, ...list];
      });
      setLeft([]);
    } else {
      setLeft((prev) => {
        return [...prev, ...list];
      });
      setRight([]);
    }
  }

  useEffect(() => {
    const arr = [[...left], [...right]];
    onChange(arr);
  }, [left, right]);

  return (
    <div style={{ backgroundColor: "#faebd7", display: "flex" }}>
      <div>
        <h3>{titles[0]}</h3>
        <div>
          {left.map((item) => (
            <div>
              <input
                type="checkbox"
                value={item?.value}
                checked={checked.has(item?.value)}
                onChange={handleChange}
              />
              <label>{item?.label}</label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={() => handleTransfer("right")}>{">"}</button>
        <button onClick={() => handleAllTransfer("right")}>{">>"}</button>
        <button onClick={() => handleTransfer("left")}>{"<"}</button>
        <button onClick={() => handleAllTransfer("left")}>{"<<"}</button>
      </div>
      <div>
        <h3>{titles[1]}</h3>
        <div>
          {right.map((item) => (
            <div>
              <input
                type="checkbox"
                value={item?.value}
                checked={checked.has(item?.value)}
                onChange={handleChange}
              />
              <label>{item?.label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TransferList;
