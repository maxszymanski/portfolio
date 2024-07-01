import { useTranslation } from 'react-i18next'
import Section from '../../ui/Section'
import styled from 'styled-components'
import { screenWidth } from '../../styles/mediaQueries'
import SkillCard from '../../ui/SkillCard'

const SkillImage = styled.img`
    /* height: 310px; */
`

const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;

    @media ${screenWidth.lg} {
        flex-direction: row;
        justify-content: space-around;
        align-items: stretch;
    }
`

const SkillBoxs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: baseline; */
    margin-top: 3em;
    gap: 2em;

    @media ${screenWidth.lg} {
        flex-direction: row;
        align-items: baseline;
        margin-top: 0;
    }
`

const SkillColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
`

function SkillsSection() {
    const { t } = useTranslation()
    return (
        <Section to="skills">
            <SkillContainer>
                <SkillImage src="./images/skills-img.webp" alt="section logo" />
                <SkillBoxs>
                    <SkillColumn>
                        <SkillCard
                            title="languages"
                            info="JavaScript TypeScript"
                        />
                    </SkillColumn>
                    <SkillColumn>
                        <SkillCard title="frameworks" info="React Astro" />
                        <SkillCard title="tools" info="VSCode Figma Git SCSS" />
                    </SkillColumn>
                    <SkillColumn>
                        <SkillCard
                            title="database"
                            info="Supabase Tanstack-Query Redux Styled-component Tailwind"
                        />
                        <SkillCard
                            title="other"
                            info="react-hook-forms i18n react-router react-icons
                                react-hot-toast"
                        />
                    </SkillColumn>
                </SkillBoxs>
            </SkillContainer>
        </Section>
    )
}

export default SkillsSection
