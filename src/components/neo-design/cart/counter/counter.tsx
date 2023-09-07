import { FC, useState } from "react";

import styles from './counter.module.css'

const Counter: FC = () => {
    const [count, setCount] = useState(1);

    const handleCountAdd = () => {
        setCount(count+1);
        console.log(count)
    }

    const handleCountMinus = () => {
        count === 0 ? setCount(0) :
            setCount(count-1)
    }

    return <div className={styles.counter}>
        <div onClick={handleCountMinus} className={styles.counterItem}>
            -
        </div>
        <div className={styles.counterNumber}>
            {count}
        </div>
        <div onClick={handleCountAdd} className={styles.counterItem}>
            +
        </div>
    </div>
}

export default Counter;