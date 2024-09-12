import { motion } from "framer-motion";
import React from "react";
import { FaTwitter, FaInstagramSquare, FaYoutube, FaGithub, FaSnapchat, FaFacebook } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import styled from "styled-components";
// import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
// import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 60rem;
  zIndex: 9999;

  & > * {
    margin-right: 1.4rem;
    margin-bottom: 4.2rem;
    transition: color 0.2s ease-in-out;

    a {
      color: inherit;
    }

    &:hover {
        color: rgb(231, 76, 112);
    }
  }

  & > *:last-child {
    margin-right: 0;
  }
`;



const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
                style={{ zIndex: 9999 }}
                initial={{ scale: 0, opacity: '0' }}
                animate={{ scale: [0, 2, 1.5, 1.2], opacity: '1' }}
                transition={{ type: "spring", duration: 1.3, delay: 0.5 }}
            >
                <a href="">
                    <FaYoutube style={{ width: '40px', height: '40px' }} />
                </a>
            </motion.div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 2, 1.5, 1.2] }}
                transition={{ type: "spring", duration: 1.4, delay: 0.5 }}
            >
                <a href="">
                    <FaSnapchat style={{ width: '40px', height: '40px' }} />
                </a>
            </motion.div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 2, 1.5, 1.2] }}
                transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
            >
                <a href="">
                    <FaInstagramSquare style={{ width: '40px', height: '40px' }} />
                </a>
            </motion.div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 2, 1.5, 1.2] }}
                transition={{ type: "spring", duration: 1.6, delay: 0.5 }}
            >
                <a href="">
                    <FaFacebook style={{ width: '40px', height: '40px' }} />
                </a>
            </motion.div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 2, 1.5, 1.2] }}
                transition={{ type: "spring", duration: 1.7, delay: 0.5 }}
            >
                <a href="">
                    <FaGithub style={{ width: '40px', height: '40px' }} />
                </a>

            </motion.div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 2, 1.5, 1.2] }}
                transition={{ type: "spring", duration: 1.8, delay: 0.5 }}
            >
                <a href="">
                    <SiFreelancer style={{ width: '40px', height: '40px' }} />
                </a>

            </motion.div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 2, 1.5, 1.2] }}
                transition={{ type: "spring", duration: 1.9, delay: 0.5 }}
            >
                <a href="">
                    <FaTwitter style={{ width: '40px', height: '40px' }} />
                </a>
            </motion.div>


        </Icons>
    );
};

export default SocialIcons;
