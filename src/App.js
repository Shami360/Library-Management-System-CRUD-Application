import React, { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./App.css";


function App() {
const [books, setBooks] = useState([]);


useEffect(() => {
  const dummyBooks = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "JavaScript Basics", author: "John Doe" },
    { id: 3, title: "React Guide", author: "Facebook" }
  ];

  setBooks(dummyBooks);
}, []);


return (
<div className="container">
<h1>📚 Book Library</h1>
<BookForm books={books} setBooks={setBooks} />
<BookList books={books} setBooks={setBooks} />
</div>
);
}


export default App;