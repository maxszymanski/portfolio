import styled, { css } from 'styled-components'
import FormRow from './FormRow'
import { useForm } from 'react-hook-form'

const commonStyles = css`
    position: relative;
    background-color: transparent;
    border: 1px solid var(--color-gray);
    border-radius: 2px;
    width: 100%;
    padding: 0.5em 0.8em;
    outline: none;
    margin-bottom: 0.3em;

    &:focus {
        border-color: var(--color-primary);
        color: var(--color-white);
    }
`

const FormBox = styled.form`
    border: 1px solid var(--color-gray);
    margin-top: 2em;
    margin-bottom: 7em;
    padding: 2em 1.5em;
    width: 100%;
    border-radius: 2px;
    max-width: 400px;
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
`
const Input = styled.input`
    ${commonStyles}
`

const TextArea = styled.textarea`
    ${commonStyles}
    resize: vertical;
    min-height: 200px;
    max-height: 200px;
`

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    return (
        <FormBox>
            <FormHeading>Contact us</FormHeading>
            <RowBox>
                <FormRow label="Name" error={errors?.name?.message}>
                    <Input
                        id="name"
                        type="text"
                        {...register('name', {
                            required: 'Proszę podać imię lub nazwę firmy',
                        })}
                    />
                </FormRow>
                <FormRow label="Email" error={errors?.email?.message}>
                    <Input
                        id="email"
                        type="text"
                        {...register('email', {
                            required: 'Nieprawidłowy adres email',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Proszę podać poprawny adres email',
                            },
                        })}
                    />
                </FormRow>
                <FormRow label="Message" error={errors?.message?.message}>
                    <TextArea
                        id="message"
                        type="text"
                        {...register('message', {
                            required: 'Proszę podać imię lub nazwę firmy',
                        })}
                    />
                </FormRow>
            </RowBox>
        </FormBox>
    )
}

export default ContactForm
