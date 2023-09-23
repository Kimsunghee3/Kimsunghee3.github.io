import styled from "styled-components"
import logo from "../images/logo.jpeg"

export const HeaderWrap = styled.div`
    width: 100%;
    height: 140px;
    font-size: 2rem;
    font-weight: 200;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
`

export const LogoWrapper = styled.div`
    width: 50%;
    height: 100%;
    margin-left: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
    }
`

export const LogoWrap = styled.div`
    width: 270px;
    height: 100px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const MenuWrapper = styled.ul`
    width: 55%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const MenuWrap = styled.li`
    width: 30px;
    height: 50px;
    color: #f5f4f4;
    font-size: 1.5rem;
    font-weight: 500;
    position: relative;
    left: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    & > a {
        color: #fff;
    }
    & > a:hover {
        text-decoration: underline;
        color: #7860ff;
    }
    & > a.active {
        color: rgb(60, 112, 255);
    }
`

export const LinkWrapper = styled.div`
    width: 500px;
    height: 50px;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & > a {
    width: 100px;
    height: 50px;
    display: flex;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    }

    & > a:hover {
        color: #98cce8; 
        border: 1px solid #2f89b6;
    }
`

