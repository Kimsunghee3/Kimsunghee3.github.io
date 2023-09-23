import styled from "styled-components"
import { Link } from "react-router-dom"
import selfie from "../images/selfie.jpeg"

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 50px;
`

export const Introduce = styled.div`
    width: 60%;
    height: 50%;
    font-size: 25px;
    font-weight: 300;
    color: #ffffff;
    line-height: 2 ;
`

export const ContentPicWrap = styled.div`
    width: 370px;
    height: 470px;
    background: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${selfie});
`

export const IconWrapper = styled.div`
    width: 230px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        color: #5bccfc;
    }
`

export const IconWrap = styled.div`
    width: 310px;
    height: 50px;
    /* background-color: #de8787; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover{
        color: #ff74c5;
    }
`

export const AddressWrap = styled(Link)`
    background-color: transparent;
    color: white;
    &:hover{
        color: #8f9aff;
    }
`