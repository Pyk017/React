import { useContext, useState } from "react";
import {
  BookContext,
  BookContextState,
  ACTIONS,
} from "../contexts/BookContext";

const BookForm = () => {
  const { dispatch }: BookContextState = useContext(
    BookContext
  ) as BookContextState;

  const [title, setTitle] = useState("");

  const [author, setAuthor] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // addBook(title, author);
    dispatch({ type: ACTIONS.ADD_BOOKS, payload: { title, author } });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.currentTarget.value)}
        required
      />
      <input type="submit" value={"Add Book"} />
    </form>
  );
};

export default BookForm;
