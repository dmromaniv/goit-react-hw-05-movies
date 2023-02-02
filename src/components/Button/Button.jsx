import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ path }) => {
  return (
    <button>
      <Link to={path}>Go back</Link>
    </button>
  );
};

export default Button;
