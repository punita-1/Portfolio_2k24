import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme, lightTheme } from './Themes';
import Header from './Header'
import { motion } from 'framer-motion'
// import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
// import ParticleComponent from '../subComponents/ParticleComponent';
// import BigTitle from '../subComponents/BigTitle'
// import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
//   height: 60vh;
  z-index: 3;
  line-height: 1.5;
//   display: flex;
//   justify-content: center;
//   align-items: center;
  font-size: calc(0.6rem + 1vw);
//  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
//   font-family: 'Ubuntu Mono', monospace;
//   font-style: italic;
`




const AboutPage = () => {
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <div>


                    <Box>
                        <Header />
                        <SocialIcons />
                        <Main>
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", duration: 0.5, delay: 0.4 }}
                            >
                                I am a passionate  <span style={{ fontSize: '35px', fontWeight: '700', color: 'rgb(231, 76, 112)' }}> <i>Software Developer </i></span> with a strong commitment to delivering high-quality solutions. You can find me on social media, where I am happy to connect with other professionals and discuss potential projects.

                            </motion.div>
                            <br />
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", duration: 0.5, delay: 0.6 }}
                            >
                                I am always eager to learn new skills and stay up-to-date with the latest technologies. I am open to new opportunities and would be happy to hear from you if you have a project in mind.
                            </motion.div>
                            <br />
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", duration: 0.5, delay: 0.8 }}
                            >
                                In addition to my work as a developer, I also enjoy writing  <span style={{ fontSize: '25px', fontWeight: '700', color: 'rgb(231, 76, 112)' }}> <i>Blogs </i></span> and making  <span style={{ fontSize: '25px', fontWeight: '700', color: 'rgb(231, 76, 112)' }}> <i>Youtube videos.</i></span>
                            </motion.div>
                        </Main>

                        {/* <BigTitle text="ABOUT" top="10%" left="5%" /> */}


                    </Box>

                </div>
            </ThemeProvider>

        </>
    )
}

export default AboutPage

