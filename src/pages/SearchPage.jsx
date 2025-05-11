import React, { useState } from 'react';
import Button from '../components/Button';
import TextField from '../components/TextField';
import { books } from '../data/books';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); // Simulate loading
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Search Books</h2>
      <div className="flex mb-4">
        <TextField
          placeholder="Search by title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>🔍</Button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBooks.map(book => (
            <div key={book.id} className="p-4 border rounded">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <Button>View Details</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;