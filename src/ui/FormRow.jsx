import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

const Row = styled.div`
    position: relative;
`

const trans = {
    isFocus: css`
        top: -10px;
        left: 10px;
        font-size: 1.4rem;
        color: var(--color-primary);
        background-color: var(--background);
    `,
    isNoFocus: css`
        font-size: 1.6rem;
        top: 9px;
        left: 20px;
        color: var(--color-gray);
        background-color: transparent;
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
    font-size: 1.2rem;
    color: var(--color-primary);
    font-weight: 400;
`

function FormRow({ label, children, error }) {
    const [isFocused, setIsFocused] = useState(false)

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
                {label}
            </Label>
            {React.cloneElement(children, {
                onFocus: handleFocus,
                onBlur: handleBlur,
            })}
            <ErrorMessage>{error}</ErrorMessage>
        </Row>
    )
}

export default FormRow
