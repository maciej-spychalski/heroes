// import React, { useState } from 'react';
import { useState } from 'react';
import './Counter.css'

function Counter({ size }) {
  const [counter, setCounter] = useState(0);


  let btnClass = 'btn';
  let btnClassSecondary = 'btn btn--secondary'

  if (size === 5) {
    btnClass += ' btn--medium';
    btnClassSecondary += ' btn--medium';
  } else if (size === 10) {
    btnClass += ' btn--large';
    btnClassSecondary += ' btn--large';
  }

  const changeCounterValue = type => {
    console.log(type);
    if (type === 'increment') {
      setCounter(counter +1)
    } else if (type === 'decrement') {
      setCounter(counter -1);
    }
    console.log('counter', counter);
  }


  return (
    <div>
      <button onClick={() => changeCounterValue('decrement')} className={btnClassSecondary}>-</button>
      <span>{counter}</span>
      <button onClick={() => changeCounterValue('increment')} className={btnClass}>+</button>
    </div>
  );

  
}

export default Counter;
