import React from "react";
import { useHistory } from "react-router";
import FollowMe from "../components/FollowMe/FollowMe";
import { AVATAR, CV_LINK, PAGE_PROJECT, PAGE_RESUME } from "../constants/Config";

function AboutMe(props) {
  //
  const history = useHistory();
  //
  return (
    <div id="about-me" className="w-full relative about__me">
      <div className="w-1/3 bg-gray-200 md:h-full"></div>
      <div
        className="w-full md:w-11/12 lg:w-2/3 xl:w-1/2 border-2 border-solid border-gray-200 shadow-xl rounded-lg bg-white 
          md:absolute flex md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2"
      >
        <div className="w-5/12 bg-gray-100 h-full">
          <img
            src={AVATAR}
            alt=""
            className="w-32 h-32 md:w-52 md:h-52 mt-8 rounded-full object-cover mx-auto"
          />
          <p className="text-center font-bold text-2xl my-4">Trà Tấn Hưởng</p>
          <div className="w-16 py-0.5 bg-gray-600 mx-auto"></div>
          <p className="text-center text-gray-600 my-5">FRONT-END DEVELOPER</p>
          <div className="w-full bg-white py-4 flex justify-center items-end">
            <FollowMe />
          </div>
        </div>
        <div className="w-7/12 px-3 box-border">
          <div className="w-full flex justify-between">
            <div className="my-5">
              <p className="text-5xl md:text-8xl font-bold mb-3">Hello</p>
              <p className="text-xs md:text-xl text-gray-600 mb-3">
                Wellcome to my portfolio
              </p>
            </div>
            <div className="ml-1">
              <button
                onClick={() => history.push(PAGE_RESUME)}
                className="bg-gray-600 mb-3 mt-5 hover:bg-gray-300 hover:text-gray-800 flex justify-items-end 
                  text-white text-sm md:text-base px-5 py-2 rounded-full font-semibold border-2 border-solid hover:border-gray-500"
              >
                Resume
              </button>
              <button
                onClick={() => history.push(PAGE_PROJECT)}
                className="bg-gray-600 hover:bg-gray-300 hover:text-gray-800 flex justify-items-end text-white px-5 py-2 
                  rounded-full font-semibold text-sm md:text-base border-2 border-solid hover:border-gray-500"
              >
                Projects
              </button>
            </div>
          </div>
          <hr />
          <p className="my-3 text-gray-600 text-justify">
            As a student about to graduate with my own knowledge and experience,
            I hope to contribute a small part to the development of the company.
            <br />
            <br />
            <span onClick={() => window.open(CV_LINK)}
              className="mt-2 cursor-pointer text-blue-500 font-semibold cursor-pointer hover:text-blue-600">
              Go to cv
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
