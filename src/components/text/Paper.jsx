import React, { useRef, useState } from 'react'
import "./Paper.css"
import GithubLink from './GithubLink';
import DocLink from './DocLink';
import poster from "../../assets/poster.png"
import page1 from "../../assets/page1.png"
import page2 from "../../assets/page2.png"

const Box = (props) => {
    return (
        <div className='paper'>
            <div className="downloads">
            <GithubLink></GithubLink>
            <DocLink></DocLink>
            </div>
            <hr/>
        <h3>
            What is Preference-Based Path-Planning for Autonomous Robots?
        </h3>
        <p>
        Autonomous robotics is a field of study that focuses on the development of robots that are able to operate independently of human control. Today, autonomous robots are used for a variety of applications, including industry, search and rescue, surveillance, and military operations. These robots require algorithms and systems that enable them to perceive their environment and make decisions based on gathered information. One of the most important tasks for a functional autonomous robot is path-planning. Path-planning is the task of finding the optimal path for a robot to follow between points in a defined space (often a physical space). Paths are considered optimal based on specific criteria; the most common criteria for autonomous robots are speed, safety, and energy. Speed relates to how much time it takes for a robot to get to a destination. Safety relates to how risk-averse or traversable a path is for a given robot. Energy relates to how energy-efficient a path is for a given robot.
        </p><p>
        However, the vast majority of path-planning algorithms are catered to very specific robots, environments, and tasks, so they are designed to only optimize for a static set of one or two of the three criteria mentioned. An example of such a path-planning algorithm is the one deployed on the Mars rovers known as Spirit, Opportunity, and Perseverance, which strictly prioritize safety when generating the path they should take. Additionally, most path-planning algorithms are designed to account for the exact specifications and capabilities of a particular robot, such as its dimensions and battery capacity. However, if a robot's objective or specifications change, it is possible that the criteria or decision-making for its path-planning algorithm would need to change as well. If a Mars rover, which usually prioritizes only safety when calculating paths, suddenly becomes low on power, it may want to switch to prioritizing energy conservation when calculating new paths. To the best of our knowledge, there is currently no path-planning algorithm that allows for adjustable levels of prioritization of the three main criteria of speed, safety, and energy, and that is also generalizable to any type of autonomous robot. 
        </p><p>
        We present a novel path-planning algorithm that addresses this issue. A user inputs various specifications of a robot, such as its mass, dimensions, energy usage, and climbing abilities. The algorithm then converts point cloud data collected by a 3D LiDAR (also provided by the user) and converts it to a 2.5D map, which is a 2D grid that represents a 3D surface or terrain by mapping the height and normals information of each point on the surface to the grid. A probabilistic road map (PRM), which is a graph comprised of a set of randomly sampled points that are each connected to a fixed amount of their nearest neighbors, is then generated on top of the height map. The path-planning algorithm A* is then applied to calculate the optimal path from one point on the PRM to another, where the cost of each edge between two points is calculated based on the data from the underlying map and the robot's specifications. Separate costs are calculated for speed, safety, and energy and individually weighted based on the user's specified preference and then summed together. Finally, a check is done to determine if the edge is impossible for the robot to traverse, and if it is impossible, a relatively high cost, denoted as the limitation cost, is added to the edge to ensure it is not considered in the path-planning process.
        </p><p>
        To demonstrate our algorithm, we have created a program with a user interface (UI) that allows a user to input the various specifications of a robot mentioned previously, along with point cloud data from a 3D LiDAR. Following the user input, the program displays a 2.5D height map representing the surrounding terrain of the robot, which can be randomly generated for demonstration purposes or based on LiDAR data inputted by the user. The user can then input a start and goal location for the robot to navigate, as well as their preferences for speed, safety, and energy. The program then uses our path-planning algorithm to calculate the optimal path from the start point to the goal point and displays it on the map for the user to see. Using the same map, the user is able to change their speed, safety, and energy preferences, robot specifications, or start and goal locations to generate new paths, to see how each of these metrics may affect the generated path. To simulate a robot, a 3D LiDAR sensor, and varying terrain, the Unity game engine is used. Unity's "Unity Industry" plugin is used to simulate high-fidelity and real-time simulations of LiDAR sensors and autonomous robots. We have also tested our algorithm on terrain generated by readings from a physical 3D LiDAR to evaluate the algorithm within real-world environments. 
        </p>
        <h3>
            Web UI
        </h3>
        <p>Below are images of our web UI. On the left is the map the user can test on, and on the right are options exposed to the user.</p>
        <img style={{width: "100%"}}src={page1}></img>
        <p>The user can specify their map preferences, graph preferences, optimization preferences, and robot configuration.</p>
        <img style={{width: "100%"}}src={page2}></img>
        <p>In order to evaluate the algorithm, various test cases were implemented in the web UI. The user can run tests with random maps, random robots, random preferences, and get the test results as a csv file.</p>
        <h3>
            Project Poster
        </h3>
        <img style={{width: "100%"}}src={poster}></img>
        </div>
    );
  };
  
  export default Box;