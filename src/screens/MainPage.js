import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import routes from "../routes/routes";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import NotFound from "./NotFound";
function MainPage(props) {
  //
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const index = routes.findIndex((route) => route.to === location.pathname);
  useEffect(() => {
    //
    let timeOut;
    if (index !== -1) {
      setLoading(true);
      timeOut = setTimeout(() => {
        const pathname =
          location.pathname.replace("/", "") === ""
            ? "index"
            : location.pathname.replace("/", "");
        if (document.getElementById(pathname)) {
          window.scrollTo(
            0,
            document.getElementById(pathname).getBoundingClientRect().top +
              window.scrollY -
              40
          );
        }
        setLoading(false);
      }, 500);
    }
    return () => {
      clearTimeout(timeOut);
    };
    //
  }, [location.pathname]);
  //
  return (
    <div className="w-full">
      <Header />
      {index !== -1 ? (
        <>
          {loading && (
            <div
              className="w-full items-center justify-center flex fixed "
              style={{ height: "calc(100vh)", top: 88 }}
            >
              <i class="bx bx-loader-alt text-7xl circle__loading text-blue-600"></i>
            </div>
          )}
          <div
            className={`w-full ${loading ? "invisible" : ""}`}
            style={{ paddingTop: "88px" }}
          >
            <AboutMe />
            <Resume />
            <Projects />
            <Contact />
          </div>
        </>
      ) : (
        <NotFound />
      )}
      <Footer />
    </div>
  );
}

export default MainPage;
