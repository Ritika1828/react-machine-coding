import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { func } from "prop-types";
export default function Modal({
  showCrossBtn = true,
  showBackBtn = true,
  closeOnOverlay = true,
  shouldScroll = false,
  handleCrossBtn,
  handleBackBtn,
  children,
}) {
  const modalRef = useRef(null);
  //   console.log(showModal);
  //   function handleClick() {
  //     console.log("btn");
  //     setShowModal(true);
  //   }
  function handleOverlayClick() {
    handleCrossBtn && handleCrossBtn();
  }
  useEffect(() => {
    if (!shouldScroll) document.body.classList.add("no-book-demo-scroll");
    return () => document.body.classList.remove("no-book-demo-scroll");
  }, []);
  return (
    <div>
      <div
        ref={modalRef}
        onClick={closeOnOverlay ? handleOverlayClick : null}
        className={styles.container}
      >
        <div onClick={(e) => e.stopPropagation()} className={styles.content}>
          <header>
            {showBackBtn && <span onClick={handleBackBtn}>back button</span>}
            {showCrossBtn && <span onClick={handleCrossBtn}>Cross btn</span>}
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}
