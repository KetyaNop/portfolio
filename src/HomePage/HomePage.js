import React from "react";

// Import Components
import AboutMe from "../AboutMeComponent/AboutMe";
import ProjectCard from "../ProjectCardComponent/ProjectCard";
import Profile from "../ProfileComponent/Profile";
import ClassComponent from "../ClassComponent/ClassComponent";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <div>
        <Profile />
        <hr></hr>
      </div>
      <div className="Content">
        <div>
          <AboutMe />
        </div>
        <div>
          <h1>Projects</h1>
          <ProjectCard
            picture="/project_gif/furyrush.gif"
            title="Fury Rush"
            description="A “How to Train Your Dragon” inspired infinite runner game using Three.js."
            tags={["Three.js", "Typescript"]}
            blogPath="/blog/fury-rush"
            demo="https://kritinv.github.io/how-to-train-your-dragon/"
          />
          <ProjectCard
            picture="/project_gif/haptic-xcel.gif"
            title="Hapster"
            description="A visuo-vibrotactile modality for live low-Friction student feedback in the classroom."
            tags={["FastAPI", "React"]}
            blogPath="/blog/hapster"
          />
          <ProjectCard
            picture="/project_gif/poker_preflop.gif"
            title="Poker Pre-flop Strategy "
            description="A poker preflop range visualizer web application using React.js."
            tags={["React", "React Joyride"]}
            demo="https://degen101.club/"
          />
        </div>
        <div>
          <h1>Coursework</h1>
          <h2>Computer Science</h2>
          <div>
            <ClassComponent
              name="COS217"
              description="Introduction to Programming Systems"
              instructor="Szymon Rusinkiewicz"
            />
            <ClassComponent
              name="COS226"
              description="Algorithms and Data Structures"
              instructor="Kevin Wayne"
            />
            <ClassComponent
              name="COS240"
              description="Reasoning about Computation (Discrete Math)"
              instructor="Ran Raz"
            />
            <ClassComponent
              name="COS302"
              description="Mathematics for Numerical Computing and Machine Learning"
              instructor="Ryan P. Adams"
            />
            <ClassComponent
              name="COS316"
              description="Principles of Computer System Design"
              instructor="Robert Dondero"
            />{" "}
            <ClassComponent
              name="COS324"
              description="Introduction to Machine Learning"
              instructor="Sanjeev Arora and Danqi Chen"
            />
            <ClassComponent
              name="COS333"
              description="Advanced Programming Techniques"
              instructor="Robert Dondero"
            />
            <ClassComponent
              name="COS426"
              description="Computer Graphics"
              instructor="Adam Finkelstein"
            />
            <ClassComponent
              name="COS429"
              description="Computer Vision"
              instructor="Olga Russakovsky"
            />
            <ClassComponent
              name="COS436"
              description="Human-Computer Interaction"
              instructor="Andrés Monroy-Hernández and Parastoo Abtahi"
            />
            <ClassComponent
              name="COS461"
              description="Computer Networks"
              instructor="Kyle Jamieson"
            />
            <ClassComponent
              name="COS470"
              description="Principles of Blockchains"
              instructor="Pramod Viswanath"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
