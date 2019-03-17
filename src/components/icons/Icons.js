import React from 'react';

const Icons = ({ size, color, children }) => (
  <svg
    style={{ marginRight: '1.5em' }}
    fill={color}
    height={size}
    width={size}
    viewBox="0 0 192 192"
    className="profile--ico"
  >
    {children}
  </svg>
);

export default Icons;
