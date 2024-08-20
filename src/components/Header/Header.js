import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { PAGE_ABOUT_ME } from "../../constants/Config";
import routes from "../../routes/routes";
import avatar from "../../assets/images/avatar.jpg";

function Header(props) {
  //
  const history = useHistory();
  const location = useLocation();
  //
  return (
    <div className="w-full py-4 fixed top-0 bg-white z-50">
      <div className="wrapper flex justify-between box-border">
        <div
          onClick={() => history.push(PAGE_ABOUT_ME)}
          className="flex cursor-pointer"
        >
          <img
            src={avatar}
            alt=""
            className="w-14 h-14 rounded-full mr-4 object-cover"
          />
          <div className=" items-center hidden lg:flex">
            <span className="font-bold text-2xl">Trà Tấn Hưởng</span>
            <span className="mx-2">/</span>
            <span className="text-gray-600">FULLSTACK DEVELOPER</span>
          </div>
        </div>
        <ul className="flex items-center">
          {routes.length &&
            routes.map(
              (route, index) =>
                route.to && (
                  <li
                    key={index}
                    className={`lg:px-4 text-sm lg:text-base lg:py-1.5 p-1 px-2 rounded-full mx-0.5 lg:mx-1 font-semibold ${
                      route.to !== location.pathname
                        ? "border-2 border-solid border-white hover:text-blue-600 hover:border-blue-600"
                        : "border-2 border-solid border-blue-600 text-blue-600"
                    }`}
                  >
                    <Link to={route.to}>{route.name}</Link>
                  </li>
                )
            )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
