import React from 'react'
import Styled from 'styled-components'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const StyledLanding = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #172A3A;
    min-height: 100vh;
    min-width: 100vw;
`

const SocialBar = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 1em;
`

const Landing = () => {
    return (
        <StyledLanding>
            <h1>new site under construction lol</h1>
            <SocialBar>
                <a href="https://www.linkedin.com/in/daneryasin/" target="_blank" rel="noreferrer">
                    <FaLinkedinIn size="4em" color="white"/>
                </a>
                <a href="https://github.com/danerkestey" target="_blank" rel="noreferrer">
                    <FaGithub size="4em" color="white"/>
                </a>
            </SocialBar>
        </StyledLanding>
    );
};
  
export default Landing;