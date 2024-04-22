// import React from 'react'
// import styled, { ThemeProvider } from 'styled-components'
// import { lightTheme } from './Themes';
// import { Design, Develope } from './AllSvgs';
// import SocialIcons from '../subComponents/SocialIcons';
// // import PowerButton from '../subComponents/PowerButton';
// import ParticleComponent from '../subComponents/ParticleComponent';
// // import BigTitle from '../subComponents/BigTitle'
// import Header from './Header';


// const MySkillsPage = () => {
//     return (
//         <ThemeProvider theme={lightTheme}>
//             <Header />
//                 <SocialIcons />
//                 <ParticleComponent theme='light' />


//                 {/* <BigTitle text="SKILLS" top="80%" right="30%" /> */}



//         </ThemeProvider>

//     )
// }

// export default MySkillsPage

// import React from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import { lightTheme } from './Themes';
// // import { Design, Develop } from './AllSvgs';
// import SocialIcons from '../subComponents/SocialIcons';
// import ParticleComponent from '../subComponents/ParticleComponent';
// import Header from './Header';

// // Styled components for soft skills and technical skills
// const SkillsContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 50px;
// `;

// const SkillsSection = styled.div`
//     margin-top: 50px;
// `;

// const SkillsTitle = styled.h2`
//     font-size: 24px;
//     font-weight: bold;
//     margin-bottom: 20px;
// `;

// const SkillItem = styled.div`
//     display: flex;
//     align-items: center;
//     margin-bottom: 15px;
// `;

// const SkillIcon = styled.div`
//     margin-right: 10px;
//     width: 30px;
//     height: 30px;
//     /* Add styles for your icon */
// `;

// const SkillName = styled.div`
//     font-size: 18px;
//     /* Add additional styles for your skill name */
// `;

// const MySkillsPage = () => {
//     return (
//         <ThemeProvider theme={lightTheme}>
//             <Header />
//             <SocialIcons />
//             <ParticleComponent theme='light' />
//             <SkillsContainer>
//                 <SkillsSection>
//                     <SkillsTitle>Soft Skills</SkillsTitle>
//                     <SkillItem>
//                         <SkillName>Communication</SkillName>
//                     </SkillItem>
//                     {/* Add more soft skills as needed */}
//                 </SkillsSection>
//                 <SkillsSection>
//                     <SkillsTitle>Technical Skills</SkillsTitle>
//                     <SkillItem>
//                         <SkillName>UI/UX Design</SkillName>
//                     </SkillItem>
//                     <SkillItem>
//                         <SkillName>Web Development</SkillName>
//                     </SkillItem>
//                 </SkillsSection>
//             </SkillsContainer>
//         </ThemeProvider>
//     );
// };

// export default MySkillsPage;
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import SocialIcons from '../subComponents/SocialIcons';
import ParticleComponent from '../subComponents/ParticleComponent';
import Header from './Header';
import SkillRating from '../subComponents/RatingComponent';

const Box = styled.div`
  padding: 20px; /* Adding padding */
  background-color: rgba(255, 255, 255, 0.5); /* Making background blurry and transparent */
  backdrop-filter: blur(5px); /* Applying blur effect */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  :hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
`;

// const SkillsContainer = styled.div`
//   display: flex;
//   justify-content: center; /* Center the content horizontally */
//   padding: 50px;
// //   margin-top: 10rem;
//   background-color: ${props => props.theme.body};
//   color: ${props => props.theme.text};
//   min-height: 100vh;
// `;

// const SkillsSection = styled.div`
// padding:20px;
// width:450px;  
// flex: 1; /* Each section takes up equal space */
// //   margin-top: 10rem; /* Add some margin between the sections */
//   max-width: 800px; /* Limit the width of each section */
// `;
const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  gap: 100px;
  padding: 50px;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  min-height: 100vh;
`;

const SkillsSection = styled.div`
//   margin-top: 50px;
  width: 500px;
  margin:10px;
  max-width: 800px;
`;

const SkillsTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${props => props.theme.primary};
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const SkillIcon = styled.div`
  margin-right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.secondary};
  border-radius: 50%;
`;

const SkillName = styled.div`
  font-size: 20px;
