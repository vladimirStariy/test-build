import { FC } from "react";

import layout from '../layout/layout.module.css';
import styles from './profile.module.css'

const ProfileScreen: FC = () => {

    return <>
        <div className={styles.portraitImageBlock}>
            <div className={layout.tonightContainer}>
                <div className={layout.breadcrumbContainer}>
                    <div className={layout.breadcrumbLinkText}>
                        Главная / Мой профиль
                    </div>
                    <div className={layout.breadcrumbHeaderText}>
                        <b>Мой профиль</b>
                    </div>
                </div>
            </div>
        </div>
        <div className={layout.tonightWrapper}>

        </div>
    </>
}

export default ProfileScreen;