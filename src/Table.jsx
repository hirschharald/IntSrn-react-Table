import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Navigation } from "./partials";
import { Container } from "react-bootstrap";
import { products, columns } from "./data";
import { Modal } from "./components";

const selectRow = {
  mode: "checkbox",
  clickToSelect: true
};

const Table = () => {
  const [show, setShow] = useState(false);
  const [Row, setRow] = useState({});

  // useEffect(() => console.log("### useEffekt ###"), [show]);
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setRow({ ...row });
      setShow(true);
    }
  };

  const handleClose = (e) => {
    setShow(false);
  };

  const handleSave = (e) => {
    setShow(false);
    console.log("##   Saving .... ###");
  };
  return (
    <Container>
      <div className="h4"> Clear search bar and filter</div>
      <ToolkitProvider keyField="id" data={products} columns={columns} search>
        {(props) => (
          <div>
            <Navigation searchProps={props.searchProps} />
            <BootstrapTable
              {...props.baseProps}
              filter={filterFactory()}
              pagination={paginationFactory()}
              noDataIndication="Keine Daten gefunden"
              striped
              hover
              condensed
              rowEvents={rowEvents}
            />
          </div>
        )}
      </ToolkitProvider>

      <Modal
        show={show}
        handleSave={handleSave}
        handleClose={handleClose}
        fields={Row}
      />
    </Container>
  );
};

export default Table;
