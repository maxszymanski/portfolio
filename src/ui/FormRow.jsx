import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'
import { useTranslation } from 'react-i18next'

const Row = styled.div`
    position: relative;
`

const trans = {
    isFocus: css`
        top: -10px;
        left: 10px;
        font-size: 1.3rem;
        color: var(--color-primary);
        background-color: var(--background);
        @media ${screenWidth.xl} {
            font-size: 1.4rem;
        }
    `,
    isNoFocus: css`
        font-size: 1.6rem;
        top: 10px;
        left: 20px;
        color: var(--color-gray);
        background-color: transparent;

        @media ${screenWidth.xl} {
            font-size: 1.7rem;
            top: 12px;
        }
    `,
}

const Label = styled.label`
    position: absolute;
    font-weight: 300;
    pointer-events: none;
    transition: top 0.3s, left 0.3s, font-size 0.3s, color 0.3s,
        background-color 0.3s;
    z-index: 10;
    ${(props) => (props.$isFocused ? trans.isFocus : trans.isNoFocus)}

    ${Row}:focus-within & {
        ${trans.isFocus}
    }
`

const ErrorMessage = styled.span`
    padding-left: 0.3em;
    font-size: 1.2rem;
    color: #d13838;
    font-weight: 400;

    @media ${screenWidth.xl} {
        font-size: 1.4rem;
    }
`

function FormRow({ label, children, error }) {
    const [isFocused, setIsFocused] = useState(false)
    const { t } = useTranslation()

    const handleFocus = () => setIsFocused(true)
    const handleBlur = (e) => setIsFocused(e.target.value !== '')

    useEffect(() => {
        if (children?.props?.value) {
            setIsFocused(children.props.value !== '')
        }
    }, [children])

    return (
        <Row>
            <Label $isFocused={isFocused} htmlFor={children?.props?.id}>
                {t(label)}
            </Label>
            {React.cloneElement(children, {
                onFocus: handleFocus,
                onBlur: handleBlur,
                $isFocused: isFocused,
            })}
            <ErrorMessage>{error}</ErrorMessage>
        </Row>
    )
}

export default FormRow
