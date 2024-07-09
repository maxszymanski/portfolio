import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'

const TextSpan = styled.span`
    display: none;
    overflow: hidden;
    border-right: 2px solid;
    animation: blink 0.7s step-end infinite;
    color: var(--color-primary);
    font-weight: 800;
    @keyframes blink {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: var(--color-primary);
        }
    }

    @media ${screenWidth.sm} {
        display: inline-block;
    }
`

const titles = ['Front-end Developer', 'Web Designer']

const TypingText = () => {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % titles.length
            const fullText = titles[i]

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            )

            setTypingSpeed(isDeleting ? 75 : 150)

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 500)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
            }
        }

        const timer = setTimeout(handleTyping, typingSpeed)

        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, typingSpeed])

    return <TextSpan>{text}</TextSpan>
}

export default TypingText
