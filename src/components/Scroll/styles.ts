import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 1rem;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 3s ease infinite;

    @keyframes bounce {
    0% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(-50%) translateY(-10px);
    }
    100% {
        transform: translateX(-50%) translateY(0);
    }
}

`