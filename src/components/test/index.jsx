import React from "react";
import { useState } from "react";

const Test = (props) => {
  const [opendes, setOpendes] = useState(false);

  const handleDes = () => {
    setOpendes(!opendes);
  };
  return (
    <div>
      <img
        src={props.image}
        alt=""
        style={{ height: "100px", width: "200px" }}
        onClick={handleDes}
      />
      {props.episode}
      {props.movieName}
      {opendes && props.description}
    </div>
  );
};

export default Test;
