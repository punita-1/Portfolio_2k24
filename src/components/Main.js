import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
// import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro'
import Lottie from 'lottie-react'
import animationData from "../assets/Animation - 1713157910381.json"
import Header from './Header'


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`



// const Center = styled.button`
// position: absolute;
// top: ${props => props.click ? '85%' : '50%'};
// left: ${props => props.click ? '92%' : '50%'};
// transform: translate(-50%,-50%);
// border: none;
// outline: none;
// background-color: transparent;
// cursor: pointer;

// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// transition: all 1s ease;

// &>:first-child{
// }

// &>:last-child{
//     display: ${props => props.click ? 'none' : 'inline-block'};
//     padding-top: 1rem;
// }
// `

// const DarkDiv = styled.div`
// position: absolute;
// top: 0;
// background-color: #000;
// bottom: 0;
// right: 0%;
// width: ${props => props.click ? '100%' : '0%'};
// height: ${props => props.click ? '100%' : '0%'};
// // z-index:1;
// transition: height 0.5s ease, width 1s ease 0.5s;
// `


const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            {/* <DarkDiv click={click} /> */}
            <Container>
                <Header/>
               
               
                <SocialIcons  />                
                {/* <Lottie
                    onClick={() => handleClick()}
                    fill='currentColor'
                    animationData={animationData}
                    style={{ width: '400px', height: '400px' }}
                /> */}
               

            </Container>
            <Intro />
        </MainContainer>
    )
}

export default Main
