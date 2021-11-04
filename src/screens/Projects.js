import React from "react";
import ItemProject from "../components/ItemProject/ItemProject";
import Title from "../components/Title/Title";

function Projects(props) {
  return (
    <div id="projects" className="w-full bg-gray-100 pb-16">
      <div className="w-full box-content px-2 lg:w-2/3 mx-auto pt-16">
        <Title
          title="Projects"
          description="Below are some projects I did myself during my schooling and some
          projects I made at home to improve my skills."
        />
      </div>
      <div className="w-full box-content px-2 lg:w-2/3 mx-auto">
        <ItemProject />
        <ItemProject />
        <ItemProject />
        <ItemProject />
      </div>
    </div>
  );
}

export default Projects;
