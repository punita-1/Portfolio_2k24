import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import { motion } from "framer-motion";



const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`

const LogoComponent = (props) => {
    return (
        <Logo style={{color:'#874CCC'}}>
            <motion.div
             initial={{ x:-100, opacity: 0, scale: 0 }}
             animate={{ x: 0, opacity: 1, scale: 1.2 }}
             transition={{ type: "spring", duration: 0.5, delay: 0.5 }}>
            PG
            </motion.div>
        </Logo>
      
    )
}

export default LogoComponent
