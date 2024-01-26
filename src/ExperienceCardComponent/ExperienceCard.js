import React from "react";
import "./ExperienceCard.css";

function ExperienceCard({ year, title, description, tags }) {
  return (
    <div className="project-card">
      <div className="card-year">
        <p>{year}</p>
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul className="tag-list">
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
