import { Modal, Form, Button } from "react-bootstrap";
import React, { useRef } from "react";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetContext";

const AddExpenseModal = ({ show, handleClose, defaultBudgetId }: any) => {
  const descriptionRef = useRef<any>();
  const amountRef = useRef<any>();
  const budgetIdRef = useRef<any>();

  const { addExpenses, budgets }: any = useBudgets() as any;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addExpenses({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
    });

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expenses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              ref={descriptionRef}
              type="text"
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              ref={amountRef}
              min={0}
              step={1}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="budgetId">
            <Form.Label>Budget</Form.Label>
            <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
              <option
                value={UNCATEGORIZED_BUDGET_ID}
                id={UNCATEGORIZED_BUDGET_ID}
              >
                Uncategorized
              </option>
              {budgets.map((budget: any) => {
                return (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default AddExpenseModal;
