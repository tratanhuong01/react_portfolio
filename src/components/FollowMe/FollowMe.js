import React from "react";

function FollowMe(props) {
  return (
    <ul className="flex">
      <li className="px-2">
        <i className="bx bxl-facebook text-xl hover:text-gray-600 cursor-pointer"></i>
      </li>
      <li className="px-2">
        <i className="bx bxl-twitter text-xl hover:text-gray-600 cursor-pointer"></i>
      </li>
      <li className="px-2">
        <i className="bx bxl-github text-xl hover:text-gray-600 cursor-pointer"></i>
      </li>
      <li className="pl-2">
        <i className="bx bxl-instagram text-xl hover:text-gray-600 cursor-pointer"></i>
      </li>
    </ul>
  );
}

export default FollowMe;
