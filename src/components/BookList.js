

import React from "react";
import BookItem from "./BookItem";

function BookList({ books, setBooks }) {
  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.length === 0 ? (
          <tr>
            <td colSpan="4" className="no-data">
              No books found
            </td>
          </tr>
        ) : (
          books.map((book, index) => (
            <BookItem
              key={book.id}
              index={index}
              book={book}
              books={books}
              setBooks={setBooks}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

export default BookList;
