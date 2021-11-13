import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import SwiperCore, {
    EffectFade,
    Mousewheel,
    Pagination,
    SwiperOptions
} from 'swiper'

import Welcome from "../../components/Welcome";
import Champion from "../../components/Champion";
import Trailer from "../../components/Trailer";
import Credit from "../../components/Credit";
import Scroll from "../../components/Scroll";


import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

import { Container } from "./styles";

const swiperOptions: SwiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    effect: 'fade',
    speed: 1000
}

SwiperCore.use([Mousewheel, Pagination, EffectFade])

const Home: React.FC = () => {
    return (
        <Container>
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

            <Scroll/>
        </Container>
    );
}

export default Home;