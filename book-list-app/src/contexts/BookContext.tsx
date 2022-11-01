import { createContext, useReducer, useEffect } from "react";
import { v1 } from "uuid";

interface booksType {
  title: string;
  author: string;
  id: string;
}

export interface BookContextState {
  books: booksType[];
  dispatch: React.Dispatch<any>;
}

export const BookContext = createContext<BookContextState | null>(null);

export const ACTIONS = {
  ADD_BOOKS: "add-books",
  REMOVE_BOOKS: "remove-books",
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case ACTIONS.ADD_BOOKS:
      return [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
          id: v1(),
        },
      ];

    case ACTIONS.REMOVE_BOOKS:
      return state.filter(
        (book: { id: string }) => book.id !== action.payload.id
      );

    default:
      return state;
  }
}

const BookListProvider = (props: any) => {
  const [books, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem("BOOKS");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("BOOKS", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookListProvider;
