import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'

export const CardSkill = styled.div`
    border: 1px solid var(--color-gray);
    border-radius: 2px;

    @media ${screenWidth.sm} {
        min-width: 230px;
        max-width: 275px;
    }
`
const SkillCardTitle = styled.h3`
    border-bottom: 1px solid var(--color-gray);
    font-weight: 400;
    padding: 0.5em 0.8em;
    font-size: 1.7rem;
    text-align: center;
`
const SkillCardInfo = styled.p`
    color: var(--color-gray);
    padding: 0.8em;
    font-size: 1.5rem;
    text-align: center;
`

function SkillCard({ title, info }) {
    const { t } = useTranslation()
    return (
        <CardSkill>
            <SkillCardTitle>{t(title)}</SkillCardTitle>
            <SkillCardInfo>{info}</SkillCardInfo>
        </CardSkill>
    )
}

export default SkillCard
