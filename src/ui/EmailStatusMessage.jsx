import styled from 'styled-components'
import { shadow } from './ContactInfo'
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import { useAppContext } from '../context/useAppContext'
import { screenWidth } from '../styles/mediaQueries'
import { useTranslation } from 'react-i18next'

const StatusModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-socialLink);
    z-index: 11;
    padding: 0 1.5em;
`
const StatusBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    gap: 2em;
    background-color: var(--background);
    padding: 1.5em 1em;
    max-width: 400px;
    border: 1px solid var(--color-gray);
    border-radius: 8px;
    ${shadow};

    @media ${screenWidth.xxl} {
        padding: 2em 1em;
    }
`

const MessageStatus = styled.p`
    color: ${(props) =>
        props.$success ? 'var(--color-success)' : 'var(--color-alert)'};
    font-size: 1.8rem;
    font-weight: 500;

    @media ${screenWidth.xxl} {
        font-size: 2.2rem;
    }
`
const Message = styled.p`
    color: var(--color-white);
    font-size: 1.5rem;
    line-height: 170%;

    @media ${screenWidth.xxl} {
        font-size: 1.6rem;
    }
`

const StatusButton = styled.button`
    background-color: ${(props) =>
        props.$success ? 'var(--color-success)' : 'var(--color-alert)'};
    color: var(--color-white);
    padding: 0.7em 1.5em;
    border-radius: 8px;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) =>
            props.$success
                ? 'var(--color-successHover)'
                : 'var(--color-alertHover)'};
    }

    @media ${screenWidth.xxl} {
        font-size: 1.8rem;
    }
`
const IconSuccess = styled(FiCheckCircle)`
    color: var(--color-success);
    font-size: 10rem;

    @media ${screenWidth.xxl} {
        font-size: 12rem;
    }
`
const IconAlert = styled(FiAlertCircle)`
    color: red;
    font-size: 10rem;

    @media ${screenWidth.xxl} {
        font-size: 12rem;
    }
`

function EmailStatusMessage({ success }) {
    const { setEmailStatus } = useAppContext()
    const { t } = useTranslation()
    console.log(success)
    return (
        <StatusModal>
            <StatusBox>
                {success ? <IconSuccess /> : <IconAlert />}

                <MessageStatus $success={success}>
                    {success
                        ? `${t('modal.success.title')}`
                        : `${t('modal.error.title')}`}
                </MessageStatus>
                <Message>
                    {success
                        ? `${t('modal.success.message')}`
                        : `${t('modal.error.message')}`}
                </Message>
                <StatusButton
                    $success={success}
                    onClick={() => {
                        setEmailStatus('')
                    }}
                >
                    OK
                </StatusButton>
            </StatusBox>
        </StatusModal>
    )
}

export default EmailStatusMessage
