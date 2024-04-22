import { motion } from "framer-motion";
import React from "react";
import { FaTwitter, FaInstagramSquare, FaYoutube, FaGithub, FaSnapchat, FaFacebook } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import styled from "styled-components";
// import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
        props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
            // initial={{ scale: 0 }}
            // animate={{ scale: [0, 1, 1.5, 1] }}
            // transition={{ type: "spring", duration: 1, delay: 1 }}
            >
                <a href="">
                    <FaYoutube style={{ width: '40px', height: '40px', color: 'black' }} />
                </a>
            </motion.div>
            <motion.div
            // initial={{ scale: 0 }}
            // animate={{ scale: [0, 1, 1.5, 1] }}
            // transition={{ type: "spring", duration: 1, delay: 1 }}
            >
                <a href="">
                    <FaSnapchat style={{ width: '40px', height: '40px', color: 'black' }} />
                </a>
            </motion.div>
            <motion.div
            // initial={{ scale: 0 }}
            // animate={{ scale: [0, 1, 1.5, 1] }}
            // transition={{ type: "spring", duration: 1, delay: 1 }}
            >
                <a href="">
                    <FaInstagramSquare style={{ width: '40px', height: '40px', color: 'black' }} />
                </a>
            </motion.div>
            <motion.div
            // initial={{ scale: 0 }}
            // animate={{ scale: [0, 1, 1.5, 1] }}
            // transition={{ type: "spring", duration: 1, delay: 1 }}
            >
                <a href="">
                    <FaFacebook style={{ width: '40px', height: '40px', color: 'black' }} />
                </a>
            </motion.div>
            <motion.div
            // initial={{ scale: 0 }}
            // animate={{ scale: [0, 1, 1.5, 1] }}
            // transition={{ type: "spring", duration: 1, delay: 1.2 }}
            >
                <a href="">
                    <FaGithub style={{ width: '40px', height: '40px', color: 'black' }} />
                </a>

            </motion.div>
            <motion.div
            // initial={{ scale: 0 }}
            // animate={{ scale: [0, 1, 1.5, 1] }}
            // transition={{ type: "spring", duration: 1, delay: 1.2 }}
            >
                <a href="">
                    <SiFreelancer style={{ width: '40px', height: '40px', color: 'black' }} />
                </a>

            </motion.div>
            <motion.div
            // initial={{ scale: 0 }}
            // animate={{ scale: [0, 1, 1.5, 1] }}
            // transition={{ type: "spring", duration: 1, delay: 1.6 }}
            >
                <a href="">
                    <FaTwitter style={{ width: '40px', height: '40px', color: 'black' }} />
                </a>
            </motion.div>

            <Line style={{ width: '5px', height: '150px ', color: 'black' }}
                color={props.theme}
            // initial={{
            //     height: 0,
            // }}
            // animate={{
            //     height: "10rem",
            // }}
            // transition={{
            //     type: "spring",
            //     duration: 1,
            //     delay: 0.8,
            // }}
            />
        </Icons>
    );
};

export default SocialIcons;
