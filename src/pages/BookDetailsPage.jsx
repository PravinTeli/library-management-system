import React from 'react';
import Button from '../components/Button';

const BookDetailsPage = () => {
  return (
    <div className="p-6">
      <a href="/search" className="text-blue-500 mb-4 block">&lt; Back to Search</a>
      <div className="flex gap-4">
        <div className="w-1/3">
          <div className="bg-gray-200 h-48 w-full flex items-center justify-center">
            [Book Image]
          </div>
        </div>
        <div className="w-2/3">
          <h2 className="text-2xl mb-2">Book One</h2>
          <p>Author: Author One</p>
          <p>Year: 2023</p>
          <p>ISBN: 123456789</p>
          <p className="mt-4">Description: Lorem ipsum dolor sit amet...</p>
          <Button className="mt-4">Borrow Now</Button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;