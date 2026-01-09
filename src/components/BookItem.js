


import React, { useState } from "react";
import EditBookForm from "./EditBookForm";

function BookItem({ book, books, setBooks, index }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    fetch(`http://localhost:5000/books/${book.id}`, {
      method: "DELETE",
    }).then(() =>
      setBooks(books.filter((b) => b.id !== book.id))
    );
  };

  return (
    <>
      {isEditing ? (
        <tr>
          <td colSpan="4">
            <EditBookForm
              book={book}
              books={books}
              setBooks={setBooks}
              toggleEdit={() => setIsEditing(false)}
            />
          </td>
        </tr>
      ) : (
        <tr>
          <td>{index + 1}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>
            <button className="btn edit" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
          </td>
        </tr>
      )}
    </>
  );
}

export default BookItem;
