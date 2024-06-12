import React from 'react';

import * as styles from './Counter.module.scss';

export const Counter = () => {
    console.log(styles)
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
            <button className={styles.btn} onClick={increment}>increment</button>
            <button className={styles.clearBtn} onClick={clear}>CLEAR</button>
        </div>
    );
};

