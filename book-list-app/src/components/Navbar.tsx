import { useContext } from "react";
import { BookContext, BookContextState } from "../contexts/BookContext";

const Navbar = () => {
  const { books }: BookContextState = useContext(
    BookContext
  ) as BookContextState;

  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>Currently you have {books.length} books to get through... </p>
    </div>
  );
};

export default Navbar;
