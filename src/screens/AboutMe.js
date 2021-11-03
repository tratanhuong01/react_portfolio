import React from "react";
import { useHistory } from "react-router";
import FollowMe from "../components/FollowMe/FollowMe";
import { PAGE_PROJECT, PAGE_RESUME } from "../constants/Config";

function AboutMe(props) {
  //
  const history = useHistory();
  //
  return (
    <div
      id="about-me"
      className="w-full relative"
      style={{ height: "calc(100vh - 88px)" }}
    >
      <div className="w-1/3 bg-gray-200 h-full"></div>
      <div
        className="w-1/2 border-2 border-solid border-gray-200 shadow-xl rounded-lg bg-white 
          absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-5/12 bg-gray-100">
          <img
            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/p600x600/246993649_3028148294135017_5945473786169052701_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zOc7kYpOVp8AX-FmHCo&tn=t2Dc8eqxNna7vY47&_nc_ht=scontent.fdad3-4.fna&oh=1510dfd09fbd36bc3db649aa46de7d82&oe=61A94BC9"
            alt=""
            className="w-52 h-52 mt-8 rounded-full object-cover mx-auto"
          />
          <p className="text-center font-bold text-2xl my-4">Trà Tấn Hưởng</p>
          <div className="w-16 py-0.5 bg-gray-600 mx-auto"></div>
          <p className="text-center text-gray-600 my-5">FRONT-END DEVELOPER</p>
          <div className="w-full bg-white py-4 flex justify-center">
            <FollowMe />
          </div>
        </div>
        <div className="w-7/12 px-4 box-border">
          <div className="w-full flex justify-between">
            <div>
              <p className="text-8xl font-bold mb-3">Hello</p>
              <p className="text-xl text-gray-600 mb-3">
                Wellcome to my portfolio
              </p>
            </div>
            <div className="">
              <button
                onClick={() => history.push(PAGE_RESUME)}
                className="bg-gray-600 mr-3 mb-3 mt-5 hover:bg-gray-300 hover:text-gray-800 flex justify-items-end 
                  text-white px-5 py-2 rounded-full font-semibold border-2 border-solid hover:border-gray-500"
              >
                Resume
              </button>
              <button
                onClick={() => history.push(PAGE_PROJECT)}
                className="bg-gray-600 hover:bg-gray-300 hover:text-gray-800 flex justify-items-end text-white px-5 py-2 
                  rounded-full font-semibold border-2 border-solid hover:border-gray-500"
              >
                Projects
              </button>
            </div>
          </div>
          <hr />
          <p className="my-3 text-gray-600 text-justify">
            I am Huong. I am a student at Vietnam - Korea University of
            Information and Communication Technology. I have been exposed to
            electronic devices since childhood, so I have a passion for
            technology. I had an orientation when I graduated from high school
            as to what I would study before I finished high school. And when I
            finished high school, I chose information technology. I choosed to
            the web, so I fell in love with it. I love perfection so every
            product...
            <span className="ml-4 text-blue-500 font-semibold cursor-pointer hover:text-blue-600">
              Read More
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
