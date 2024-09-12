import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from "framer-motion";
import music from "../assets/audio/u-said-it-v13-1167.mp3"

const Box = styled.div`
display:flex;
cursor:pointer;
position:fixed;
left:8rem;
top:3rem;
z-index:10;

&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
background: #874CCC;
animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1.6rem;
width: 3px;
margin:0 0.1rem
`

const SoundBar = () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if (!click) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }
    return (
        <Box onClick={() => handleClick()}>
            {/* <motion.div 
            initial={{ x:-100, opacity: 0, scale: 0 }}
            animate={{ x: 0, opacity: 1, scale: 1.2 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.5 }}> 
            </motion.div> */}

            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />


            <audio src={music} ref={ref} loop />
        </Box>
    )
}

export default SoundBar
