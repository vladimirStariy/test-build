import { FC, useState } from "react";

import styles from './delivery.module.css'
import DeliveryPill from "../../delivery-pills/delivery.pill";
import DataInput from "../../../../../../UI/Components/input/data.input";

interface IDelivery {
    
}

const DeliveryBlock: FC<IDelivery> = (props) => {
    const [deliveryPillActive, setDeliveryPillActive] = useState(0);

    const handleActiveDeliveryPill = (value: number) => {
        setDeliveryPillActive(value);
    }

    return <div className={styles.deliveryWrapper}>
        <div className={styles.deliveryPillsWrapper}>
            <DeliveryPill 
                header='Cамовывоз (г.Полоцк, ул.Хруцкого 10)'
                price='Бесплатно'
                active={deliveryPillActive === 0 ? true : false}
                onClick={() => handleActiveDeliveryPill(0)}
            />
            <DeliveryPill 
                header='Autolight Express (курьерская доставка до двери)'
                price='12,00 BYN'
                active={deliveryPillActive === 1 ? true : false}
                onClick={() => handleActiveDeliveryPill(1)}
            />
            <DeliveryPill 
                header='Европочта (доставка до отделения)'
                price='5,00 BYN'
                active={deliveryPillActive === 2 ? true : false}
                onClick={() => handleActiveDeliveryPill(2)}
            />
        </div>
        <div className={styles.deliveryTypeContent}>
            {deliveryPillActive === 1 ? 
                <div className={styles.courierDeliveryDataContainer}>
                    <div className={styles.dataRow}>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Населенный пункт*</label>
                            <DataInput />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Улица, номер дома*</label>
                            <DataInput />
                        </div>
                    </div>
                    <div className={styles.dataRow}>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Квартира/офис*</label>
                            <DataInput />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Домофон</label>
                            <DataInput />
                        </div>
                    </div>
                    <div className={styles.dataRow}>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Подъезд</label>
                            <DataInput />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Этаж</label>
                            <DataInput />
                        </div>
                    </div>
                </div>
            : <></>}
            {deliveryPillActive === 2 ? 
                <div className={styles.europosDataContainer}>
                    Европочта
                </div>
            : <></>}
        </div>
    </div>
}

export default DeliveryBlock;