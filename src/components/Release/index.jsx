import React from "react";

const Release = (props) => {
  return (
    <>
      <img src={props.image} alt={props.title} />
      <div>{props.title}</div>
    </>
  );
};

export default Release;
