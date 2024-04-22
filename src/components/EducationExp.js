// import React from 'react'
// import Header from './Header'
// import SocialIcons from '../subComponents/SocialIcons'

// const EducationExp = () => {
//     return (
//         <div>
//             <Header/>
//             <SocialIcons/>
//         </div>
//     )
// }

// export default EducationExp
import React from 'react'
import Header from './Header'
import './EducationExp.css'
import SocialIcons from '../subComponents/SocialIcons'
// import SocialIcons from '../subComponents/SocialIcons'
import styled from "styled-components";

const Page = styled.div`
  background: ${props => props.theme.body};
  height: 100vh;
  width: 100%;
`;

const EducationExp = () => {
    return (
        <>
            <Page>

                <div>
                    <Header />
                    <SocialIcons />

                    <div className="education-exp-container">
                        <div className='mygrid'>
                            <div className="education-container">
                                <h2>Education</h2>
                                <div className="education-items">
                                    <div className="education-item">
                                        <h3>Bachelor of Science in Computer Science</h3>
                                        <p>University of XYZ, Graduated May 2015</p>
                                    </div>
                                    <div className="education-item">
                                        <h3>High School Diploma</h3>
                                        <p>ABC High School, Graduated June 2011</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mygrid'>

                            <div className="experience-container">
                                <h2>Experience</h2>
                                <div className="experience-item">
                                    <h3>Software Engineer</h3>
                                    <p>Company ABC, January 2016 - Present</p>
                                    <p>
                                        Responsible for designing and implementing software solutions
                                        using React, Redux, and Node.js. Collaborated with cross-functional
                                        teams to deliver high-quality products on time.
                                    </p>
                                </div>
                                <div className="experience-item">
                                    <h3>Web Developer</h3>
                                    <p>Company XYZ, June 2015 - December 2015</p>
                                    <p>
                                        Developed and maintained responsive websites using HTML, CSS,
                                        JavaScript, and WordPress. Collaborated with designers to create
                                        visually appealing and user-friendly interfaces.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        </>
    )
}

export default EducationExp