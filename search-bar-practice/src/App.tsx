import { FormEvent, useState, useRef, useMemo } from "react";

function App() {
  const [items, setItems] = useState<any>([]);
  const [query, setQuery] = useState<any>("");
  const inputRef = useRef<any>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const val = inputRef.current?.value;

    if (val === "") return;

    setItems((prevItems: any) => [...prevItems, val]);
    inputRef.current.value = "";
  };

  const filteredItems = useMemo(() => {
    return items.filter((item: any) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  return (
    <div className="App">
      Search:{" "}
      <input
        type="search"
        onChange={(e) => setQuery(e.currentTarget.value)}
        value={query}
      />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <br />
      <h3>Items:</h3>
      <ul>
        {filteredItems.map((item: any, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
