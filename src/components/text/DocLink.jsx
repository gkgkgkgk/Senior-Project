import React, { useRef, useState } from 'react'
import './Header.css'
import docLogo from '../../assets/doc.svg'
import "./Github.css"
import paper from "../../assets/paper.pdf"

const DocLink = (props) => {
    return (
        <div className="gh">
            <a download href={paper}>
            <img src={docLogo} className="logo react" alt="React logo" />
            <p>View our paper here!</p>
            </a>
        </div>
    );
  };
  
  export default DocLink;