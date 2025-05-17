import styled from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'
import SkillCard from './SkillCard'

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
    margin-top: 3em;
    gap: 2em;

    @media ${screenWidth.sm} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media ${screenWidth.md} {
        flex-direction: row;
        justify-content: stretch;
        flex-wrap: nowrap;
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

    @media ${screenWidth.sm} {
        flex-direction: row;
        align-items: center;
    }
    @media ${screenWidth.md} {
        flex-direction: column;
        align-items: stretch;
    }
    @media ${screenWidth.xxl} {
        gap: 2.5em;
    }
`

function SkillSection() {
    return (
        <SkillContainer>
            <SkillImage
                src="./images/skills-img.webp"
                alt="section logo"
                loading="lazy"
            />
            <SkillBoxs>
                <SkillColumn>
                    <SkillCard
                        title="skills.languages"
                        info="JavaScript TypeScript"
                    />
                </SkillColumn>
                <SkillColumn>
                    <SkillCard
                        title="skills.frameworks"
                        info="React Next.js Astro EJS Svelte SvelteKit "
                    />
                    <SkillCard
                        title="skills.tools"
                        info="VSCode Figma Git SCSS"
                    />
                </SkillColumn>
                <SkillColumn>
                    <SkillCard
                        title="skills.database"
                        info="Supabase Strapi  Redux Styled-component  Tailwind Tanstack-Query Zustand"
                    />
                    <SkillCard
                        title="skills.other"
                        info="React-Hook-Forms i18next React-Router 
                     Hot-toast Zod Nodemailer Quill React-crop"
                    />
                </SkillColumn>
            </SkillBoxs>
        </SkillContainer>
    )
}

export default SkillSection
