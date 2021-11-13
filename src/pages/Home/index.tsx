import React from "react";
import { Navigation, Pagination, SwiperOptions} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import Welcome from "../../components/Welcome";
import Champion from "../../components/Champion";
import Trailer from "../../components/Trailer";
import Credit from "../../components/Credit";


import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

const swiperOptions: SwiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    effect: 'fade',
    speed: 1000
}

const Home: React.FC = () => {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    {({ isActive }) => <Welcome active={isActive}/>}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Champion active={isActive}/>}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Trailer active={isActive}/>}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Credit active={isActive}/>}
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Home;