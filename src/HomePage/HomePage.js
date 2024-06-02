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
            picture={"placeholder_diw_printer.jpg"}
            title={"(Ongoing) Producing Calligraphy with Closed-Loop Control of Direct Ink Writing Via Reinforcement Learning"}
            description={""}
            advisor={"Ryan P Adams"}
            tags={[]}
          />
          <ProjectCard
            picture="/project_gif/haptic-xcel.gif"
            title="Hapster"
            description="A visuo-vibrotactile modality for live low-Friction student feedback in the classroom."
            advisor={"Parastoo Abtahi, Andrés Monroy-Hernández."}
            tags={["FastAPI", "React"]}
            blogPath="https://drive.google.com/file/d/1Rmkebj7_CEp38pSncG8m6i3Llrzd3niA/view?usp=sharing"
          />
          <ProjectCard
            picture="/project_gif/furyrush.gif"
            title="Fury Rush"
            description="A “How to Train Your Dragon” inspired infinite runner game using Three.js."
            advisor={"Adam Finkelstein"}
            tags={["Three.js", "Typescript"]}
            blogPath="https://github.com/kritinv/how-to-train-your-dragon/blob/main/Final%20Written%20Report.pdf"
            demo="https://kritinv.github.io/how-to-train-your-dragon/"
            srcCode="https://github.com/kritinv/how-to-train-your-dragon/tree/main"
          />
          <ProjectCard
            picture="/project_gif/poker_preflop.gif"
            title="Poker Pre-flop Strategy "
            description="A poker preflop range visualizer web application using React.js."
            tags={["React", "React Joyride"]}
            demo="https://degen101.club/"
            srcCode={"https://github.com/kritinv/degen101"}
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
              name="COS323"
              description="Computing and Optimization"
              instructor="Ioannis Akrotirianakis"
            />
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
              name="COS445"
              description="Economics and Computation"
              instructor="Matt Weinberg and Marcel Dall'Agnol"
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
