import React from 'react';

import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const clear = () => {
        setCount(0);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={clear}>CLEAR</button>
        </div>
    );
};

