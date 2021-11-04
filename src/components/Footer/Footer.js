import React from "react";
import FollowMe from "../FollowMe/FollowMe";

function Footer(props) {
  return (
    <div className="w-full py-4 box-content">
      <div className="wrapper flex justify-between flex-col md:flex-row">
        <div className="text-gray-600 mb-3 md:mb-0 text-center md:text-left">
          © 2023 by Maya Nelson.
          <br /> Proudly created with Wix.com
        </div>
        <ul className="flex justify-around md:justify-center">
          <li className="justify-center flex flex-col mx-4 md:mx-7">
            <span className="font-bold mb-2 text-center">Call</span>
            <span className="text-gray-600">0354114665</span>
          </li>
          <li className="justify-center flex flex-col mx-4 md:mx-7">
            <span className="font-bold mb-2 text-center">Write</span>
            <span className="text-gray-600">tratanhuong01@gmail.com</span>
          </li>
          <li className="justify-center flex flex-col mx-4 md:ml-7">
            <span className="font-bold mb-2 text-center">Follow</span>
            <FollowMe />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
