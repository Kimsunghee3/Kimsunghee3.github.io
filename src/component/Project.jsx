import { ProjectWrapper, ProjectHeader, VideoWrap, ProjectSub, ProjectCon, TechWrapper, TechWrap, WalletWrap, SubTech, StyleWrap } from "../style/Project.styled"
import nftIn from "../images/nftIn.gif"
import ott from "../images/919.gif"

export const Project = () => {
    return(
        <>
            <ProjectWrapper>
                <ProjectHeader>PROJECT</ProjectHeader>
                <VideoWrap>
                    <ProjectSub> NFT IN</ProjectSub>
                    <img style={{marginBottom:"2rem"}} src={nftIn} alt="nftwallet.gif"/>
                    <TechWrapper>
                        <TechWrap>TypeScript</TechWrap>
                        <TechWrap>Recoil</TechWrap>
                        <TechWrap>Mongoose</TechWrap>
                        <TechWrap>MongoDB</TechWrap>
                        <TechWrap>Terraform</TechWrap>
                    </TechWrapper>
                    <TechWrapper>
                        <TechWrap>React</TechWrap>
                        <SubTech> React-Query</SubTech>
                        <SubTech>Github Actions</SubTech>
                        <SubTech>Amazon EC2</SubTech>
                    </TechWrapper>
                    <TechWrapper>
                        <StyleWrap>Styled-Components</StyleWrap>
                    </TechWrapper>
                    <WalletWrap> 
                        메타마스크와 같은 탈중앙화를 목표로 한 블록체인 지갑입니다. <br/>
                        새로운 지갑 주소를 생성할 수 있으며, 기존의 다른 앱에서 사용하는 이더리움 지갑 주소를 <br/> 가져올 수 있습니다.
                        해당 지갑에는 암호화폐, ERC-20 토큰, ERC-721 토큰 등의 자산을 조회할 수 있으며, 다양한 블록체인 네트워크(폴리곤, 아비트럼 등)로 네트워크를 변경할 수 있습니다.
                        함께 프로젝트를 진행한 팀(NFT마켓팀)과 프로젝트가 연동되어 NFT를 구매할 수 있으며 이를 통해 다양한 디지털 자산을 거래할 수 있습니다.<br/>
                        코인게코 API 및 백서버를 활용하여 실시간으로 코인 시세와 동향을 확인할 수 있습니다.<br/>
                    </WalletWrap> 
                </VideoWrap>
                <VideoWrap>
                    <ProjectSub> 919</ProjectSub> 
                    <img src={ott} style={{width: "900px", height: "400px", marginBottom: "2rem"}} alt="919.gif" />
                    <TechWrapper>
                        <TechWrap>React</TechWrap>
                        <TechWrap>Redux</TechWrap>
                        <SubTech>Redux Thunk</SubTech>
                        <TechWrap>Axios</TechWrap>
                        <TechWrap>AWS S3</TechWrap>
                    </TechWrapper>
                    <TechWrapper>
                        <TechWrap>MySQL</TechWrap>
                        <TechWrap>Jest</TechWrap>
                        <TechWrap>Certbot</TechWrap>
                        <TechWrap>JavaScript</TechWrap>
                        <StyleWrap>Styled-Components</StyleWrap>
                    </TechWrapper>
                    <WalletWrap> 
                        넷플릭스, 유튜브 프리미엄 등의 다양한 OTT 플랫폼을 한 곳에서 종합하여 제공하는 <br/> 웹사이트입니다. 
                        이 사이트를 통해 국내와 주요 국가들에 대한 구독 가격을 비교하고, <br/> 사용자들은 다양한 옵션 중에서 최저가
                        구독플랜을 찾을 수 있습니다. 또한 이 서비스는 OTT플랫폼의 다양한 콘텐츠 정보, 사용자 리뷰, 추천 기능 등을 통해 보다 다양한 기 능들을 제공합니다.
                        이를 통해 사용자는 자신의 취향과 예산에 맞는 최적의 OTT 구독 서비스를 선택할 수 있습니다. 
                    </WalletWrap>
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
                    <div style={{width: "100%", height: "130px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "1.4rem", fontWeight: "200", marginBottom:"2rem"}}> 
                        Create, Read, Update, Delete를 활용하여 게시판 사이트를 제작하였습니다.
                    </div>
                </VideoWrap>
            </ProjectWrapper>
        </>
    )
}