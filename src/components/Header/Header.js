import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { PAGE_ABOUT_ME } from "../../constants/Config";
import routes from "../../routes/routes";

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
            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/p600x600/246993649_3028148294135017_5945473786169052701_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zOc7kYpOVp8AX-FmHCo&tn=t2Dc8eqxNna7vY47&_nc_ht=scontent.fdad3-4.fna&oh=1510dfd09fbd36bc3db649aa46de7d82&oe=61A94BC9"
            alt=""
            className="w-14 h-14 rounded-full mr-4"
          />
          <div className="flex items-center">
            <span className="font-bold text-2xl">Trà Tấn Hưởng</span>
            <span className="mx-2">/</span>
            <span className="text-gray-600">FRONT-END DEVELOPER</span>
          </div>
        </div>
        <ul className="flex items-center">
          {routes.length &&
            routes.map((route, index) => (
              <li
                key={index}
                className={`px-4 py-1.5 rounded-full mx-1 font-semibold ${
                  route.to !== location.pathname
                    ? "border-2 border-solid border-white hover:text-blue-600 hover:border-blue-600"
                    : "border-2 border-solid border-blue-600 text-blue-600"
                }`}
              >
                <Link to={route.to}>{route.name}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
