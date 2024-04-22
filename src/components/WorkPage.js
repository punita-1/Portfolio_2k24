import React from 'react'
import Header from './Header'
import SocialIcons from '../subComponents/SocialIcons'
import styled from "styled-components";
import { Work } from '../data/WorkData'

const Page = styled.div`
  background: ${props => props.theme.body};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1rem;
  width: 30rem;

  h3 {
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
      background-color: #ddd;
      padding: 0.25rem 0.5rem;
      border-radius: 3px;
    }
  }
`;

const WorkPage = () => {
  return (
    <>
      <Header />
      <SocialIcons />
    <Page>
      <div className='work-container'>
        {Work.map((item) => (
            <Card key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <ul>
              {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
            </ul>
            <a href={item.demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </Card>
        ))}
      </div>
    </Page>
        </>
  )
}

export default WorkPage