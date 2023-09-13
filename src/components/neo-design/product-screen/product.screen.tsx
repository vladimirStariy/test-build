import { FC } from 'react';

import layout from '../layout/layout.module.css'
import styles from './product.screen.module.css'
import VolumePills from '../volume-pills/volume.pills';
import TonightButton from '../../../UI/Components/button/tonight-button';
import useScreenSize from '../../utils/use-screen-size';
import { Link } from 'react-router-dom';

const ProductScreen: FC = () => {
    const screenSize = useScreenSize();

    return <>
        <div className={`${layout.tonightWrapper} ${styles.commonPadding}`}>
            <div className={layout.tonightContainer}>
                <div className={styles.productWrapper}>
                    <div className={styles.breadcrumb}>
                        Главная / Каталог / Blanche
                    </div>
                    <div className={styles.cardWrapper}>
                        { screenSize.width < 726 ? 
                        <>
                            <div className={styles.cardBlock}>
                                <div className={styles.brandName}>
                                    <div className={styles.brand}>
                                        Byredo
                                    </div>
                                    <div className={styles.name}>
                                        Blanche
                                    </div>
                                    <div className={styles.articul}>Артикул: 22452</div>
                                </div>
                                <div className={styles.cardImg}></div>
                                <div className={styles.priceVolume}>
                                    <div className={styles.price}>75,00 BYN</div>
                                    <div className={styles.volume}>
                                        <div className={styles.volumeLabel}>Объем</div>
                                        <VolumePills />
                                    </div>
                                </div>                     
                            </div>
                            <div className={styles.buttons}>
                                <TonightButton text='Добавить в корзину'/>
                                <Link to='/' className={styles.buttonLink}>
                                    Узнать остаток и стоимость
                                </Link>
                            </div>
                        </>
                        :
                        <>
                            <div className={styles.cardBlock}>
                                <div className={styles.cardImg}></div>
                                <div className={styles.underCard}>
                                    Предложение не является публичной офертой
                                </div>
                            </div>
                            <div className={styles.cardData}>
                                <div className={styles.brandName}>
                                    <div className={styles.brand}>
                                        Byredo
                                    </div>
                                    <div className={styles.name}>
                                        Blanche
                                    </div>
                                    <div className={styles.articul}>Артикул: 22452</div>
                                </div>
                                <div className={styles.valueData}>
                                    <div className={styles.volume}>
                                        <div className={styles.volumeLabel}>Объем</div>
                                        <VolumePills />
                                    </div>
                                    <div className={styles.price}>75,00 BYN</div>
                                    <div className={styles.buttons}>
                                        <div className={styles.buttonWrapper}>
                                            <TonightButton text='Добавить в корзину'/>
                                        </div>
                                        <Link to='/' className={styles.buttonLink}>
                                            Узнать остаток и стоимость
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                        }
                    </div>
                    <div className={styles.descriptionWrapper}>
                        <div className={styles.descriptionBlock}>
                            <div className={styles.descriptionLabel}>Описание</div>
                            <div className={styles.description}>
                                Byredo Parfums Blanche — это попытка выразить цвет в аромате и, возможно, кому-то может показаться, что этого сделать нельзя, но, получившийся в итоге парфюм, доказывает обратное. Белый цвет всегда ассоциировался с чистотой, невинностью и классической красотой и именно это решено было воплотить в аромате духов Byredo Parfums Blanche, который должен был стать четкой ассоциацией белого цвета и всего, что с ним связано. Структура аромата проста и не имеет большого количества отвлекающих подробностей, однако при этом его нельзя назвать скучным или слишком однотонным, скорее даже наоборот он разнообразен в своей простоте. Легкий ненавязчивый аромат Byredo Parfums Blanche позволит использовать их как для похода на романтическое свидание, так и для вечеринки.
                            </div>
                        </div>
                        <div className={styles.characteristicBlock}>
                            <div className={styles.descriptionLabel}>Подробные характеристики</div>
                            <div className={styles.characteristics}>
                                <div>
                                    Категория..........................................
                                    <Link to='/' className={styles.dataLink}>для неё</Link>
                                </div>
                                <div>
                                    Страна................................................
                                    <Link to='/' className={styles.dataLink}>Швеция</Link>
                                </div>
                                <div>
                                    Год выпуска.......................................
                                    <Link to='/' className={styles.dataLink}>2009</Link>
                                </div>
                                <div>
                                    Группа ароматов..............................
                                    <Link to='/' className={styles.dataLink}>альдегидные, цветочные</Link>
                                </div>
                                <div>
                                    Верхние ноты....................................
                                    <Link to='/' className={styles.dataLink}>роза, альдегиды</Link>
                                </div>
                                <div>
                                    Средние ноты...................................
                                    <Link to='/' className={styles.dataLink}>пион, фиалка</Link>
                                </div>
                                <div>
                                    Базовые ноты....................................
                                    <Link to='/' className={styles.dataLink}>мускус, сандал</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
}

export default ProductScreen;