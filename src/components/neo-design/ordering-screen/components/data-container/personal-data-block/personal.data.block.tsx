import { FC } from "react";

import DataInput from "../../../../../../UI/Components/input/data.input";

import styles from './personal.data.module.css'
import latoyt from '../../ordering-screen-layout/ordering.layout.module.css';

const PersonalDataBlock: FC = () => {
    return <div className={styles.personalDataWrapper}>
        <div className={styles.inputGroup}>
            <label className={latoyt.blockHeader}>Имя*</label>
            <DataInput />
        </div>
        <div className={styles.inputGroup}>
            <label className={latoyt.blockHeader}>Фамилия*</label>
            <DataInput />
        </div>
        <div className={styles.inputGroup}>
            <label className={latoyt.blockHeader}>Отчество*</label>
            <DataInput />
        </div>
        <div className={styles.inputGroup}>
            <label className={latoyt.blockHeader}>Номер телефона*</label>
            <DataInput />
        </div>
        <div className={styles.inputGroup}>
            <label className={latoyt.blockHeader}>Email</label>
            <DataInput />
        </div>
    </div>
}

export default PersonalDataBlock;