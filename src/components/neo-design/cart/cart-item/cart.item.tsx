import { FC } from "react";

import styles from './cart.item.module.css'
import VolumePills from "../../volume-pills/volume.pills";
import Counter from "../counter/counter";

const CartItem: FC = () => {
    return <div className={styles.cartItem}>
        <div className={styles.cartContent}>
            <div className={styles.imgBlock}></div>
            <div className={styles.mainContent}>
                <div className={styles.upperBlock}>
                    <div className={styles.brandName}>
                        <div className={styles.brand}>
                            BYREDO
                        </div>
                        <div className={styles.name}>
                            BLANCHE
                        </div>
                    </div>
                    <div className={styles.priceCounter}>
                        <div className={styles.price}>
                            66,40 BYN 
                        </div>
                        <div className={styles.counter}>
                            <Counter />
                        </div>
                    </div>
                </div>
                <div className={styles.volumePills}>
                    <VolumePills />
                </div>
            </div>
        </div>
        <div className={styles.deleteBtn}>
            
        </div>
    </div>
}

export default CartItem;