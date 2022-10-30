import { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TOODS: "add",
  TOGGLE_TODO: "toggle",
  DELETE_TODO: "delete",
};

function reducer(todos: any, action: any) {
  switch (action.type) {
    case ACTIONS.ADD_TOODS:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo: any) => {
        if (todo.id === action.payload.id) {
          todo = { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo: any) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name: string) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
}

const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TOODS, payload: { name: name } });
    setName("");
  };

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="m-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos?.map((todo: any) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
};

export default Todos;
