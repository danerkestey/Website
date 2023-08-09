import React from 'react'
import Styled from 'styled-components'
import content from './Content.json'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'

const StyledApp = Styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: #14213D;

`

const StyledNav = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    padding: 5em 0 2em 0;
`

const SocialBar = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
`

const StyledDescription = Styled.div`
    display: flex;
    flex-direction: column;
    padding: 10em 25em 0 25em;
`

const Landing = () => {
    return (
        <StyledApp>
            <StyledDescription>
                <StyledNav>
                    <h1>{content.name}</h1>
                    
                </StyledNav>

                <h2>{content.intro}</h2>
                <p>{content.description}</p>
                <p>{content.leadership}</p>
                <p>{content.hobbies}</p>
                <p>{content.outro}</p>
            
            </StyledDescription>

            <SocialBar>
                <a href="https://www.linkedin.com/in/daneryasin/" target="_blank" rel="noreferrer">
                    <FaLinkedinIn size="2em" color="white"/>
                </a>
                <a href="https://github.com/danerkestey" target="_blank" rel="noreferrer">
                    <FaGithub size="2em" color="white"/>
                </a>
                <a href="mailto:danerkyasin@gmail.com">
                    <FaEnvelope size="2em" color="white"/>
                </a>
            </SocialBar>
        </StyledApp>

    );
};
  
export default Landing;