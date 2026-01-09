import React, { useState, useEffect, useRef } from "react";


function EditBookForm({ book, books, setBooks, toggleEdit }) {
const [title, setTitle] = useState(book.title);
const [author, setAuthor] = useState(book.author);
const inputRef = useRef();


useEffect(() => {
inputRef.current.focus();
}, []);


const handleUpdate = (e) => {
e.preventDefault();


const updatedBook = { title, author };


fetch(`http://localhost:5000/books/${book.id}`, {
method: "PUT",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(updatedBook),
})
.then((res) => res.json())
.then((data) => {
setBooks(books.map((b) => (b.id === book.id ? data : b)));
toggleEdit();
});
};


return (

    <form className="edit-form" onSubmit={handleUpdate}>
  <input
    ref={inputRef}
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    required
  />
  <input
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
    required
  />
  <button className="btn update" type="submit">Update</button>
  <button className="btn cancel" type="button" onClick={toggleEdit}>
    Cancel
  </button>
</form>


);
}


export default EditBookForm;