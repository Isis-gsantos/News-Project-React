import styled from "styled-components";
import React, { useState } from 'react';

const SubscribeNewsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [isValid, setIsValid] = useState(false);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
            setIsValid(false);
        } else {
            setError(null);
            console.log('the email is valid');
            setIsValid(true);
        }

        setEmail(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault(); 
    };

    return (
        <Container>
            <Content>
                <h2>Want more content like this?</h2>
                <Form onSubmit={handleSubmit}>
                    <span>Subscribe to our newsletter</span>
                    <form action="">
                        <input type="email" placeholder="E-mail" id="email" value={email} onChange={handleChange} autoComplete="off" />
                        <button type="submit">Sign up</button>
                    </form>
                    {error && <span style={{color: 'red', fontSize: 12, fontWeight: 700}}>{error}</span>}
                    {isValid && <span style={{color: 'green', fontSize: 12, fontWeight: 700}}>Email validated!</span>}
                </Form>
            </Content>
        </Container>
    );
};

const Container = styled.section`
    background-color: #eee;
    padding: 50px;
`

const Content = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
    background-color: #fff;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 3px 3px 6px hsla(0, 0%, 0%, 0.2);
    border-radius: 10px;
    gap: 20px;

    h2 {
        color: cornflowerblue;
        text-transform: uppercase;
        font-size: 25px;
        font-weight: 700;
        flex-wrap: wrap;
        max-width: 350px;
    }

    @media (max-width: 660px) {
        display: flex;
        flex-direction: column;
        text-align: center;

        input {
            margin-bottom: 10px;
        }
    }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    input {
        padding: 2px 5px;
        background-color: none;
        margin-right: 5px;
        color: #000;
    }

    button {
        padding: 5px 10px;
        border-radius: 10px;
        border: none;
        background-color: cornflowerblue;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        transition: 0.4 ease-in-out;

        &:hover {
            background-color: blue;
        }
    }
`

export { SubscribeNewsletter }
