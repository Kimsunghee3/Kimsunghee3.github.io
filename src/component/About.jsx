import { AboutWrapper, AboutWrap, AboutConWrap, PicWrap, ContentSub, ContentCon, AboutContentWrapper } from "../style/About.styled"

export const About = () => {
    return(
        <>
            <AboutWrapper>
                <AboutWrap>
                    <AboutContentWrapper>
                        <AboutConWrap>
                            <ContentSub>About Me</ContentSub>
                            <ContentCon>
                                안녕하세요 디자인을 건축하는 개발자 김성희입니다.
                                    <br/>
                                대학시절 컴퓨터정보학과를 전공했던 저는
                                <br/>
                                당시 조금씩 웹개발을 하곤 했습니다.
                                <br/>
                                그로 인해 지금의 제가 있게 되었습니다.
                            </ContentCon>
                        </AboutConWrap>
                        <AboutConWrap><PicWrap/></AboutConWrap>
                    </AboutContentWrapper>
                </AboutWrap>
            </AboutWrapper>
        </>
    )
}