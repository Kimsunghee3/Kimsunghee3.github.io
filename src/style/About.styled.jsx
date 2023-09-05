import styled from "styled-components"
import v from "../images/v.jpeg"

export const AboutWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AboutWrap = styled.div`
    width: 90%;
    height: 100vh;
    top: 7rem;
`
export const AboutContentWrapper = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
`

export const AboutConWrap = styled.div`
    width: 100%;
    height: 100%;
`

export const ContentSub = styled.div`
    color: #fff;
    font-size: 3rem;
    font-weight: 500;
    position: relative;
    top: 2rem;
    left: 2rem;
`

export const ContentCon = styled.div`
    color: #fff;
    font-size: 1.4rem;
    font-weight: 200;
    position: relative;
    top: 2.5rem;
    left: 2rem;
    line-height: 2;
`

export const PicWrap = styled.div`
    width: 80%;
    height: 80%;
    background-color: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    top: 2rem;
    left: 4rem;
    background-image: url(${v});
`