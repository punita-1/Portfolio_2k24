import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
// import PowerButton from '../subComponents/PowerButton'

const Home = styled(NavLink)`
  color: ${props => props.theme.text};
  z-index: 5;
`;


const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  z-index: 5;
`;

const EducationExperience = styled(NavLink)`
  color: ${props => props.theme.text};
  z-index: 2;
`;

const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
z-index:1;
`
const HOBBIES = styled(NavLink)`
color: ${props => props.theme.text};
z-index:1;
`
const WORK = styled(NavLink)`
color: ${props => props.theme.text};
z-index:1;
`

const ABOUT = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`
const CVRESUME = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`
const Nav = styled.nav`
  position: fixed;
  z-index:20;
  top: 10;
  left: 10;
  width: 49%;
  margin-top: 5%;
  height: 60%;
  font-size: 12px;
  padding:1.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translatex(${props => (props.open ? '155%' : '300%')});
  transition: transform 0.5s ease-out;
`

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
`

const Line = styled.span`
  display: block;
  width: 2rem;
  height: 0.25rem;
  background: #874CCC;
  margin: 0.5rem 0;
  transition: transform 0.3s ease-out;
  transform-origin: left center;

  &:nth-child(1) {
    transform: translateY(${props => (props.open ? '0.5rem' : '0')}) rotate(${props => (props.open ? '45deg' : '0')});
    transform: translateX(${props => (props.open ? '0.5rem' : '0')}) rotate(${props => (props.open ? '45deg' : '0')});
  }

  &:nth-child(2) {
    opacity: ${props => (props.open ? '0' : '1')};
  }

  &:nth-child(3) {
    transform: translateY(${props => (props.open ? '-0.5rem' : '0')}) rotate(${props => (props.open ? '-45deg' : '0')});
    transform: translateX(${props => (props.open ? '0.5rem' : '0')}) rotate(${props => (props.open ? '-45deg' : '0')});
  }
`

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <LogoComponent />
            <MenuIcon onClick={() => setOpen(!open)}>
                <Line open={open} />
                <Line open={open} />
                <Line open={open} />
            </MenuIcon>
            <div className='navmenue'>
                <Nav open={open}>

                    {/* <PowerButton /> */}
                    <Home to="/">
                        {/* target="_blank" href="mailto:codebucks27@gmail.com" */}
                        <motion.h2

                            whileHover={{ scale: 1.1, color: '#874CCC' }}
                            whileTap={{ scale: 0.9 }}

                        >
                            Home
                        </motion.h2>
                    </Home>
                    <ABOUT to="/about" >
                        <motion.h2

                            whileHover={{ scale: 1.1, color: '#874CCC' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            About
                        </motion.h2>
                    </ABOUT>

                    <EducationExperience to="/eduexp">
                        <motion.h2

                            whileHover={{ scale: 1.1, color: '#874CCC' }}
                            whileTap={{ scale: 0.9 }}

                        >
                            Education & Experience
                        </motion.h2>
                    </EducationExperience>
                    <SKILLS to="/skills">
                        <motion.h2

                            whileHover={{ scale: 1.1, color: '#874CCC' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            My Skills
                        </motion.h2>
                    </SKILLS>
                    <WORK to="/work" >
                        <motion.h2

                            whileHover={{ scale: 1.1, color: '#874CCC' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Work
                        </motion.h2>
                    </WORK>
                    <CVRESUME to="/cvresume">
                        <motion.h2

                            whileHover={{ scale: 1.1, color: '#874CCC' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            CV/Resume
                        </motion.h2>
                    </CVRESUME>
                    <BLOG to="/blog">
                        <motion.h2

                            whileHover={{ scale: 1.1, color: '#874CCC' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Blog
                        </motion.h2>
                    </BLOG>
                    <HOBBIES to="/hobbies">
                        <motion.h2

                            whileHover={{ scale: 1.1, color: '#874CCC' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Hobbies
                        </motion.h2>
                    </HOBBIES>
                    <Contact to="/contact">
                        {/* target="_blank" href="mailto:codebucks27@gmail.com" */}
                        <motion.h2

                            whileHover={{ scale: 1.1, color: '#874CCC' }}
                            whileTap={{ scale: 0.9 }}

                        >
                            Contact
                        </motion.h2>
                    </Contact>


                </Nav>
            </div>
        </>
    )
}

export default Header
