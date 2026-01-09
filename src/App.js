// import React, { useEffect, useState } from "react";
// import BookForm from "./components/BookForm";
// import BookList from "./components/BookList";
// import "./App.css";


// function App() {
// const [books, setBooks] = useState([]);


// useEffect(() => {
//   const dummyBooks = [
//     { id: 1, title: "Clean Code", author: "Robert C. Martin" },
//     { id: 2, title: "JavaScript Basics", author: "John Doe" },
//     { id: 3, title: "React Guide", author: "Facebook" }
//   ];

//   setBooks(dummyBooks);
// }, []);


// return (
// <div className="container">
// <h1>📚 Book Library</h1>
// <BookForm books={books} setBooks={setBooks} />
// <BookList books={books} setBooks={setBooks} />
// </div>
// );
// }


// export default App;

import React, { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  // 1️⃣ Load data (page load / refresh)
  useEffect(() => {
    const savedBooks = localStorage.getItem("books");

    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    } else {
      const dummyBooks = [
        { id: 1, title: "M EHTISHAM", author: "BSE-23S-028" },
        { id: 2, title: "M FAISAL", author: "BSE-23S-027" },
        { id: 3, title: "M JAMEE", author: "BSE-23S-056" }
      ];
      setBooks(dummyBooks);
      localStorage.setItem("books", JSON.stringify(dummyBooks));
    }
  }, []);

  // 2️⃣ Save data (jab bhi books change ho)
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="container">
      <h1>📚 Book Library</h1>
      <BookForm books={books} setBooks={setBooks} />
      <BookList books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
