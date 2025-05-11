import React from 'react';
import Button from '../components/Button';

const BorrowConfirmation = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Borrow Confirmation</h2>
      <p>Thank you for borrowing the book! Your due date is May 25, 2025.</p>
      <Button className="mt-4">Back to Home</Button>
    </div>
  );
};

export default BorrowConfirmation;