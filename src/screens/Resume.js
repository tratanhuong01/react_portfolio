import React from "react";
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
        <div className="border-l-8 mt-10 border-solid border-blue-600 pl-4 font-bold pb-2 text-2xl text-blue-600">
          SKILLS
        </div>
        <div className="text-center text-gray-600 my-8">Loading....</div>
        <div className="border-l-8 mt-10 border-solid border-blue-600 pl-4 font-bold pb-2 text-2xl text-blue-600">
          EDUCATIONS
        </div>
        <div className="text-center text-gray-600 my-8">Loading....</div>
        <div className="border-l-8 mt-10 border-solid border-blue-600 pl-4 font-bold pb-2 text-2xl text-blue-600">
          WORK EXPERIENCE
        </div>
        <div className="text-center text-gray-600 my-8">Loading....</div>
      </div>
    </div>
  );
}

export default Resume;
