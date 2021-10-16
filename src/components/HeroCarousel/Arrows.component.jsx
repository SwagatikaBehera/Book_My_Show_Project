import React from "react";

export const NextArrow = (props) => {
  // ClassName, Styles, onclick
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "black",
          opacity: 0.3,
          width: "65px",
          height: "50px",
          padding: "15px 25px",
          borderRadius: " 7px 7px ",
        }}
        onClick={props.onClick}
      />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "black",
          opacity: 0.3,
          width: "65px",
          height: "50px",
          padding: "15px 25px",
          borderRadius: " 7px 7px ",
        }}
        onClick={props.onClick}
      />
    </>
  );
};

export const NextArrowSm = (props) => {
  // ClassName, Styles, onclick
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "black",
          opacity: 0.3,
          width: "25px",
          height: "30px",
          padding: "10px 30px 25px 10px",
          borderRadius: " 7px 7px ",
        }}
        onClick={props.onClick}
      />
    </>
  );
};

export const PrevArrowSm = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "black",
          opacity: 0.3,
          width: "25px",
          height: "30px",
          padding: "10px 30px 25px 10px",
          borderRadius: " 7px 7px ",
        }}
        onClick={props.onClick}
      />
    </>
  );
};
