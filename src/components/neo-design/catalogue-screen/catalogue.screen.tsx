import { FC } from "react";

import layout from '../layout/layout.module.css';
import styles from './catalogue.screen.module.css'
import useScreenSize from "../../utils/use-screen-size";
import CatalogueHeader from "./Components/catalogue-header/catalogue.header";
import ProductFilter from "../catalogue-screen/Components/filter/filter";
import CatalogueProducts from "./Components/products/catalogue.products";
import ProductGrid from "../product-grid/product.grid";
import { Link } from "react-router-dom";

const CatalogueScreen: FC = () => {
    const screenSize = useScreenSize();

    return <>
        <div className={styles.portraitImageBlock}>
            <div className={layout.tonightContainer}>
                <div className={layout.breadcrumbContainer}>
                    <div className={layout.breadcrumbLinkText}>
                        Главная / Каталог
                    </div>
                    <div className={layout.breadcrumbHeaderText}>
                        <b>Каталог</b>
                    </div>
                </div>
            </div>
        </div>
        <div className={layout.tonightWrapper}>
            <div className={`${layout.tonightContainer} ${layout.gap}`}>
                <CatalogueHeader />
                <div className={styles.catalogueContentFull}>
                    {screenSize.width < 1248 ? <></> : 
                        <div className={styles.catalogueFilterContainer}>
                            <ProductFilter />
                        </div>
                    }
                    <div className={styles.catalogueProductContainer}>
                        <ProductGrid />
                    </div>
                </div>
            </div>
            <div className={layout.tonightContainer}>
                <div className={styles.paginationContainer}>
                    <div className={styles.leftArrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="25" viewBox="0 0 34 25" fill="none">
                            <path d="M0.939339 13.5607C0.353554 12.9749 0.353554 12.0251 0.939339 11.4393L10.4853 1.8934C11.0711 1.30761 12.0208 1.30761 12.6066 1.8934C13.1924 2.47919 13.1924 3.42893 12.6066 4.01472L4.12132 12.5L12.6066 20.9853C13.1924 21.5711 13.1924 22.5208 12.6066 23.1066C12.0208 23.6924 11.0711 23.6924 10.4853 23.1066L0.939339 13.5607ZM34 14H2V11H34V14Z"/>
                        </svg>
                    </div>
                    <div className={styles.pages}>
                        <Link to='/' className={styles.pageTab}><b>1</b></Link>
                        <Link to='/' className={styles.pageTab}><b>2</b></Link>
                        <Link to='/' className={styles.pageTab}><b>3</b></Link>
                        <Link to='/' className={styles.pageTab}><b>4</b></Link>
                        <Link to='/' className={styles.pageTab}><b>5</b></Link>
                    </div>
                    <div className={styles.rightArrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="25" viewBox="0 0 34 25" fill="none">
                            <path d="M33.0607 13.5607C33.6464 12.9749 33.6464 12.0251 33.0607 11.4393L23.5147 1.8934C22.9289 1.30761 21.9792 1.30761 21.3934 1.8934C20.8076 2.47919 20.8076 3.42893 21.3934 4.01472L29.8787 12.5L21.3934 20.9853C20.8076 21.5711 20.8076 22.5208 21.3934 23.1066C21.9792 23.6924 22.9289 23.6924 23.5147 23.1066L33.0607 13.5607ZM0 14H32V11H0V14Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CatalogueScreen;