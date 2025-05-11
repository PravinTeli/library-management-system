import React from 'react';

const Button = ({ children, variant = 'primary', onClick }) => {
  const baseStyle = 'px-4 py-2 rounded';
  const variantStyle = variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black';
  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle}`}>
      {children}
    </button>
  );
};

export default Button;