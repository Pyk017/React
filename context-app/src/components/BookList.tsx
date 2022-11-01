import { Component, useContext } from "react";
import { ThemeContext, ThemeContextState } from "../contexts/ThemeContext";
import BookContextProvider, { BookListContext } from "../contexts/BookContext";
// interface BookListProps {}

// interface BookListState {}

// class BookList extends Component<BookListProps, BookListState> {
//   static contextType = ThemeContext;

//   render() {
//     const { isLightTheme, light, dark }: ThemeContextState = this
//       .context as ThemeContextState;

//     const theme = isLightTheme ? light : dark;

//     return (
//       <div
//         className="book-list"
//         style={{
//           color: theme.syntax,
//           background: theme.bg,
//         }}
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>The Alchemist</li>
//           <li style={{ background: theme.ui }}>The House of Dragon</li>
//           <li style={{ background: theme.ui }}>The Song of Ice and Fire</li>
//           <li style={{ background: theme.ui }}>The Dance of Dragon</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default BookList;

const BookList = () => {
  const { isLightTheme, light, dark }: any = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;

  const { books }: any = useContext(BookListContext);

  return (
    <div
      style={{ color: theme.syntax, background: theme.bg }}
      className="book-list"
    >
      <ul>
        {books.map((book: any) => (
          <li style={{ background: theme.ui }} key={book.id}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
