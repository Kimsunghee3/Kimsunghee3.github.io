import { ProjectWrapper, ProjectHeader, VideoWrap, ProjectSub, ProjectCon, TechWrapper, TechWrap } from "../style/Project.styled"
import nftIn from "../images/nftIn.gif"
import ott from "../images/919.gif"

export const Project = () => {
    return(
        <>
            <ProjectWrapper>
                <ProjectHeader>PROJECT</ProjectHeader>
                <VideoWrap>
                    <ProjectSub> NFT IN</ProjectSub>
                    <img src={nftIn} alt=""/>
                    <TechWrapper>
                        <TechWrap>React</TechWrap>
                        <TechWrap>React-Query</TechWrap>
                        <TechWrap>Recoil</TechWrap>
                        <TechWrap>CSS</TechWrap>
                        <TechWrap>TypeScript</TechWrap>
                    </TechWrapper>
                    <div style={{width: "100%", height: "130px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "1.4rem", fontWeight: "200"}}> NFT Wallet 기능을 제공하는 앱입니다.</div> 
                </VideoWrap>
                <VideoWrap>
                    <ProjectSub> 919</ProjectSub> 
                    <img src={ott} style={{width: "900px", height: "400px"}} alt="" />
                    <TechWrapper>
                        <TechWrap>React</TechWrap>
                        <TechWrap>Redux</TechWrap>
                        <TechWrap>CSS</TechWrap>
                        <TechWrap>JavaScript</TechWrap>
                    </TechWrapper>
                    <div style={{width: "100%", height: "130px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "1.4rem", fontWeight: "200"}}> 
                    OTT플랫폼들을 모아놓은 웹사이트이며 각 구독 서비스에 분배구독료를 계산해볼 수 있는 <br/> 기능을 제공하고 있습니다. </div>
                </VideoWrap>
                <VideoWrap>
                    <ProjectSub> CRUD BOARD </ProjectSub>
                    <ProjectCon/>
                    <TechWrapper>
                        <TechWrap>NodeJS</TechWrap>
                        <TechWrap>HTML</TechWrap>
                        <TechWrap>CSS</TechWrap>
                        <TechWrap>JavaScript</TechWrap>
                    </TechWrapper>
                    <div style={{width: "100%", height: "130px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "1.4rem", fontWeight: "200"}}> 
                        Create, Read, Update, Delete를 활용하여 게시판 사이트를 제작하였습니다.
                    </div>
                </VideoWrap>
            </ProjectWrapper>
        </>
    )
}