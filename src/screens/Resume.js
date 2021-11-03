import React from "react";

function Resume(props) {
  return (
    <div id="resume" className="w-full bg-gray-100">
      <div className="w-2/3 mx-auto pt-16">
        <div className="w-full flex justify-center items-center">
          <div className="bg-blue-600 w-4 h-4 mr-3"></div>
          <span className="text-4xl font-bold mb-2">Resume</span>
        </div>
        <p className="text-gray-600 w-1/2 mx-auto text-center">
          Below are some projects I did myself during my schooling and some
          projects I made at home to improve my skills.
        </p>
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
