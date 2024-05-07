import { useState, useEffect } from "react";
function waitLetter(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("start");
    }, delay);
  });
}
function TypingComponent({
  words = ["I am ritika juneja", "I am frontend developer"],
}) {
  const [displayText, setDisplayText] = useState("");

  async function backward(index) {
    let word = words[index];
    const wordArray = word.split("");
    // wordArray.forEach(async (str) => {
    //   setDisplayText((prev) => prev + str);
    //   await new Promise((resolve, reject)=> setTimeout(()=> resolve(''),200))
    // });
    for (let i = wordArray.length; i >= 0; i--) {
      setDisplayText((prev) => prev.slice(0, i));
      //   await new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       resolve("start");
      //     }, 200);
      //   });
      await waitLetter(200);
    }
    if (index == words.length - 1) start(0);
    else {
      start(index + 1);
    }
  }
  async function start(index) {
    let word = words[index];
    const wordArray = word.split("");
    // wordArray.forEach(async (str) => {
    //   setDisplayText((prev) => prev + str);
    //   await new Promise((resolve, reject)=> setTimeout(()=> resolve(''),200))
    // });
    console.log("array", wordArray);
    for (let i = 0; i < wordArray.length; i++) {
      setDisplayText((prev) => prev + wordArray[i]);
      //   await new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       resolve("start");
      //     }, 200);
      //   });
      await waitLetter(200);
    }
    backward(index);
  }

  useEffect(() => {
    start(0);
  }, []);
  return (
    <>
      {displayText}
      <div>jbmdfk</div>
    </>
  );
}
export default TypingComponent;
