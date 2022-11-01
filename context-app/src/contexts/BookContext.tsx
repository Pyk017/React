import { createContext, useState } from "react";

interface booksType {
  title: string;
  id: number;
}

export interface BookListState {
  books: booksType[];
}

export const BookListContext = createContext<BookListState | null>(null);

const BookContextProvider = (props: any) => {
  const [books] = useState([
    { title: "The Alchemist", id: 1 },
    { title: "The House of Dragon", id: 2 },
    { title: "The Song of Ice and Fire", id: 3 },
    { title: "The Dance of Dragon", id: 4 },
  ]);

  return (
    <BookListContext.Provider value={{ books }}>
      {props.children}
    </BookListContext.Provider>
  );
};

export default BookContextProvider;
