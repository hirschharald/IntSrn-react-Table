import React from "react";
import { Modal } from "react-bootstrap";
import { Form } from "./Form";

export const CustModal = (props) => {
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target);
    props.handleClose();
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Datensatz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit} fields={props.fields} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