`;

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Header />
            <SocialIcons />
            <ParticleComponent theme='light' />
            <SkillsContainer>
                <Box>

                    <SkillsSection>
                        <SkillsTitle>Soft Skills</SkillsTitle>
                        <SkillItem>
                            <SkillIcon>🗣</SkillIcon>
                            <SkillName>Communication</SkillName>
                        </SkillItem>
                        <SkillItem>
                            <SkillIcon>🤝</SkillIcon>
                            <SkillName>Teamwork</SkillName>
                            <SkillRating rating={90} color="#4caf50" />
                        </SkillItem>
                        <SkillItem>
                            <SkillIcon>🧠</SkillIcon>
                            <SkillName>Problem Solving</SkillName>
                        </SkillItem>
                        <SkillItem>
                            <SkillIcon>🧠</SkillIcon>
                            <SkillName>Quick Learner</SkillName>
                        </SkillItem>
                        <SkillItem>
                            <SkillIcon>🧠</SkillIcon>
                            <SkillName>Leadership</SkillName>
                        </SkillItem>
                        <SkillItem>
                            <SkillIcon>🧠</SkillIcon>
                            <SkillName>Cooprative</SkillName>
                        </SkillItem>
                        <SkillItem>
                            <SkillIcon>🧠</SkillIcon>
                            <SkillName>Time Management</SkillName>
                        </SkillItem>

                    </SkillsSection>
                </Box>
                <Box>

                    <SkillsSection>
                        <SkillsTitle>Technical Skills</SkillsTitle>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>🎨</SkillIcon>
                                <SkillName>FIGMA</SkillName>

                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <SkillItem>
                                <SkillIcon>📱</SkillIcon>
                                <SkillName>QGIS</SkillName>
                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>📱</SkillIcon>
                                <SkillName> Wordpress</SkillName>
                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>📱</SkillIcon>
                                <SkillName>3D Spline, Blender</SkillName>
                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>📱</SkillIcon>
                                <SkillName>Locofy </SkillName>
                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>📱</SkillIcon>
                                <SkillName>Power BI</SkillName>
                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>🎨</SkillIcon>
                                <SkillName>Python, c, c++</SkillName>


                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />


                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem style={{ width: '40px' }}>
                                <SkillIcon>🎨</SkillIcon>
                                <SkillName>DataScience-Data Analytics Basics </SkillName>

                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>🎨</SkillIcon>
                                <SkillName>Digital Marketing</SkillName>


                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem style={{ width: '40px' }}>
                                <SkillIcon>🎨</SkillIcon>
                                <SkillName>Full Stack Webdevelopment
                                    - Html, css, js, sql</SkillName>


                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>🎨</SkillIcon>
                                <SkillName>React</SkillName>


                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>🎨</SkillIcon>
                                <SkillName>DSA</SkillName>


                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>🎨</SkillIcon>
                                <SkillName>OS</SkillName>


                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>🎨</SkillIcon>
                                <SkillName>DBMS</SkillName>


                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>🎨</SkillIcon>
                                <SkillName>SQL</SkillName>

                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>🎨</SkillIcon>
                                <SkillName>UI/UX Design</SkillName>
                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>💻</SkillIcon>
                                <SkillName>Web Development</SkillName>
                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem style={{width:'40px'}}>
                                <SkillIcon>📱</SkillIcon>
                                <SkillName>Mobile Application Development
                                    Flutter</SkillName>
                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>📱</SkillIcon>
                                <SkillName>Game Development</SkillName>
                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>📱</SkillIcon>
                                <SkillName>Content Writer</SkillName>
                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>📱</SkillIcon>
                                <SkillName>ChatGPT, BlackBox, AI</SkillName>
                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>📱</SkillIcon>
                                <SkillName>Excel</SkillName>
                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <SkillItem>
                                <SkillIcon>📱</SkillIcon>
                                <SkillName>Typing</SkillName>
                            </SkillItem>
                            <SkillRating rating={70} color="#4caf50" />
                        </div>

                    </SkillsSection>
                </Box>
            </SkillsContainer>
        </ThemeProvider >
    );
};

export default MySkillsPage;
