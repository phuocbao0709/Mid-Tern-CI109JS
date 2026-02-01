import React from "react";
import { useState } from "react";

const NewRelease = (props) => {
  return (
    <div className="flex flex-col justify-center items-center mt-3">
      <img src={props.image} alt="" />
      <p>{props.episode}</p>
      <p> {props.movieName}</p>
    </div>
  );
};

export default NewRelease;
