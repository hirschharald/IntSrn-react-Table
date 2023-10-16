import React from "react";
import { Nav } from "react-bootstrap";
import { Search } from "react-bootstrap-table2-toolkit";
import { clearAllFilter } from "../data";
import { ClearButton } from "./ClearButton";

export const Navigation = (props) => {
  const { SearchBar } = Search;
  return (
    <>
      <Nav
        style={{ backgroundColor: "#e62020" }}
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <SearchBar
            {...props.searchProps}
            style={{
              width: "175px",
              height: "25px",
              position: "relative",
              margin: "10px"
            }}
          />
          <ClearButton {...props.searchProps} clearAllFilter={clearAllFilter} />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "#fff" }} eventKey="link-1">
            Neu
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
