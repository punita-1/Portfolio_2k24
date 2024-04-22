import React, { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import HobbieComponent from '../subComponents/HobbieComponent'
import Marquee from '../subComponents/Marquee'
import Header from './Header'
import SocialIcons from '../subComponents/SocialIcons'
import styled from "styled-components";

const Page = styled.div`
  background: ${props => props.theme.body};
  height: 100vh;
  width: 100%;
`;

const HobbiesPage = () => {
    const containerRef = useRef(null)
    return (
        <>
        <Page>

        <Header/>
        <SocialIcons/>
            <LocomotiveScrollProvider
                options={
                    {
                        smooth: true,
                    
                    }
                }
                watch={
                    [
                       
                    ]
                }
                containerRef={containerRef}
                >
                <main className='App' data-scroll-container ref={containerRef}>
                    <HobbieComponent />
                    <Marquee />


                </main>
            </LocomotiveScrollProvider>
                </Page>
        </>
    )
}

export default HobbiesPage
