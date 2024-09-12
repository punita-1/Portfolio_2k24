import { motion } from 'framer-motion'
import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
// import LogoComponent from '../subComponents/LogoComponent'
// import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro'
import Lottie from 'lottie-react'
import animationData from "../assets/Animation - 1713769564117 (1).json"
import Header from './Header'


const MainContainer = styled.div`
background: ${props => props.theme.body};
// background: black;
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
// padding: 2rem;
`


const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
                    <Header />
            <MainContainer>
                <Container>

                    <motion.div
                        initial={{ x: '300px', opacity: '0' }}
                        animate={{ x: '50px', opacity: '1' }}
                        transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}
                    >
                    <SocialIcons />

                        <Lottie
                            onClick={() => handleClick()}
                            fill='currentColor'
                            animationData={animationData}
                            style={{ width: '500px', borderRadius: '50%', padding: '200px' }}
                        />
                    </motion.div>



                </Container>
                <Intro />
            </MainContainer>
        </>
    )
}

export default Main
