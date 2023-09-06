import { FC } from "react";

import styles from './dropdown.collapsed.module.css'
import { useState } from "react";

interface IDropdown {
    class?: string;
}

const DropDownCollapsedLink: FC<IDropdown> = (props) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return <div className={`${styles.liWrap} ${show ? styles.paddingTopActive : ''}`}>
        <div onClick={handleShow} className={props.class}>
            Каталог
        </div>
        <div className={`${styles.collapsedWrapper} ${show ? styles.show : styles.hide}`}>
            <div className={styles.categoriesWrapper}>
                    <div className={styles.categoriesContainer}>
                        <div className={styles.smCategoreis}>
                            <div className={styles.smCategory}>

                            </div>
                            <div className={styles.smCategory}>

                            </div>
                        </div>
                        <div className={styles.lgCategory}>

                        </div>
                        <div className={styles.boxBlock}>

                        </div> 
                       
                    </div>
            </div>
        </div>
    </div>
}

export default DropDownCollapsedLink;