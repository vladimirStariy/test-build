import { FC, useState } from 'react'

import styles from './volume.pills.module.css';

const VolumePills: FC = () => {
    const [activePill, setActivePill] = useState(0)

    const handleActive = (value: number) => {
        setActivePill(value);
    }

    return <div className={styles.volumePills}>
        <div 
            className={`${activePill === 0 ? styles.active : styles.default} ${styles.volumePill}`}
            onClick={() => handleActive(0)}
        >   
            2 мл
        </div>
        <div 
            className={`${activePill === 1 ? styles.active : styles.default} ${styles.volumePill}`}
            onClick={() => handleActive(1)}
        > 
            5 мл
        </div>
        <div 
            className={`${activePill === 2 ? styles.active : styles.default} ${styles.volumePill}`}
            onClick={() => handleActive(2)}
        > 
            8 мл
        </div>
        <div 
            className={`${activePill === 3 ? styles.active : styles.default} ${styles.volumePill}`}
            onClick={() => handleActive(3)}
        > 
            10 мл
        </div>
        <div 
            className={`${activePill === 4 ? styles.active : styles.default} ${styles.volumePill}`}
            onClick={() => handleActive(4)}
        > 
            15 мл
        </div>
    </div>
}

export default VolumePills;