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
                                안녕하세요 신입 프론트엔드 개발자 김성희입니다.
                                    <br/>
                                대학시절 컴퓨터정보학과를 전공했습니다.
                                <br/>
                                당시 조금씩 취미로 웹개발을 하곤 했습니다.
                                <br/>
                                그 후 IT회사에서 근무하다 퇴사를 하고 <br/> 본격적으로 웹개발에 대해서  공부하게 되었습니다.
                            </ContentCon>
                        </AboutConWrap>
                        <AboutConWrap><PicWrap/></AboutConWrap>
                    </AboutContentWrapper>
                </AboutWrap>
            </AboutWrapper>
        </>
    )
}