import { ACTIONS } from "./Todos";

const Todo = ({ todo, dispatch }: any) => {
  return (
    <div className="container">
      <span
        className="my-2"
        style={{
          color: todo.complete ? "#AAA" : "#000",
        }}
      >
        {todo.name}
      </span>
      <button
        className="btn btn-primary mx-2 my-2"
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        className="btn btn-secondary mx-2 my-2"
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
