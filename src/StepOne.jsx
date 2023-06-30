import styled from 'styled-components'

export default function StepOne(options) {
    return (
        <Content>
            <Title>
                Personal Info
            </Title>
            <P>Please provide your name, email address and phone number.</P>
            <Form>
                <Label>Name</Label>
                <Input type="text" name="name" placeholder="e.g. Stephen King" />
                <Label>Email Address</Label>
                <Input type="email" name="email" placeholder="e.g. stephenking@lorem.com" />
                <Label>Phone Number</Label>
                <Input type="tel" name="phone" placeholder="e.g. +1 234 567 890" />
            </Form>
            <Button>Next step</Button>
        </Content>
    )
}

const Title = styled.h1`
    color: hsl(213, 96%, 18%);
    font-size: 2em;
`

const Content = styled.div`
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    // gap: 5vh;
    // align-items: center;
    `

const Form = styled.form`
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    gap: .5em;
    `
    
const Input = styled.input`
    width: 30vw;
    font-size: 0.95em;
    padding: 1em;
    border: 2px solid hsl(229, 24%, 87%);
    border-radius: 10px;
    color: hsl(213, 96%, 18%);
    font-weight: bold;
    margin-bottom: 1em;

    &::placeholder {
        color: hsl(231, 11%, 63%);
        font-weight: 400;
    }

    &:focus {
        border: 2px solid hsl(243, 100%, 62%) !important;
    }
    &:invalid {
        border: 2px solid red;
    }
    `

const P = styled.p`
    color: hsl(231, 11%, 63%);
    font-weight: 400;
    margin-top: 1em;
    margin-bottom: 5vh;

`

const Label = styled.label`
    color: hsl(213, 96%, 18%);
    font-weight: 400;
    user-select: none;
`

const Button = styled.button`
    background-color: hsl(213, 96%, 18%);
    color: white;
    font-weight: 500;
    font-size: 1em;
    border: 3px solid hsl(213, 96%, 18%);
    width: fit-content;
    padding: 1em 1.7em 1em 1.7em;
    border-radius: 10px;
    margin-top: 9vh;
    align-self: end;
    transition: 200ms all;
    user-select: none;

    &:hover {
        background-color: white;
        cursor: pointer;
        color: hsl(213, 96%, 18%);
        transition: 200ms all;
    }
    `