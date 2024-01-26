import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

function ProjectCard({ picture, title, description, tags, blogPath, demo }) {
  return (
    <div className="project-card">
      <div className="card-image">
        <img
          src={process.env.PUBLIC_URL + picture}
          alt={title}
          className="project-gif"
        />
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
      <div className="link-container">
        {blogPath && (
          <Link to={blogPath} className="blog-link">
            Read More
          </Link>
        )}
        {blogPath && demo && <br />}
        {demo && (
          <Link
            to={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-link">
            Demo↗
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
