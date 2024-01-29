import React from "react";

import "./ClassComponent.css";

const ClassComponent = ({ name, description, instructor }) => {
  const getClassLevelColor = (className) => {
    const level = className.match(/\d+/);
    if (level) {
      const classLevel = parseInt(level[0], 10);
      if (classLevel >= 200 && classLevel < 300) return "level200";
      if (classLevel >= 300 && classLevel < 400) return "level300";
      if (classLevel >= 400 && classLevel < 500) return "level400";
    }
    return "defaultLevel";
  };

  const classLevelColor = getClassLevelColor(name);

  return (
    <div className="classComponent">
      <div className={`className ${classLevelColor}`}>{name}</div>
      <div className="classInfo">
        <p className="classDescription">
          {description}{" "}
          <span className="classInstructor">{"taught by " + instructor}</span>
        </p>
      </div>
    </div>
  );
};

export default ClassComponent;
