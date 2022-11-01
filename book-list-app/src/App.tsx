import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import BookListProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <BookListProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookListProvider>
    </div>
  );
}

export default App;
