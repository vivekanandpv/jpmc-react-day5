import React from 'react';

const Counter = (props) => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((c) => c + 1);

  const decrement = () => setCount((c) => c - 1);

  return (
    <>
      <h4>Counter: {count}</h4>
      <button className='btn btn-primary mt-4 me-3' onClick={increment}>
        Increment
      </button>
      <button className='btn btn-primary mt-4 me-3' onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

export default Counter;
