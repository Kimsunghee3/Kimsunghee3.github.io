import styled from "styled-components"

export const StarWrap = styled.div`
    position: absolute;
    width: 2px;
    height: 2px;
    background-color: #fff;
    border-radius: 50%;
    animation: twinkle 2s infinite;

    @keyframes twinkle {
        0%, 100% {
        opacity: 1;
        transform: scale(1);
        }
        50% {
        opacity: 0;
        transform: scale(1.2);
        }
    }
`