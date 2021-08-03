import React from "react";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  return (
    <div className={`modal-overlay show-modal`}>
      <div className="modal-container">
        <h3>showContent</h3>
        <FaTimes></FaTimes>
      </div>
    </div>
  );
};

export default Modal;
