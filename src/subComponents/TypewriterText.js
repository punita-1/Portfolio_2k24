import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';

const Title = styled.h2`

`
const TypewriterText = () => {
    return (
        <Title>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true
                }}
                onInit={(typewriter) => {
                    typewriter.typeString('DESIGNER.')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('DEVELOPER.')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('CONTENT WRITER.')
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                }}
            />
        </Title>
    )
}

export default TypewriterText
