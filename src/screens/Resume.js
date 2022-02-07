import React from "react";
import ItemResume from "../components/ItemResume/ItemResume";
import Title from "../components/Title/Title";

function Resume(props) {
  return (
    <div id="resume" className="w-full bg-gray-100">
      <div className="w-full box-content px-2 lg:w-2/3 mx-auto py-16">
        <Title
          title="Resume"
          description="Below are some projects I did myself during my schooling and some
          projects I made at home to improve my skills."
        />
        <p className="text-gray-600 w-1/2 mx-auto text-center"></p>
        <ItemResume title={"SKILLS"}>
          <p className="my-2 font-bold text-xl">English</p>
          <p> - Read and understand documents</p>
          <p> - Basic English communication skills</p>
          <p className="my-2 font-bold text-xl">Front - End</p>
          <p>HTML , CSS , Javascript , JQuery , TailwindCSS</p>
          <p className="my-2 font-bold text-xl">Back - End</p>
          <p>PHP , Java , Spring Boot , Laravel</p>
          <p className="my-2 font-bold text-xl">SQL</p>
          <p>SQL Server , MySQL , PostgreSQL</p>
          <p className="my-2 font-bold text-xl">Library Javascript</p>
          <p>SocketIO , ReactJS</p>
          <p className="my-2 font-bold text-xl">Basic NodeJS</p>
        </ItemResume>
        <ItemResume title={"EDUCATIONS"}>
          <p className="my-2 font-bold text-xl">Viet - Han University</p>
          <p>2019 - Present</p>
        </ItemResume>
      </div>
    </div>
  );
}

export default Resume;
