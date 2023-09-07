import { FC } from "react";
import useScreenSize from "../../../../../utils/use-screen-size";
import Accordion from "react-bootstrap/Accordion";

import styles from './common.data.module.css'
import layout from '../../ordering-screen-layout/ordering.layout.module.css';

import PersonalDataBlock from "../personal-data-block/personal.data.block";
import DeliveryBlock from "../delivery-block/delivery.block";
import PaymentBlock from "../payment-block/payment.block";
import CommentBlock from "../comment-block/comment.block";

interface ICommonBlock {
    activePill: number;
}

const CommonDataBlock: FC<ICommonBlock> = (props) => {
    const screenSize = useScreenSize();

    return <>
        {screenSize.width <= 726 ? 
            <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item className={styles.accordionItem} eventKey="0">
                    <Accordion.Header>Ваши данные</Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                        <PersonalDataBlock />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className={styles.accordionItem} eventKey="1">
                    <Accordion.Header>Адрес и доставка</Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                        <DeliveryBlock />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className={styles.accordionItem} eventKey="2">
                    <Accordion.Header>Оплата</Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                        <PaymentBlock />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className={styles.accordionItem} eventKey="3">
                    <Accordion.Header>Комментарий</Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                        <CommentBlock />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            :
            
            <div className={styles.fullWrapper}>
                <div>
                    <div className={layout.blockHeaderMain}>Ваши данные</div>
                    <PersonalDataBlock />
                </div>
                <div>
                    <div className={layout.blockHeaderMain}>Адрес и доставка</div>
                    <DeliveryBlock />
                </div>
                <div>
                    <div className={layout.blockHeaderMain}>Оплата</div>   
                    <PaymentBlock />
                </div>
                <div>
                    <div className={layout.blockHeaderMain}>Комментарий</div>
                    <CommentBlock />
                </div>
                
            </div>

        }
    </>
}

export default CommonDataBlock;