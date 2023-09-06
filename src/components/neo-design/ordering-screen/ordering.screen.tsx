import { FC, useState } from "react";

import layout from '../layout/layout.module.css';
import styles from './ordering.module.css'
import DataInput from "../../../UI/Components/input/data.input";
import DeliveryPill from "./components/delivery-pills/delivery.pill";

const OrderingScreen: FC = () => {
    const [deliveryPillActive, setDeliveryPillActive] = useState(0);

    const handleActiveDeliveryPill = (value: number) => {
        setDeliveryPillActive(value);
    }

    return <>
        <div className={styles.portraitImageBlock}>
            <div className={layout.tonightContainer}>
                <div className={layout.breadcrumbContainer}>
                    <div className={layout.breadcrumbLinkText}>
                        Главная / Каталог / Оформление заказа
                    </div>
                    <div className={layout.breadcrumbHeaderText}>
                        <b>Оформление заказа</b>
                    </div>
                </div>
            </div>
        </div>
        <div className={layout.tonightWrapper}>
            <div className={layout.tonightContainer}>
                <div className={styles.orderingWrapper}>
                    <div className={styles.orderingDataContainer}>
                        <div className={styles.dataBlock}>
                            <div className={layout.cardLabel}>Ваши данные</div>
                            <div className={styles.dataWrapper}>
                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>Имя*</label>
                                    <DataInput />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>Фамилия*</label>
                                    <DataInput />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>Отчество*</label>
                                    <DataInput />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>Номер телефона*</label>
                                    <DataInput />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>Email</label>
                                    <DataInput />
                                </div>
                            </div>
                        </div>
                        <div className={styles.deliveryBlock}>
                            <div className={layout.cardLabel}>Адрес и доставка</div>
                            <label className={styles.inputLabel}>Выберите способ доставки*</label>
                            <div className={styles.deliveryPillsWrapper}>
                                <DeliveryPill 
                                    header='Cамовывоз (г.Полоцк, ул.Хруцкого 10)'
                                    price='Бесплатно'
                                    active={true} 
                                />
                                <DeliveryPill 
                                    header='Autolight Express (курьерская доставка до двери)'
                                    price='12,00 BYN'
                                    active={false} 
                                />
                                <DeliveryPill 
                                    header='Европочта (доставка до отделения)'
                                    price='5,00 BYN'
                                    active={false} 
                                />
                            </div>
                        </div>
                        <div className={styles.paymentBlock}>
                            <div className={layout.cardLabel}>Оплата</div>
                            <div className={styles.deliveryPaymentWrapper}>

                            </div>
                        </div>
                    </div>
                    <div className={styles.orderingCartContainer}>
                        <div className={layout.cardLabel}>Ваш заказ</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default OrderingScreen;