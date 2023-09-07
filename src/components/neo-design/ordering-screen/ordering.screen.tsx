import { FC, useState } from "react";

import layout from '../layout/layout.module.css';
import styles from './ordering.module.css'
import secLayout from './components/ordering-screen-layout/ordering.layout.module.css'

import CommonDataBlock from "./components/data-container/common-data-block/common.data.block";
import useScreenSize from "../../utils/use-screen-size";
import TonightButton from "../../../UI/Components/button/tonight-button";
import CartItem from "../cart/cart-item/cart.item";

const OrderingScreen: FC = () => {
    const screenSize = useScreenSize();

    const [deliveryType, setDeliveryType] = useState(0);

    return <>
        <div className={styles.portraitImageBlock}>
            <div className={layout.tonightContainer}>
                <div className={layout.breadcrumbContainer}>
                    <div className={layout.breadcrumbLinkText}>
                        Главная / Каталог / Корзина / <br /> Оформление заказа
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
                    <div className={styles.dataWrapper}>
                        <CommonDataBlock activePill={deliveryType} />
                        {screenSize.width <= 726 ? <></> :
                            <TonightButton text='Оформить заказ'/>
                        }
                    </div>
                    <div className={styles.cartWrapper}>
                        <div className={styles.cartOrder}>
                            <div className={secLayout.blockHeaderMain}>Ваш заказ</div>
                            <div className={styles.deleteAll}>Удалить все</div>
                        </div>
                        
                        <div className={styles.cartItems}>
                            <CartItem />
                            <CartItem />
                        </div>

                        <div className={styles.summary}>
                            <div className={styles.orderDelivery}>
                                <div className={styles.orderSum}>
                                    <div>
                                        Сумма заказа
                                    </div>
                                    <div>
                                        99,99 BYN
                                    </div>
                                </div>
                                <div className={styles.deliveryPrice}>
                                    <div>
                                        Доставка
                                    </div>
                                    <div>
                                        Бесплатно
                                    </div>
                                </div>
                            </div>
                            <div className={styles.finalSum}>
                                ИТОГО: 99,99 BYN
                            </div>
                        </div>
                    </div>
                    {screenSize.width <= 726 ?  
                        <TonightButton arrow={false} text='Оформить заказ'/>
                    :
                        <></>
                    }
                </div>
            </div>
        </div>
    </>
}

export default OrderingScreen;