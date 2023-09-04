import { FC } from "react";

import layout from '../layout/layout.module.css';
import SwiperSlider from "./Components/Main slider/swiper-slider";


const MainScreen: FC = () => {
    return <>
        <SwiperSlider />
        <div className={layout.tonightWrapper}>
            <div className={layout.tonightContainer}>

            </div>
            <div className={layout.tonightContainer}>
                
            </div>
            <div className={layout.tonightContainer}>
                
            </div>
        </div>
    </>
}

export default MainScreen;