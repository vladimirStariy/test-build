import { FC, useState } from "react";


import styles from './payment.module.css';
import PaymentPill from "../../payment-pills/payment.pill";

const PaymentBlock: FC = () => {
    const [paymentPillActive, setPaymentPillActive] = useState(0);

    const handleActivePaymentPill = (value: number) => {
        setPaymentPillActive(value);
    }

    return <div className={styles.paymentWrapper}>
        <PaymentPill 
            header='Наличными'
            onClick={() => handleActivePaymentPill(0)}
            active={paymentPillActive === 0 ? true : false}
        />
        <PaymentPill 
            header='Картой'
            onClick={() => handleActivePaymentPill(1)}
            active={paymentPillActive === 1 ? true : false}
        />
    </div>
}

export default PaymentBlock;