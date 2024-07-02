import { useTranslation } from 'react-i18next'
import Section from '../../ui/Section'
import styled from 'styled-components'
import { screenWidth } from '../../styles/mediaQueries'
import SkillCard from '../../ui/SkillCard'

const SkillImage = styled.img`
    @media ${screenWidth.md} {
        position: absolute;
        bottom: 0em;
        left: 1em;
        height: 170px;
    }
    @media ${screenWidth.lg} {
        bottom: -2em;
        left: 4em;
        height: 200px;
    }
    @media ${screenWidth.xl} {
        position: relative;
        top: 0;
        left: 0;
        height: 300px;
    }
    @media ${screenWidth.xxl} {
        height: 330px;
    }
`

const SkillContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;

    @media ${screenWidth.md} {
        row-gap: 6em;
    }
    @media ${screenWidth.lg} {
        flex-direction: row;
        justify-content: space-around;
        align-items: stretch;
        row-gap: 0;
    }
    @media ${screenWidth.xxl} {
        gap: 4em;
    }
`

const SkillBoxs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 3em;
    gap: 2em;

    @media ${screenWidth.md} {
        flex-direction: row;
        align-items: baseline;
        margin-top: 0;
    }
    @media ${screenWidth.xxl} {
        gap: 2.5em;
    }
`

const SkillColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;

    @media ${screenWidth.xxl} {
        gap: 2.5em;
    }
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
                            info="Supabase Tanstack-Query Redux Styled-component Tailwind "
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
