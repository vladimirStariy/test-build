import { FC, HTMLAttributes } from "react";

import styles from './data.input.module.css';

interface IInput extends HTMLAttributes<HTMLInputElement> {} 

const DataInput: FC<IInput> = ({...props}) => {
    return <div>
        <input type="text" className={styles.dataInput} {...props}/>
    </div>
}

export default DataInput;