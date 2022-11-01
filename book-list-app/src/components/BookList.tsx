import { useContext } from "react";
import { BookContext, BookContextState } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books }: BookContextState = useContext(
    BookContext
  ) as BookContextState;

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books to read, Time to do something else.</div>
  );
};

export default BookList;
