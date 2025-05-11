import React, { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/books/")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📚 BookBazaar</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} ({book.genre})
            <br />
            ⭐ {book.rating} | {book.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;