import React, { useRef, useState } from 'react'
import './Header.css'
import GithubLink from './GithubLink';
import DocLink from './DocLink';

const Box = (props) => {
    return (
        <div className="text">
            <img width="200px"
            src="https://se-images.campuslabs.com/clink/images/f5e3ebdd-61b2-4be3-8337-d55490a87cc3691c5344-5614-4b02-805f-8ebba326b8ac.jpg" />
            <h1>Preference-Based Path-Planning for Autonomous Robots</h1>
            <h2>Ayden Shankman (EE '23), Gavri Kepets (EE '23), and Netanel Fiorino (ME '23)</h2>
            <h3>Senior Capstone Project Advised by Professor Carl Sable, Professor Michelle Rosen and Mike Giglia</h3>
            <hr></hr>
            <div className='paper'>
            <h3>Project Abstract</h3>
            <p>Efficient travel for an autonomous robot requires a path-planning algorithm to determine the optimal path to take based on certain criteria. The most common criteria are speed, safety, and energy, as most autonomous robots are designed to operate in remote and/or difficult terrain where recharging, repair, or replacement is difficult or impossible. Most path-planning algorithms are catered toward specific robots, environments, or tasks, so the algorithms prioritize a static set of criteria, typically one or more of the three criteria previously listed. Many robots would benefit from having a path-planning algorithm that can dynamically prioritize a combination of the three criteria while also being generalizable to any type of autonomous robot. We present a novel path-planning algorithm that accounts for a robot's specifications, including its mass, dimensions, energy usage, and climbing abilities, and allows the user to set preferences for how much to prioritize speed, safety, and energy when calculating paths on any type of terrain.</p>
            </div>
        </div>
    );
  };
  
  export default Box;