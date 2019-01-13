import React from "react";
import ReactDOM from "react-dom";

const JSX_MODAL =  (
  <div>  
      Modal map goes here
  </div>
);


function Modal(props) {
  return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"));
}


export default Modal;