import styled from 'styled-components'
import StyledLink from './StyledLink'
import { screenWidth } from '../styles/mediaQueries'
import { useTranslation } from 'react-i18next'
import { shadow } from './ContactInfo'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 400px;

    border: solid 1px var(--color-gray);
    border-radius: 2px;
    overflow: hidden;
    ${shadow}
`

const CardImageBox = styled.div`
    position: relative;
    height: 200px;

    @media ${screenWidth.small} {
        height: 250px;
    }
    &::after {
        content: '';
        position: absolute;
        display: ${(props) => (props.$withShadow ? 'block' : 'none')};
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgb(40, 44, 51, 0.35);
        z-index: 10;
    }
`
const CardImage = styled.img`
    height: 200px;
    object-fit: fill;
    border-bottom: solid 1px var(--color-gray);

    @media ${screenWidth.small} {
        height: 250px;
    }
`

const CardLanguageBox = styled.div`
    padding: 0.3em 1em;

    color: var(--color-gray);
`
const CardInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em 1em 1.5em;
    gap: 1.5em;
    border-top: solid 1px var(--color-gray);
    min-height: 305px;
`

const CardLinkBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    gap: 1em;

    @media ${screenWidth.small} {
        gap: 2em;
    }
`

const CardHeading = styled.h3`
    color: var(--color-white);
    font-size: 2.4rem;
`
const CardInfo = styled.p`
    line-height: 2.6rem;
    padding: 0.3em 0;
    color: var(--color-gray);
`

function ProjectCard({ project }) {
    const { t } = useTranslation()
    const {
        name,
        image,
        stack,
        info,
        liveLink,
        codeLink,
        shadow = true,
    } = project

    const translateTitle =
        name === 'projects.paintedSmile' || 'projects.rockPaper'

    return (
        <Card>
            <CardImageBox $withShadow={shadow}>
                <CardImage src={image} />
            </CardImageBox>
            <CardLanguageBox>
                <CardInfo>{stack}</CardInfo>
            </CardLanguageBox>
            <CardInfoBox>
                <CardHeading>
                    {translateTitle ? t(`${name}`) : name}{' '}
                </CardHeading>
                <CardInfo>{t(`${info}`)}</CardInfo>
                <CardLinkBox>
                    <StyledLink
                        text="projects.live"
                        to={liveLink}
                        target="_blank"
                    ></StyledLink>
                    <StyledLink
                        text="projects.code"
                        to={codeLink}
                        isPrimary={false}
                        target="_blank"
                    ></StyledLink>
                </CardLinkBox>
            </CardInfoBox>
        </Card>
    )
}

export default ProjectCard
