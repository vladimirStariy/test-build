import { FC } from "react";

import styles from './questions.module.css';
import layout from '../../../layout/layout.module.css'
import TonightButton from "../../../../../UI/Components/button/tonight-button";

const Questions: FC = () => {
    
    return <>
        <div className={styles.questionsBlock}>
            <div className={styles.questionBodyWrapper}>
                <div className={styles.textBlock}>
                    <div className={styles.textHeader}>
                        У вас есть вопросы?
                    </div>
                    <div className={styles.textMain}>
                        Наш сотрудник оперативно свяжется с вами и не только ответит на ваши вопросы, но и поможет с выбором
                    </div>
                </div>
                <div className={styles.buttonBlock}>
                    <TonightButton text="Бесплатная консультация" />
                </div>
            </div>
        </div>
    </>
}

export default Questions;