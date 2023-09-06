import { FC } from "react";

import styles from './dropdown.module.css'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

interface IDropdown {
    handleExpand?: () => void;
    class?: string;
}

const DropDownLink: FC<IDropdown> = (props) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
        console.log(show);
    }

    const handleHide = () => {
        setShow(false);
        console.log(show);
    }

    return <div onMouseOver={handleShow} onMouseOut={handleHide}>
        <Nav.Link 
            onClick={handleHide} 

            to="/catalogue" as={NavLink} className={props.class}>
            Каталог
        </Nav.Link>

        <div className={`${styles.absoluteTest} ${show ? styles.show : styles.hide}`}>
            <div className={styles.categoriesWrapper}>
                    <div className={styles.categoriesContainer}>
                        <div className={styles.categoriesBlock}>
                            <div className={styles.smCategoreis}>
                                <div className={styles.smCategory}>

                                </div>
                                <div className={styles.smCategory}>

                                </div>
                            </div>
                            <div className={styles.lgCategory}>

                            </div>
                        </div>  
                        <div className={styles.boxBlock}>

                        </div>
                    </div>
            </div>
        </div>
    </div>
}

export default DropDownLink;