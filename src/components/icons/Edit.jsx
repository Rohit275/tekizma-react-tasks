import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare as editRegular } from "@fortawesome/free-regular-svg-icons";

const Edit = ({ size, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={editRegular}
      size={size}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Edit;
