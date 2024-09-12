import React from 'react'
// import styled from 'styled-components'
import { motion } from 'framer-motion'
// import Me from '../assets/Images/profile-img.png'
import TypewriterText from '../subComponents/TypewriterText'


const Intro = () => {
    return (

        <div
            style={{
                // backgroundColor:'blue',
                position: 'absolute',
                left: '66%',
                top: '38%',
                transform: 'translate(-50%, -50%)',
                width: '49vw',
                padding: '2rem',
                zIndex: '1'
            }}
        >
            <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.5, delay: 0.5 }}
                style={{ fontSize: '50px', fontWeight: 'bold' }}>Hello, <span style={{ fontWeight: '500' }}>My Name Is</span></motion.p>
            <motion.h2
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.5, delay: 0.7 }}
                style={{ fontSize: '37px', fontWeight: '700',color: '#874CCC'}}> <i>Punita Gaba.</i></motion.h2>
            <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.5, delay: 0.9 }}
            ><span style={{ fontSize: '25px' }}>I Am </span> <i><b style={{ fontSize: '35px', fontWeight: 'bold', color: 'rgb(231, 76, 112)' }}> <TypewriterText /> </b></i> </motion.p>

            <motion.h6
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.5, delay: 1 }}
                style={{ fontSize: '30px' }}>"Crafting digital magic with a dash of creativity and a sprinkle of tech wizardry! Let's embark on a journey where pixels dance and ideas thrive."</motion.h6>
        </div>
    )
}

export default Intro