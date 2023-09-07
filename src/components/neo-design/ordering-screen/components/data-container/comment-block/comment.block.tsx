import { FC } from "react";

import styles from './comment.module.css';
import layout from '../../ordering-screen-layout/ordering.layout.module.css'
import DataInput from "../../../../../../UI/Components/input/data.input";

const CommentBlock: FC = () => {
    return <div className={styles.commentWrapper}>
        <div className={layout.headerBlock}>Примечание к заказу</div>
        <DataInput bigText />
    </div>
}

export default CommentBlock;