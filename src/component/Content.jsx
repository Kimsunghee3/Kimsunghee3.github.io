import { Icon } from '@iconify/react'
import { Link } from "react-router-dom"
import { ContentPicWrap, ContentWrapper, Introduce, LinkWrapper, IconWrapper, IconWrap, AddressWrap} from "../style"

export const Content = () => {
    const emailAddress = "koalasunghee@gmail.com"
    return(
        <>
            <ContentWrapper>
                <Introduce>
                    <h1>KIM SUNGHEE</h1>
                    <h3>Frontend Developer</h3>
                    <IconWrapper><Icon icon="material-symbols:add-call" />010 6830 8410</IconWrapper>
                    <IconWrap><Icon icon="material-symbols:mail-outline" />
                    <AddressWrap to={`mailto:${emailAddress}`}>{emailAddress}</AddressWrap></IconWrap>
                    <LinkWrapper>
                        <Link to="https://github.com/Kimsunghee3">Github</Link>
                        <Link to="https://chopssal.tistory.com/">Tistory</Link>
                        <Link to="https://open.kakao.com/o/s2ZkMDCf">Contact</Link>
                    </LinkWrapper>
                </Introduce>
                <ContentPicWrap/>    
            </ContentWrapper>
        </>
    )
}