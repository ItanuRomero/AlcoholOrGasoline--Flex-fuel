import React from 'react';
import githubIcon from './githubIcon.png';
import './styles.css';

const Footer = () => {
    return (
        <footer id="main">
            <a href="https://github.com/ItanuRomero" id="linkGithub">
                <img src={githubIcon} alt="icon-github" />
                <p>&copy;ItanuRomero</p>
            </a>
        </footer>
    );
};

export default Footer;