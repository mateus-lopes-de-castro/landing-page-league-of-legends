import styled from "styled-components";

export const Container = styled.div`
   
.swiper,
.swiper-slide {
    height: 100%;
}

.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    border-radius: unset;
    margin: 10px;
    background-color: transparent;

    position: relative;

    &::before {
        content: "";
        width: 80%;
        height: 80%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        background-color: '#4267b2';
    }

    &-active {
        background-color: transparent;

        &::before {
            background-color: $main-color;
        }
    }
}

`