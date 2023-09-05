import { NavLink } from "react-router-dom"
import { HeaderWrap, LogoWrap, LogoWrapper, MenuWrap, MenuWrapper } from "../style/index"

export const Header = () => {
    return(
        <>
            <HeaderWrap>
                <LogoWrapper>
                    <NavLink to="/">
                        <LogoWrap/>
                    </NavLink>
                </LogoWrapper>
                <MenuWrapper>
                    <MenuWrap><NavLink to="/">Home</NavLink></MenuWrap>
                    <MenuWrap><NavLink to="/about">About</NavLink></MenuWrap>
                    <MenuWrap><NavLink to="/skill">Skill</NavLink></MenuWrap>
                    <MenuWrap><NavLink to="/project">Project</NavLink></MenuWrap>
                </MenuWrapper>
            </HeaderWrap>
        </>
    )
}