import { MainSkill, ServeSkill, SkillSubWrap, SkillWrapper, SkillsWrap, SkillsWrapper} from "../style/Skill.styled"

export const Skill = () => {
    return(
        <>
            <SkillWrapper>
                <SkillSubWrap> SKILL</SkillSubWrap>
                <SkillsWrapper>
                    <MainSkill>
                        <SkillsWrap>
                            HTML
                        </SkillsWrap>
                        <SkillsWrap>
                            CSS
                        </SkillsWrap>
                        <SkillsWrap>
                            JS
                        </SkillsWrap>
                        <SkillsWrap>
                            REACT
                        </SkillsWrap>
                        <SkillsWrap>
                            LINUX
                        </SkillsWrap>
                    </MainSkill>
                    <ServeSkill>
                        <SkillsWrap>
                            NOTION
                        </SkillsWrap>
                        <SkillsWrap>
                            TRELLO
                        </SkillsWrap>
                        <SkillsWrap>
                            FIGMA
                        </SkillsWrap>
                        <SkillsWrap>
                            GIT
                        </SkillsWrap>
                        <SkillsWrap>
                            GITHUB
                        </SkillsWrap>
                    </ServeSkill>
                </SkillsWrapper>
            </SkillWrapper>
        </>
    )
    }