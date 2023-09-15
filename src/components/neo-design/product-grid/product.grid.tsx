import { FC } from "react";

import styles from "./product.grid.module.css";

import { fakeData } from "../../../fakedatas/productFakeData";
import ProductCard from "./product.card";

interface IProductGrid {
    productType?: string;
}

const ProductGrid: FC<IProductGrid> = props => {
    return <>
        <div className={styles.gridWrapper}>
        {
        props.productType === 'novelty' ? 
            <>
                {fakeData.map((item) => (
                    item.isNovelty ? 
                        <ProductCard key={item.id} {...item}/>
                    : <></>
                ))}
            </>
            :
            (props.productType === 'forOrder' ? 
                <>
                    {fakeData.map((item) => (
                        item.forOrder ? 
                            <ProductCard key={item.id} {...item}/>
                        : <></>
                    ))}
                </>
                :
                <>
                    {fakeData.map((item) => (
                        <ProductCard key={item.id} {...item}/>
                    ))}
                </>)
        }
        </div>
    </>
}

export default ProductGrid;