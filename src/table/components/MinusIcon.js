import React from 'react';

export default ({ onClick = () => {} }) => (
  <span onClick={onClick} style={{ cursor: 'pointer' }}>
    <svg
      id="Minus"
      x={0}
      y={0}
      viewBox="0 0 52 52"
      style={{ enableBackground: 'new 0 0 52 52' }}
    >
      <g>
        <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26
      S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z" />
        <path d="M39,25H13c-0.552,0-1,0.447-1,1s0.448,1,1,1h26c0.552,0,1-0.447,1-1S39.552,25,39,25z" />
      </g>
    </svg>
  </span>
);
