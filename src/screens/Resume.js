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
          <p className="my-2 font-bold text-xl">Programming Language</p>
          <p>HTML, CSS, Javascript, PHP, Java</p>
          <p className="my-2 font-bold text-xl">Server Side Framework</p>
          <p>Spring boot, Laravel</p>
          <p className="my-2 font-bold text-xl">Database</p>
          <p>SQL Server, MySQL, PostgreSQL</p>
          <p className="my-2 font-bold text-xl">Web Framework</p>
          <p>ReactJS</p>
          <p className="my-2 font-bold text-xl">Basic NodeJS</p>
        </ItemResume>
        <ItemResume title={"EDUCATIONS"}>
          <p className="my-2 font-bold text-xl">
            Vietnam - Korea University of Information and Communication Technology</p>
          <p>2019 - Present</p>
        </ItemResume>
      </div>
    </div>
  );
}

export default Resume;
