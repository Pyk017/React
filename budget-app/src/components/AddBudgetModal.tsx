import { Modal, Form, Button } from "react-bootstrap";
import React, { useRef } from "react";
import { useBudgets } from "../contexts/BudgetContext";

const AddBudgetModal = ({ show, handleClose }: any) => {
  const nameRef = useRef<any>();
  const maxRef = useRef<any>();

  const { addBudget }: any = useBudgets() as any;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>Maximum Spending</Form.Label>
            <Form.Control
              type="number"
              min={0}
              step={1}
              ref={maxRef}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default AddBudgetModal;
