import React from "react";
import { Button } from "react-bootstrap";
import { clearAllFilter } from "../data";

export const ClearButton = (props) => {
  const handleClick = () => {
    props.onSearch("");
    clearAllFilter();
  };
  return (
    <Button
      variant="primary"
      onClick={handleClick}
      style={{
        fontSize: "10px",
        padding: "2px",
        margin: "10px",
        height: "20px"
      }}
    >
      Clear
    </Button>
  );
};
