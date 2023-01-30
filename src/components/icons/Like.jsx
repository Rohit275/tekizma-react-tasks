import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";

const Like = ({ onClick, liked, size }) => {
  return (
    <FontAwesomeIcon
      icon={liked ? heartSolid : heartRegular}
      size={size}
      color={liked ? "red" : "white"}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
};
export default Like;
