import React, { useState, useRef } from "react";
import styles from "./index.module.scss";
function App() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRef = [useRef(), useRef(), useRef(), useRef()];
  function handleOtpChange(index, value, data) {
    if(value >=0 && value<=9) {
        setOtp((prev) => {
            prev[index] = value;
            return [...prev];
          });
          if (index == 3) return;
          if (value != "") {
            inputRef[index + 1].current.focus();
          }
    } else {
        return 
    }
   
  }

  function backSpace(index, event) {
    if ([8, 46].includes(event.keyCode)) {
      if (index == 0 && otp[0] == "") {
        return;
      }
      console.log("otpp", otp);
      if (otp[index] == "") {
        inputRef[index - 1].current.focus();
      }
    }
    if([13].includes(event.keyCode)){
        handleOtpSubmit()
    }
  }

  function handleOtpSubmit() {
    if(otp.join("").length == 4 ) {
        alert(`Your Enter OTP is ${otp.join("")}`)
    } else {
        alert(`Invalid OTP`)
    }
  }

  function handlePaste(e) {
    const values = e.clipboardData.getData("Text");
    const valueArray = values.split("");
    setOtp(valueArray);
    console.log(valueArray.length, "valueArray.length");
    inputRef[valueArray.length - 1].current.focus();
  }

  return (
    <div className={styles.otpBox}>
        <div className={styles.otpBoxText}> Enter otp</div>
     
      <div className={styles["otp-container"]}>
        {otp.map((data, index) => (
          <div className="input" key={index}>
            <input
              className={styles["input-field"]}
              type="text"
              value={data}
              ref={inputRef[index]}
              maxLength={1}
              onChange={(e) => handleOtpChange(index, e.target.value, data)}
              onKeyDown={(event) => backSpace(index, event)}
              onPaste={handlePaste}

            />
          </div>
        ))}
      </div>
      <button onClick={handleOtpSubmit}>Submit</button>

    </div>
  );
}

export default App;
