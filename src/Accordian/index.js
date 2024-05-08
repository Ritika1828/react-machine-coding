import { func } from "prop-types";
import { useState } from "react";
export function IsMulti({ isMulti, handleClick, currentIndex, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function hanMultiClick() {
    setIsOpen(true);
  }
  return (
    <div onClick={isMulti ? hanMultiClick : handleClick}>
      {isMulti ? (isOpen ? children : null) : children}
    </div>
  );
}
export default function Accordian({
  data = ["I am ritika juneja", "I am frontend developer"],
  isMulti = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  function handleClick(index) {
    setCurrentIndex((prev) => (prev == index ? -1 : index));
    // currentIndex == index ? setIsOpen(true) : setIsOpen(false);
  }
  return (
    <div>
      {data.map((content, index) => (
        <>
          <IsMulti
            key={index}
            isMulti={isMulti}
            handleClick={handleClick}
            currentIndex={currentIndex}
          >
            <div>
              {index}
              {currentIndex == index && <div>{content}</div>}
            </div>
          </IsMulti>
        </>
      ))}
    </div>
  );
}
