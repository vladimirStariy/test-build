import { FC, HTMLAttributes } from "react";

import styles from './data.input.module.css';

interface IInput extends HTMLAttributes<HTMLInputElement> {
    bigText?: boolean;
} 

const DataInput: FC<IInput> = ({...props}) => {
    return <div>
        {props.bigText ? 
            <textarea className={styles.textArea}/>
        :
            <input type="text" className={styles.dataInput} {...props}/>
        }
        
    </div>
}

export default DataInput;