import React from 'react';

const Button = ({ children, size, backGroundColor, color, onClick, disabled = false }) => {
  return (
    <button
      className={`
        bg-${backGroundColor} text-${color} rounded-lg px-4 py-2 font-semibold
        ${size === 'sm' && 'px-3 py-1.5 text-sm'}
        ${size === 'lg' && 'px-6 py-3'}
        shadow-sm hover:shadow-md hover:opacity-95 active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200 ease-in-out
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
