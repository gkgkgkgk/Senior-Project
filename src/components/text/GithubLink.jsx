import React, { useRef, useState } from 'react'
import './Header.css'
import reactLogo from '../../assets/github-mark.svg'
import "./Github.css"

const GithubLink = (props) => {
    return (
        <div className="gh">
            <a href="https://github.com/gkgkgkgk/Senior-Project">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <p>Click to access the code!</p>
            </a>
        </div>
    );
  };
  
  export default GithubLink;