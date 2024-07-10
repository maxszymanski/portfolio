import styled, { css } from 'styled-components'
import FormRow from './FormRow'
import { useAppContext } from '../context/useAppContext'
import { useForm } from 'react-hook-form'
import { screenWidth } from '../styles/mediaQueries'
import { useTranslation } from 'react-i18next'
import { shadow } from './ContactInfo'

const commonStyles = css`
    position: relative;
    padding: 0.8em;
    margin-bottom: 0.3em;
    font-size: 1.4rem;
    font-weight: 300;
    width: 100%;
    background-color: var(--background);
    border: 1px solid;
    border-radius: 2px;
    color: var(--color-white);
    width: 100%;
    padding: 0.7em;
    outline: none;
    border-color: ${(props) =>
        props.$isFocused ? 'var(--color-primary)' : 'var(--color-gray)'};

    &:focus {
        border-color: var(--color-primary);
    }

    @media ${screenWidth.xl} {
        margin-bottom: 0.5em;
        font-size: 1.5rem;
    }
`

const FormBox = styled.form`
    border: 1px solid var(--color-gray);
    padding: 2em 1em;
    width: 100%;
    border-radius: 2px;
    max-width: 400px;
    ${shadow}

    @media ${screenWidth.small} {
        padding: 2em 1.3em;
    }
    @media ${screenWidth.md} {
        min-width: 400px;
    }
    @media ${screenWidth.xl} {
        max-width: 500px;
        padding: 2em 4em;
    }
`

const RowBox = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1.3em;
    width: 100%;
`
const FormHeading = styled.h4`
    text-align: center;
    color: var(--color-white);
    font-size: 2.8rem;
    margin-bottom: 2em;

    @media ${screenWidth.xl} {
        font-size: 3rem;
    }
`
const Input = styled.input`
    ${commonStyles};
`

const TextArea = styled.textarea`
    ${commonStyles}
    resize: vertical;
    min-height: 200px;
    max-height: 200px;
`

const FormButton = styled.button`
    padding: 0.6em 1em;
    border: 1px solid var(--color-gray);
    border-radius: 2px;
    background-color: transparent;
    color: var(--color-white);
    transition: background-color 0.3s;
    ${shadow}

    &:hover {
        background-color: var(--color-primaryLink);
    }
    @media ${screenWidth.xl} {
        font-size: 1.8rem;
    }
`

function ContactForm() {
    const { setEmailStatus } = useAppContext()
    const { t } = useTranslation()
    const defaultValues = { name: '', email: '', message: '' }
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm(defaultValues)

    const onSubmit = async (data) => {
        const response = await fetch('/mail.php', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            setEmailStatus('success')
        } else {
            setEmailStatus('error')
        }
        reset(defaultValues)
    }

    return (
        <FormBox onSubmit={handleSubmit(onSubmit)}>
            <FormHeading>{t('contact.contactMe')}</FormHeading>
            <RowBox>
                <FormRow
                    label="contact.labelName"
                    error={errors?.name?.message}
                >
                    <Input
                        id="name"
                        type="text"
                        {...register('name', {
                            required: `${t('contact.errorName')}`,
                        })}
                    />
                </FormRow>
                <FormRow
                    label="contact.labelEmail"
                    error={errors?.email?.message}
                >
                    <Input
                        id="email"
                        type="text"
                        {...register('email', {
                            required: `${t('contact.errorEmail')}`,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: `${t('contact.errorEmail')}`,
                            },
                        })}
                    />
                </FormRow>
                <FormRow
                    label="contact.labelMessage"
                    error={errors?.message?.message}
                >
                    <TextArea
                        id="message"
                        type="text"
                        {...register('message', {
                            required: `${t('contact.errorMessage')}`,
                        })}
                    />
                </FormRow>
                <FormButton>{t('contact.send')}</FormButton>
            </RowBox>
        </FormBox>
    )
}

export default ContactForm
