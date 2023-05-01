import React, { useRef, useState } from 'react'

const Box = (props) => {
    return (
        <div>
            <h4>
                Abstract
            </h4>
        <p>
        Efficient travel for an autonomous robot requires a path-planning algorithm to determine the optimal path to take based on certain criteria. The most common criteria are speed, safety, and energy, as most autonomous robots are designed to operate in remote and/or difficult terrain where recharging, repair, or replacement is difficult or impossible. Most path-planning algorithms are catered toward specific robots, environments, or tasks, so the algorithms prioritize a static set of criteria, typically one or more of the three criteria previously listed. Many robots would benefit from having a path-planning algorithm that can dynamically prioritize a combination of the three criteria while also being generalizable to any type of autonomous robot. We present a novel path-planning algorithm that accounts for a robot's specifications, including its mass, dimensions, energy usage, and climbing abilities, and allows the user to set preferences for how much to prioritize speed, safety, and energy when calculating paths on any type of terrain.  
        </p>
        </div>
    );
  };
  
  export default Box;