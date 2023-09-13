import { FC } from "react";

import layout from '../layout/layout.module.css';
import SwiperSlider from "./Components/Main slider/swiper-slider";
import Advantages from "./Components/advantages/advantages";


const MainScreen: FC = () => {
    return <>
        <SwiperSlider />
        <div className={layout.tonightWrapper}>
            <div className={layout.tonightContainer}>
                <Advantages />
            </div>
            <div className={layout.tonightContainer}>
                
            </div>
            <div className={layout.tonightContainer}>
                
            </div>
        </div>
    </>
}

export default MainScreen;