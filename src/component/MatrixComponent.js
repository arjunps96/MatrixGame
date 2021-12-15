import React from "react";
import "./css/matrix.min.css";

const MatrixComponent = () => {
  const matrixArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let colorChangeClass;

  const changeColorToRed = (item) => {
    colorChangeClass = `.item-${item}`;
    console.log(colorChangeClass);
  };

  return (
    <>
      <div className="grid">
        {matrixArray.map((item, index) => (
          <div
            className={colorChangeClass || "item"}
            key={index}
            id={index}
            onClick={changeColorToRed.bind(this, item)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default MatrixComponent;
