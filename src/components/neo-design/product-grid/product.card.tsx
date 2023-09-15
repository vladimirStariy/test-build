import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./product.card.module.css";

import { IProduct } from "../../../models/IProduct";

const ProductCard: FC<IProduct> = props => {
    return <Link to='/'>
        <div className={styles.productCard}>
            <div className={styles.productCardImgBlock}>
                <div className={props.discount ? styles.productCardFavoriteDiscount : styles.productCardFavorite}>
                    {props.discount ? 
                        <div className={styles.discountLabel}>-{props.discountValue}%</div>
                        :
                        <></>
                    }
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0069 22L2.67077 12.7878C-2.40323 7.26048 5.05554 -3.35197 12.0069 5.2338C18.9583 -3.35197 26.3832 7.29733 21.3431 12.7878L12.0069 22Z" 
                              stroke="#D0BEE5" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div className={styles.productCardDetails}>
                <div className={styles.brandName}>
                    <div className={styles.productCardBrand}>
                        <Link to=''>{props.brand}</Link>
                    </div>
                    <div className={styles.productCardName}>
                        <Link to=''>{props.name}</Link>
                    </div>
                </div>
                <div className={styles.productCardPrice}>
                    {props.discount ? 
                        <>
                            <div className={styles.crossedPrice}>
                                <div className={styles.nonDiscountPrice}>от {props.price} BYN</div>
                                <div className={styles.discountPrice}>от {props.price - (props.price / 100) * (props.discountValue !== undefined ? props.discountValue : 0)} BYN</div>
                            </div>
                        </>
                    :
                        <>от {props.price} BYN</>
                    }
                    
                </div>
            </div>
        </div>
    </Link>
}

export default ProductCard;