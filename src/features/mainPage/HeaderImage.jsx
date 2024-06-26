import styled from 'styled-components'

import { TitleSpan } from './HeaderTitle'
import { useTranslation } from 'react-i18next'

export const commonStyles = `
position: relative;
    border: 1px solid var(--color-gray);
    border-radius: 2px;
    padding: 0.8em 0.5em;
`

const WorkingBox = styled.div`
    ${commonStyles}
    display: flex;
    align-items: center;
    gap: 1em;
    width: 100%;
    max-width: 500px;
`
const Square = styled.div`
    height: 16px;
    width: 16px;
    background-color: var(--color-primary);
    flex-shrink: 0;
`

const HeaderImageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 0.5em;
`
const HeaderImg = styled.img`
    width: 100%;
    max-width: 450px;
    margin-bottom: -0.1em;
`
export const TitleInfo = styled.p`
    color: var(--color-gray);
`

function HeaderImage() {
    const { t } = useTranslation()
    return (
        <HeaderImageBox>
            <HeaderImg
                src="./images/header-image.webp"
                alt="picture of hacker"
            />
            <WorkingBox>
                <Square />
                <TitleInfo>
                    {t('workingon')} <br /> <TitleSpan>Burrito App</TitleSpan>{' '}
                </TitleInfo>
            </WorkingBox>
        </HeaderImageBox>
    )
}

export default HeaderImage
