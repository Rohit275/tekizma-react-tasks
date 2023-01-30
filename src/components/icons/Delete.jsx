import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan as trashCan } from "@fortawesome/free-regular-svg-icons";

export default function Delete({ size, onClick }) {
  return (
    <FontAwesomeIcon
      icon={trashCan}
      size={size}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
}
