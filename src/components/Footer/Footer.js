import React from "react";
import FollowMe from "../FollowMe/FollowMe";

function Footer(props) {
  return (
    <div className="w-full py-4">
      <div className="wrapper flex justify-between">
        <div className="text-gray-600">
          © 2023 by Maya Nelson.
          <br /> Proudly created with Wix.com
        </div>
        <ul className="flex">
          <li className="justify-center flex flex-col mx-7">
            <span className="font-bold mb-2 text-center">Call</span>
            <span className="text-gray-600">0354114665</span>
          </li>
          <li className="justify-center flex flex-col mx-7">
            <span className="font-bold mb-2 text-center">Write</span>
            <span className="text-gray-600">tratanhuong01@gmail.com</span>
          </li>
          <li className="justify-center flex flex-col mx-7">
            <span className="font-bold mb-2 text-center">Follow</span>
            <FollowMe />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
