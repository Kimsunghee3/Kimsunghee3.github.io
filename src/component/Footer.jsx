import { Icon } from '@iconify/react'
import { FooterWrapper, FooterWrap, FooterSubWrap } from "../style/Footer.styled"
import { AddressWrap } from '../style'
import { Link } from 'react-router-dom'

export const Footer = () => {
    const emailAddress = "koalasunghee@gmail.com"
    return(
        <FooterWrapper>
            <FooterWrap>
            <Link style={{backgroundColor: "transparent"}} to="https://github.com/Kimsunghee3">
                <Icon style={{width: "35px", height: "35px", color: "#758cff", backgroundColor: "transparent"}} icon="arcticons:github" />
            </Link>
            <Link style={{backgroundColor: "transparent"}} to="https://chopssal.tistory.com/">
                <Icon style={{width: "30px", height: "30px", color: "#758cff", backgroundColor: "transparent"}} icon="fa6-solid:t" />
            </Link>
            <AddressWrap to={`mailto:${emailAddress}`}>{
                <Icon style={{width: "40px", height: "35px", color: "#758cff", backgroundColor: "transparent"}} icon="basil:gmail-outline" />
            }</AddressWrap>
            </FooterWrap>
            <FooterSubWrap>
                DESIGNED BY CHOP
            </FooterSubWrap>
        </FooterWrapper>
    )
}