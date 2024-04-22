// import React from 'react'
// import SocialIcons from '../subComponents/SocialIcons'
// import Header from './Header'
// import styled from "styled-components";

// const Page = styled.div`
//   background: ${props => props.theme.body};
//   height: 100vh;
//   width: 100%;
// `;

// const CvResume = () => {
//     return (
//         <>
//             <Page>

//                 <Header />
//                 <SocialIcons />
//             </Page>
//         </>
//     )
// }

// export default CvResume
import React from 'react'
import SocialIcons from '../subComponents/SocialIcons'
import Header from './Header'
import styled from "styled-components";

const Page = styled.div`
  background: ${props => props.theme.body};
  height: 100%;
  padding-top:10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1rem;
  width: 50rem;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    li {
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  cursor: pointer;
`;

const CvResume = () => {
  return (
    <>
      <Header />
      <SocialIcons />
    <Page>
      <Section>
        <h2>Personal Information</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Main St, Anytown USA</p>
      </Section>
      <Section>
        <h2>Work Experience</h2>
        <ul>
          <li>
            <p>Software Engineer, XYZ Company, Jan 2019 - Present</p>
            <p>- Developed and maintained software applications using React, Redux, and Node.js.</p>
            <p>- Collaborated with cross-functional teams to deliver high-quality products on time.</p>
          </li>
          <li>
            <p>Web Developer, ABC Company, Jun 2016 - Dec 2018</p>
            <p>- Developed and maintained responsive websites using HTML, CSS, and JavaScript.</p>
            <p>- Collaborated with designers to create visually appealing and user-friendly interfaces.</p>
          </li>
        </ul>
      </Section>
      <Section>
        <h2>Education</h2>
        <ul>
          <li>
            <p>Bachelor of Science in Computer Science, University of XYZ, 2012 - 2016</p>
            <p>- Graduated with a GPA of 3.8/4.0.</p>
            <p>- Relevant coursework: Data Structures, Algorithms, Operating Systems, Computer Networks.</p>
          </li>
        </ul>
      </Section>
      <Section>
        <h2>Skills</h2>
        <ul>
          <li>
            <p>Programming Languages: JavaScript, Python, Java, C++</p>
          </li>
          <li>
            <p>Web Development: HTML, CSS, JavaScript, React, Redux, Node.js</p>
          </li>
          <li>
            <p>Database: MySQL, MongoDB</p>
          </li>
          <li>
            <p>Version Control: Git, GitHub</p>
          </li>
        </ul>
      </Section>
      <Button>
        <a href="path/to/cv.pdf" download>
          Download CV
        </a>
      </Button>
      <Button>
        <a href="path/to/resume.pdf" download>
          Download Resume
        </a>
      </Button>
    </Page>
    </>
  )
}

export default CvResume