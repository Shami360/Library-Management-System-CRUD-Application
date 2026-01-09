import React, { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./App.css";


function App() {
const [books, setBooks] = useState([]);


useEffect(() => {
fetch("http://localhost:5000/books")
.then((res) => res.json())
.then((data) => setBooks(data));
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