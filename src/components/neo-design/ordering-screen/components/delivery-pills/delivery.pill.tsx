import { FC } from "react";

import styles from './delivery.pill.module.css';

interface IDeliveryPill {
    header: string;
    price: string;
    active: boolean;
}

const DeliveryPill: FC<IDeliveryPill> = (props) => {
    return <>
        <div className={`${styles.deliveryPill} ${props.active ? styles.active : styles.default}`}>
            <div className={styles.deliveryPillBody}>
                <div className={styles.deliveryName}>
                    {props.header}
                </div>
                <div className={styles.deliveryPrice}>
                    {props.price}
                </div>
            </div>
        </div>
    </>
}

export default DeliveryPill;