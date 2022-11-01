import { useContext } from "react";
import {
  BookContext,
  BookContextState,
  ACTIONS,
} from "../contexts/BookContext";

const BookDetails = ({ book }: any) => {
  const { dispatch }: BookContextState = useContext(
    BookContext
  ) as BookContextState;

  return (
    <li
      onClick={() =>
        dispatch({ type: ACTIONS.REMOVE_BOOKS, payload: { id: book.id } })
      }
    >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
