// import React from 'react'
// import Header from './Header'
// import styled from "styled-components";
// import SocialIcons from '../subComponents/SocialIcons'

// const Page = styled.div`
//   background: ${props => props.theme.body};
//   height: 100vh;
//   width: 100%;
// `;

// const ContactPage = () => {
//     return (
//         <Page>
//             <Header/>
//             <SocialIcons/>
//         </Page>
//     )
// }

// export default ContactPage
import React, { useState } from 'react';
import styled from "styled-components";
import Header from './Header';
import SocialIcons from '../subComponents/SocialIcons'

const Page = styled.div`
  background: ${props => props.theme.body};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  width: 50%;

  label {
    margin-bottom: 0.5rem;
    display: block;
  }

  input, textarea {
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 100%;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }

  button {
    padding: 0.5rem 2rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        // Add form submission logic here
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <>
        <Header />
            <SocialIcons />
        <Page>
            
            <h2>Contact Me</h2>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                <button type="submit">Send Message</button>
            </Form>
        </Page>
        </>
    )
}

export default ContactPage;