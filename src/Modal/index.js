import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Modal from "./Modal";
export default function App({
  showCrossBtn = true,
  showBackBtn = true,
  closeOnOverlay = true,
  shouldScroll = true,
  handleCrossBtn,
  handleBackBtn,
}) {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  console.log(showModal);
  function handleClick() {
    console.log("btn");
    setShowModal(true);
  }
  //   useEffect(() => {
  //     if(!shouldScroll) document.body.classList.add("no-book-demo-scroll");
  //     return()=> document.body.classList.remove("no-book-demo-scroll");
  //   }, []);
  return (
    <div>
      <button className={styles.btn} onClick={() => handleClick()}>
        Click button
      </button>
      {showModal && (
        <Modal
          closeOnOverlay
          handleCrossBtn={() => setShowModal(false)}
          handleBackBtn={() => setShowModal(false)}
        >
          <h1>modal</h1>
        </Modal>
      )}
    </div>
  );
}
