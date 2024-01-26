import React from "react";

// Import Components
import AboutMe from "../AboutMeComponent/AboutMe";
import ProjectCard from "../ProjectCardComponent/ProjectCard";
import Profile from "../ProfileComponent/Profile";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <div>
        <Profile />
        <div class="dashed-line"></div>
      </div>
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
    </div>
  );
};

export default HomePage;
