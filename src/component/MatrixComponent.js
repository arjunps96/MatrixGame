import React, { useState } from "react";
import "./css/matrix.min.css";

const MatrixComponent = () => {
  const matrixArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let colorChangeClass = "bg-red";

  const [className, setclassName] = useState("");

  let contents = matrixArray.map((item, index) => (
    <div
      className={className || "item"}
      key={index}
      data-element={item}
      onClick={(e) => changeColorToRed(e)}
    ></div>
  ));
  const changeColorToRed = (e) => {
    const id = e.target.getAttribute("data-element");

    setclassName(`item item-${id}`);
  };

  return (
    <>
      <div className="grid">{contents}</div>
    </>
  );
};

export default MatrixComponent;
