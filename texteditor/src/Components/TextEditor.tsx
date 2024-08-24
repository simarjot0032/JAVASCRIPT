import React from "react";

export default function TextEditor() {
  let editor = document.querySelector(".text-input");
  let selction = window.getSelection();
  console.log(selction);
  return (
    <>
      <div className="text-editor-container">
        <div
          className="text-input"
          contentEditable="true"
          style={{ width: "500px", height: "500px" }}
        ></div>
      </div>
    </>
  );
}
