import React from "react";
import ItemProject from "../components/ItemProject/ItemProject";

function Projects(props) {
  return (
    <div id="projects" className="w-full bg-gray-100 pb-16">
      <div className="w-2/3 mx-auto pt-16">
        <div className="w-full flex justify-center items-center">
          <div className="bg-blue-600 w-4 h-4 mr-3"></div>
          <span className="text-4xl font-bold mb-2">Project</span>
        </div>
        <p className="text-gray-600 w-1/2 mx-auto text-center">
          Below are some projects I did myself during my schooling and some
          projects I made at home to improve my skills.
        </p>
      </div>
      <div className="w-2/3 mx-auto">
        <ItemProject />
        <ItemProject />
        <ItemProject />
        <ItemProject />
      </div>
    </div>
  );
}

export default Projects;
